import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
 
  res.json("Cool")
});

handler.post(async (req, res) => {
  console.log('here');

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

export default (req, res) => handler.apply(req, res) ;
