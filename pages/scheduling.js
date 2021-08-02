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
        <iframe
          id="openSchedulingFrame"
          className="widgetframe"
          scrolling="yes"
          src={link}
        ></iframe>
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
    'Fairfield County': { 
      'Symptomatic': 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,76698,85142,76703&vt=2228&dept=103070032,103010119,100001384,104010098&view=plain&public=1',
      'Asymptomatic':'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79073,81414,79076,79074,85156,79075,81409,81411,81412,79160,78600,76698,81079,85142&vt=2102&dept=103010045,103530001,103190001,103160002,103540001,103080004,103220001,103500001,203400001,103120001,103070032,103010119,103720003,100001384&view=plain&public=1'
    } ,
    'Middlesex Country': {
      'Symptomatic': 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79080&vt=2102&dept=101700005&view=plain&public=1',
      'Asymptomatic':'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79080&vt=2102&dept=101700005&view=plain&public=1'
     } ,
    'New London County': { 
      'Symptomatic': 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2228&dept=108010101,100001383&view=plain&public=1',
      'Asymptomatic':'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2102&dept=108010101,100001383&view=plain&public=1'
    } ,
    'Northern New Haven County': {
      'Symptomatic': 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=82948&vt=2228&dept=100001382&view=plain&public=1',
      'Asymptomatic':'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79084,81416,79083,82948&vt=2102&dept=101570001,101500001,101460003,100001382&view=plain&public=1'
     } ,
    'Southern New Haven County': { 
      'Symptomatic': 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,88751,81452,82383&vt=2228&dept=103720003,101130001,100001365,101050022&view=plain&public=1',
      'Asymptomatic':'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81414,81079,88751,83688,83687,81420,79081,81417,81418,81452,79082,79085,82383&vt=2102&dept=103530001,103720003,101130001,101090001,101380001,101630001,101160001,101600001,101140001,100001365,101050004,101310002,101050022&view=plain&public=1'
    } ,
    'Washington RI County': {
      'Symptomatic': 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76702&vt=2228&dept=108710074&view=plain&public=1',
      'Asymptomatic':'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76702,79729&vt=2102&dept=108710074,108710007&view=plain&public=1'
     } ,
    'Westchester NY County': { 
      'Symptomatic': 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79077&vt=2102&dept=104240001&view=plain&public=1',
      'Asymptomatic':'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79077&vt=2102&dept=104240001&view=plain&public=1'
    } ,
  } 

  let link = urlList[location][status];
 
  return {
    link
  };
};
