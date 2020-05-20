const express = require('express');
const MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser')

const router = express.Router();

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })



const makeYaleBody = (body) => {
    return {
      _id: body.net_id,
      covid_symptoms: body.covid_symptoms,
      work_remote: body.work_remote,
      work_remote_age: body.work_remote_age,
      survey_src: body.survey_src,
      submitted_timestamp: Date.now(),
    };
  };

router.post('/api/log',jsonParser ,async(req, res) => {
  const client = new MongoClient('mongodb://spinup-00115d.spinup.yale.edu:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('survey_answers');

  console.log(`Connected MongoDB ${req.db.namespace}`)

  console.log(client);

    try {
        const {db, body} = req;
        const mongoDBDocumentObj = makeYaleBody(body);
    
        await db.collection("answers").insertOne(mongoDBDocumentObj);
        res.status(200);
        res.send("1 Document Created");
      } catch (err) { 
        res.send(`Something went wrong: ${err}`);
        res.status(400);
      }
});

module.exports = router;
