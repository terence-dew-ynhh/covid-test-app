import middleware from '../../middlewares/database';
import nextConnect from 'next-connect';
import Cors from 'cors';
const ObjectId = require('mongodb').ObjectId;

const handler = nextConnect();

handler.use(middleware);

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD', 'POST']
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

handler.post(async (req, res) => {
  await runMiddleware(req, res, cors);

  if (req.body.phone) {
    console.log(req.body)
    let contact = {
      ...req.body
    };

    try {
      const items = await req.db.collection('rtw_contacts').insertOne(contact);

      res.status(200);
      res.send('Document Updated');
    } catch (err) {
      res.status(400);
      res.end(`Something went wrong: ${err}`);
    }
  } else {
    console.log(req.body)
    const { id, occ_review } = req.body;

    const myquery = { _id: ObjectId(id) };
    const updatedStatus = { $set: { occ_health_review: occ_review } };
    await req.db
      .collection('rtw_contacts')
      .findOneAndUpdate(myquery, updatedStatus)
      .then(() =>{
        res.send(`Updated ${id}`);
      })
      .catch((err) => console.log(err));
  }
});

handler.get(async (req, res) => {
  await runMiddleware(req, res, cors);

  await req.db
    .collection('rtw_contacts')
    .find({})
    .toArray((err, rtwcontacts) => {
      if (err) throw err;
      res.json(rtwcontacts);
    });
});

export default handler;
