import nextConnect from 'next-connect';


async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('survey_answers');
  console.log(`Connected MongoDB ${req.db.namespace}`)
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;