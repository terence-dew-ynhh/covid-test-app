  
import middleware from "../../middlewares/database";
import nextConnect from "next-connect";
import Cors from 'cors'

const handler = nextConnect();

handler.use(middleware);

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET','HEAD','POST'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, result => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

handler.post(async (req, res) => {

  await runMiddleware(req, res, cors)  

  let { openFlag } = req.body;


try{
  const appStateFlag = await req.db
    .collection('appstate')
    .findOneAndUpdate({},{ $set: {open: openFlag}},{upsert: true});
  

   res.status(200);
    res.send(appStateFlag);
  } catch (err) {
    res.status(400);
    res.end(`Something went wrong: ${err}`);
  }

});



handler.get(async (req, res) => {

  await runMiddleware(req, res, cors)  


try{
  const appStateFlag = await req.db
    .collection('appstate')
    .findOne({})
  console.log(appStateFlag)

  

   res.status(200);
    res.send(appStateFlag);
  } catch (err) {
    res.status(400);
    res.end(`Something went wrong: ${err}`);
  }

});


export default handler;
