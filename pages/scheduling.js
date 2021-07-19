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
  // const urlList = {
  //   'Bridgeport | Milford Area': { 
  //     'Symptomatic': 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79160,78600,76698,81079,85142&vt=2228&dept=103070032,103010119,103720003,100001384&view=plain&public=1',
  //     'Asymptomatic':'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79073,81414,79076,79074,85156,79075,81409,81411,81412,79160,78600,76698,81079,85142&vt=2102&dept=103010045,103530001,103190001,103160002,103540001,103080004,103220001,103500001,203400001,103120001,103070032,103010119,103720003,100001384&view=plain&public=1'
  //   } ,
  //   'Central CT': {
  //     'Symptomatic': 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=82948&vt=2228&dept=100001382&view=plain&public=1',
  //     'Asymptomatic':'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79084,81416,79083,82948&vt=2102&dept=101570001,101500001,101460003,100001382&view=plain&public=1'
  //    } ,
  //   // 'Greenwich Hospital': { 
  //   //   'Symptomatic': '31',
  //   //   'Asymptomatic':'33'
  //   // } ,
  //   'Lawrence and Memorial Area': { 
  //     'Symptomatic': 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2228&dept=108010101,100001383&view=plain&public=1',
  //     'Asymptomatic':'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2102&dept=108010101,100001383&view=plain&public=1'
  //   } ,
  //   'Lower Fairfield County | NY': {
  //     'Symptomatic': 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76703&vt=2228&dept=104010098&view=plain&public=1',
  //     'Asymptomatic':'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79095,79167,80284,79077,79078,80286,79079,80285,80287,62632,76703&vt=2102&dept=104050002,104140001,104160006,104240001,104290002,104200001,104030001,104130001,104080003,104340001,104010098&view=plain&public=1'
  //    } ,
  //   'New Haven Area': { 
  //     'Symptomatic': 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=88751,81452&vt=2228&dept=101130001,100001365&view=plain&public=1',
  //     'Asymptomatic':'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=88751,83688,83687,81420,79081,81417,81418,81452&vt=2102&dept=101130001,101090001,101380001,101630001,101160001,101600001,101140001,100001365&view=plain&public=1'
  //   } ,
  //   'Shoreline Area': {
  //     'Symptomatic': 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=82383&vt=2228&dept=101050022&view=plain&public=1',
  //     'Asymptomatic':'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79082,79080,79085,82383&vt=2102&dept=101050004,101700005,101310002,101050022&view=plain&public=1'
  //    } ,
  //   'Westerly Area': { 
  //     'Symptomatic': 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76702&vt=2228&dept=108710074&view=plain&public=1',
  //     'Asymptomatic':'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79729,76702&vt=2102&dept=108710007,108710074&view=plain&public=1'
  //   } ,
  // } 

  // let link = urlList[location][status];
  let link =
  status === 'Asymptomatic'
      ? 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79078,81079,81452,82106,82112,82111,78600,82383,82948,82949,76698,76700,76703,76701,84072,76702,85142&vt=2102&dept=104290002,103720003,100001365,104360001,108710071,108010098,103010061,101050022,100001382,100001383,103010061,102010045,104010062,108010035,103010119,104010098,108010101,102010096,101980001,108710074,100001384&view=plain&public=1'
      : status === 'Symptomatic' ? 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,81452,82106,82112,82111,78600,82383,82948,82949,76698,76700,76703,76701,84072,76702,85142&vt=2228&dept=103720003,100001365,104360001,108710071,108010098,103010061,101050022,100001382,100001383,103010061,102010045,104010062,108010035,103010119,104010098,108010101,102010096,101980001,108710074,100001384&view=plain&public=1':
         'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,81452,82106,82112,82111,78600,82383,82948,82949,76698,76700,76703,76701,84072,76702,85142&vt=2228&dept=103720003,104290002,100001365,104360001,108710071,108010098,103010061,101050022,100001382,100001383,103010061,102010045,104010062,108010035,103010119,104010098,108010101,102010096,101980001,108710074,100001384&view=plain&public=1'
  return {
    link
  };
};
