import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const client = new MongoClient('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  console.log("Test")
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('covidvaccine');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;