import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home({ link }) {
  const router = useRouter();
  const { endpoint } = router.query;
  console.log(endpoint);
  return (
    <>
      <Head>
        <title>YNHH COVID-19 Test Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid">
        <img src="/YNHHSLogo.png"></img>
      </div>

      <div className="scheduleContainer">
        {/* <iframe
          id="openSchedulingFrame"
          className="widgetframe"
          scrolling="yes"
          src={link}
        ></iframe> */}
        <h1>{link}</h1>
      </div>
      <style jsx>{`
        .scheduleContainer,
        iframe {
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-items: center;
          border: none;
        }
      `}</style>
    </>
  );
}

Home.getInitialProps = async ({ query }) => {
  const { location, status } = query;
  const urlList = {
    'Bridgeport | Milford Area': { 
      'Symptomatic': '11',
      'AsymptomaticContact':'12',
      'Asymptomatic':'13'
    } ,
    'Central CT': {
      'Symptomatic': '21',
      'AsymptomaticContact':'22',
      'Asymptomatic':'23'
     } ,
    'Greenwich Hospital': { 
      'Symptomatic': '31',
      'AsymptomaticContact':'32',
      'Asymptomatic':'33'
    } ,
    'Lawrence and Memorial Area': { 
      'Symptomatic': '41',
      'AsymptomaticContact':'42',
      'Asymptomatic':'43'
    } ,
    'Lower Fairfield County | NY': {
      'Symptomatic': '',
      'AsymptomaticContact':'',
      'Asymptomatic':''
     } ,
    'New Haven Area': { 
      'Symptomatic': '',
      'AsymptomaticContact':'',
      'Asymptomatic':''
    } ,
    'Shoreline Area': {
      'Symptomatic': '',
      'AsymptomaticContact':'',
      'Asymptomatic':''
     } ,
    'Westerly Area': { 
      'Symptomatic': '',
      'AsymptomaticContact':'',
      'Asymptomatic':''
    } ,
  } 

  let link = urlList[location][status];
  return {
    link
  };
};
