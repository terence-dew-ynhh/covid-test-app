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

  let { department, pin } = req.body;

  try {
    const employer = await req.db
      .collection('pin_list')
      .findOne({ department: department, pin: pin });

      console.log(employer.count);
    if (employer.count > 0) {
      let updateVals = {
        $set: {
          count: employer.count - 1
        }
      };
      try {
        const items = await req.db
          .collection('pin_list')
          .findOneAndUpdate({ department: department }, updateVals, {
            upsert: true
          });
      } finally {
        let result = employer == null ? false : true;

        res.status(200).send({ isValid: result });
      }
    } else {
      res.status(500).send({ overCount: true });
    }
  } catch (err) {
    res.status(400).send(`Something went wrong: ${err}`);
  }
});

// handler.post(async (req, res) => {
//   await runMiddleware(req, res, cors);

//   let { department, pin } = req.body;

//   try {
//     const items = await req.db
//       .collection('pin_list')
//       .insertOne({ department: department, pin: pin });

//     res.status(200).send('Document Updated');
//   } catch (err) {
//     res.status(400).end(`Something went wrong: ${err}`);
//   }
// });

export default handler;
