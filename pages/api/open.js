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

  let { openFlag } = req.body;

  let isOpen = false;

  if (openFlag == true) {
    isOpen = true;
  }

  try {
    const appStateFlag = await req.db
      .collection('main_appstate')
      .findOneAndUpdate({}, { $set: { open: isOpen } }, { upsert: true });

    res.status(200).send(appStateFlag);
  } catch (err) {
    res.status(400).end(`Error: ${err}`);
  }
});

handler.get(async (req, res) => {
  await runMiddleware(req, res, cors);

  try {
    const appStateFlag = await req.db.collection('main_appstate').findOne({});
    console.log(appStateFlag);

    res.status(200);
    res.send(appStateFlag);
  } catch (err) {
    res.status(400);
    res.end(`Error: ${err}`);
  }
});

export default handler;
