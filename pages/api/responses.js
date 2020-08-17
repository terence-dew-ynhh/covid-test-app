import nextConnect from 'next-connect';
import database from '../../middlewares/database';

const handler = nextConnect();

handler.use(database);

handler.all(async (req, res) => {

  let { uuid, field, data } = req.body;

  let updateQuery = {
    _id: uuid
  };

  let updateVals = {
    $set: {
      [field]: data
    }
  };

  const items = await req.db
    .collection('survey_answers')
    .findOneAndUpdate(updateQuery, updateVals, { upsert: true });
  console.log(items);

  res.json(items);
});

export const config = {
  api: {
    bodyParser: process.env.NODE_ENV !== 'production'
  }
};

export default handler;
