import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
  let { uuid, field, data } = req.body;

  let updateQuery = {
    _id: uuid
  };

  let updateVals = {
    $set: {
      [field]: data
    }
  };

  const items = await db
    .collection('survey_answers')
    .findOneAndUpdate(updateQuery, updateVals, { upsert: true });
    console.log(items);
    res.json(doc);
});

export default handler;
