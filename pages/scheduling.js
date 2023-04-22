import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home({ link }) {
  const router = useRouter();
  const { endpoint } = router.query;
  console.log(endpoint);

  useEffect(() => {
    window.open(link, '_blank').focus();
  }, []);

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
  const { location = '', status = '', isBelowFive = '', code = '' } = query;

  let testingStatus = status;
  if (isBelowFive == 'true') {
    testingStatus = `${status}Five`;
  }

  const urlList = {
    'Fairfield County and NY': {
      Symptomatic:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=78600,85142,76703,76698&vt=1946&dept=103010119,100001384,104010098,103010119&view=plain&public=1https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79079,83141,79095,80287,79078,79075,79074,80285,79167,80284,79076,82984,85156,81411,80286,79077&vt=1946&dept=104030001,103550001,104050002,104080003,104290002,103080004, 103160002,104130001,104140001,104160006,103190001,104340001,103220001,104200001,104240001&view=plain&public=1',
      Asymptomatic:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79073,79076,79074,85156,79075,81409,81411,81412,81413,79095,79167,80284,79077,79078,80286,79079,80285,80287,82984,78600,85142,76703,76698&vt=1935&dept=103010045,103190001,103160002,103540001,103080004,103220001,103500001,203400001,103480001,104050002,104140001,104160006,104240001,104290002,104200001,104030001,104130001,104080003,104340001,103010119,100001384,104010098,103010119&view=plain&public=1',
      SymptomaticFive:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=78600,85142,76703&vt=1946&dept=103010119,100001384,104010098&view=plain&public=1',
      AsymptomaticFive:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=78600,85142,76703&vt=1935&dept=103010119,100001384,104010098&view=plain&public=1'
    },
    'New London County': {
      Symptomatic:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=76701,82949&vt=1946&dept=108010101&view=plain&public=1',
      Asymptomatic:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=76701,82949&vt=1935&dept=108010101,100001383&view=plain&public=1',
      SymptomaticFive:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=76701,82949&vt=1946&dept=108010101&view=plain&public=1',
      AsymptomaticFive:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=76701,82949&vt=1935&dept=108010101,100001383&view=plain&public=1'
    },
    'New Haven County and Middlesex County': {
      Symptomatic:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=81420,81416,81417,81418,83684,79081,88751,79080,79084,92515,79085&vt=1946&dept=10630001,101500001,101600001,101140001,101380001,101160001101130001,101700005,101570001,102430001,101310002&view=plain&public=1',
      Asymptomatic:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79084,81416,79083,82948,81079,88751,83688,83687,81420,79081,81417,81418,81452,79085,82383,79080,92515&vt=1935&dept=101570001,101500001,101460003,100001382,103720003,101130001,101090001,101630001,101160001,101600001,101140001,100001365,101050004,101310002,101050022,101700005,102430001&view=plain&public=1',
      SymptomaticFive:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=81079,88751,81452,82383,82948&vt=1946&dept=103720003,100001365,101050022,100001382&view=plain&public=1',
      AsymptomaticFive:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=81079,88751,81452,82383,82948&vt=1935&dept=103720003,100001365,101050022,100001382&view=plain&public=1'
    },

    'Washington RI County': {
      Symptomatic:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=76702&vt=1946&dept=108710074&view=plain&public=1',
      Asymptomatic:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=76702&vt=1935&dept=108710074&view=plain&public=1',
      SymptomaticFive:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=76702&vt=1946&dept=108710074&view=plain&public=1',
      AsymptomaticFive:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=76702&vt=1935&dept=108710074&view=plain&public=1'
    }
  };

  let link = location ? urlList[location][testingStatus] : '';
  
  return {
    link
  };
};
