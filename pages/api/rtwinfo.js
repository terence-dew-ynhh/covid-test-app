import middleware from '../../middlewares/database';
import nextConnect from 'next-connect';
import Cors from 'cors';

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

  console.log(req.body);

  let updateVals = {
    ...req.body,
    date: new Date(Date.now()).toISOString()
  };

  try {
    const items = await req.db.collection('rtw_contacts').insertOne(updateVals);

    res.status(200);
    res.send('Document Updated');
  } catch (err) {
    res.status(400);
    res.end(`Something went wrong: ${err}`);
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
