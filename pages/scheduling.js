import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home({ link }) {
  const router = useRouter();
  const { endpoint } = router.query;
  console.log(endpoint);

  useEffect(() => {
    if (link == '') router.push(`/`);
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
  const { location = '', status = '', isBelowFive = '', code = '', condition = '' } = query;

  let testingStatus = status;
  if (isBelowFive == 'true') {
    testingStatus = `${status}Five`;
  }

  const urlList = {
    'Fairfield County and NY': {
      Symptomatic:
      {
        "bodyaches":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,85142,76703&vt=2181&dept=103010119,100001384,104010098&view=plain&public=1",

        "conjunctivitis":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,85142,76703&vt=2229&dept=103010119,100001384,104010098&view=plain&public=1",

        "cough":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,85142,76703&vt=2179&dept=103010119,100001384,104010098&view=plain&public=1",

        "diarrhea":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,85142,76703&vt=2236&dept=103010119,100001384,104010098&view=plain&public=1",

        "fever":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,85142,76703&vt=2154&dept=103010119,100001384,104010098&view=plain&public=1",

        "losstastesmell":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,85142,76703&vt=2188&dept=103010119,100001384,104010098&view=plain&public=1",

        "nausea":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,85142,76703&vt=2234&dept=103010119,100001384,104010098&view=plain&public=1",

        "newheadaches":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,85142,76703&vt=2185&dept=103010119,100001384,104010098&view=plain&public=1",

        "profoundfatigue":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,85142,76703&vt=2182&dept=103010119,100001384,104010098&view=plain&public=1",

        "runnynose":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,85142,76703&vt=2227&dept=103010119,100001384,104010098&view=plain&public=1",

        "shortbreath":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,85142,76703&vt=2180&dept=103010119,100001384,104010098&view=plain&public=1",

        "sinuscongestion":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,85142,76703&vt=2216&dept=103010119,100001384,104010098&view=plain&public=1",

        "sorethroat":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,85142,76703&vt=2187&dept=103010119,100001384,104010098&view=plain&public=1",

        "vomiting":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,85142,76703&vt=2235&dept=103010119,100001384,104010098&view=plain&public=1",

      },
      Asymptomatic: {
        mandate:
          'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79073,79076,79074,85156,79075,81409,81411,81412,81413,79095,79167,80284,79077,79078,80286,79079,80285,80287,82984,78600,85142,76703,76698&vt=2102&dept=103010045,103190001,103160002,103540001,103080004,103220001,103500001,203400001,103480001,104050002,104140001,104160006,104240001,104290002,104200001,104030001,104130001,104080003,104340001,103010119,100001384,104010098,103010119&view=plain&public=1',
        travel:
          'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79073,79076,79074,85156,79075,81409,81411,81412,81413,79095,79167,80284,79077,79078,80286,79079,80285,80287,82984,78600,85142,76703,76698&vt=1380&dept=103010045,103190001,103160002,103540001,103080004,103220001,103500001,203400001,103480001,104050002,104140001,104160006,104240001,104290002,104200001,104030001,104130001,104080003,104340001,103010119,100001384,104010098,103010119&view=plain&public=1',
        exposure:
          'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79073,79076,79074,85156,79075,81409,81411,81412,81413,79095,79167,80284,79077,79078,80286,79079,80285,80287,82984,78600,85142,76703,76698&vt=2102&dept=103010045,103190001,103160002,103540001,103080004,103220001,103500001,203400001,103480001,104050002,104140001,104160006,104240001,104290002,104200001,104030001,104130001,104080003,104340001,103010119,100001384,104010098,103010119&view=plain&public=1'
      },
      SymptomaticFive:
      {
        "bodyaches":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,85142,76703&vt=2181&dept=103010119,100001384,104010098&view=plain&public=1",

        "conjunctivitis":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,85142,76703&vt=2229&dept=103010119,100001384,104010098&view=plain&public=1",

        "cough":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,85142,76703&vt=2179&dept=103010119,100001384,104010098&view=plain&public=1",

        "diarrhea":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,85142,76703&vt=2236&dept=103010119,100001384,104010098&view=plain&public=1",

        "fever":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,85142,76703&vt=2154&dept=103010119,100001384,104010098&view=plain&public=1",

        "losstastesmell":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,85142,76703&vt=2188&dept=103010119,100001384,104010098&view=plain&public=1",

        "nausea":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,85142,76703&vt=2234&dept=103010119,100001384,104010098&view=plain&public=1",

        "newheadaches":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,85142,76703&vt=2185&dept=103010119,100001384,104010098&view=plain&public=1",

        "profoundfatigue":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,85142,76703&vt=2182&dept=103010119,100001384,104010098&view=plain&public=1",

        "runnynose":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,85142,76703&vt=2227&dept=103010119,100001384,104010098&view=plain&public=1",

        "shortbreath":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,85142,76703&vt=2180&dept=103010119,100001384,104010098&view=plain&public=1",

        "sinuscongestion":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,85142,76703&vt=2216&dept=103010119,100001384,104010098&view=plain&public=1",

        "sorethroat":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,85142,76703&vt=2187&dept=103010119,100001384,104010098&view=plain&public=1",

        "vomiting":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,85142,76703&vt=2235&dept=103010119,100001384,104010098&view=plain&public=1",

      },
      AsymptomaticFive: {
        mandate:
          'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,85142,76703&vt=2102&dept=103010119,100001384,104010098&view=plain&public=1',
        travel:
          'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,85142,76703&vt=1380&dept=103010119,100001384,104010098&view=plain&public=1',
        exposure:
          'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,85142,76703&vt=2102&dept=103010119,100001384,104010098&view=plain&public=1',
      }
    },
    'New London County': {
      Symptomatic:
      {
        "bodyaches":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2181&dept=108010101,100001383&view=plain&public=1",

        "conjunctivitis":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2229&dept=108010101,100001383&view=plain&public=1",

        "cough":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2179&dept=108010101,100001383&view=plain&public=1",

        "diarrhea":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2236&dept=108010101,100001383&view=plain&public=1",

        "fever":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2154&dept=108010101,100001383&view=plain&public=1",

        "losstastesmell":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2188&dept=108010101,100001383&view=plain&public=1",

        "nausea":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2234&dept=108010101,100001383&view=plain&public=1",

        "newheadaches":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2185&dept=108010101,100001383&view=plain&public=1",

        "profoundfatigue":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2182&dept=108010101,100001383&view=plain&public=1",

        "runnynose":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2227&dept=108010101,100001383&view=plain&public=1",

        "shortbreath":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2180&dept=108010101,100001383&view=plain&public=1",

        "sinuscongestion":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2216&dept=108010101,100001383&view=plain&public=1",

        "sorethroat":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2187&dept=108010101,100001383&view=plain&public=1",

        "vomiting":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2235&dept=108010101,100001383&view=plain&public=1"

      },
      Asymptomatic: {
        mandate:
          'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2102&dept=108010101,100001383&view=plain&public=1',
        travel:
          'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=1380&dept=108010101,100001383&view=plain&public=1',
        exposure:
          'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2102&dept=108010101,100001383&view=plain&public=1'
      },
      SymptomaticFive:
      {
        "bodyaches":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2181&dept=108010101,100001383&view=plain&public=1",

        "conjunctivitis":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2229&dept=108010101,100001383&view=plain&public=1",

        "cough":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2179&dept=108010101,100001383&view=plain&public=1",

        "diarrhea":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2236&dept=108010101,100001383&view=plain&public=1",

        "fever":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2154&dept=108010101,100001383&view=plain&public=1",

        "losstastesmell":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2188&dept=108010101,100001383&view=plain&public=1",

        "nausea":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2234&dept=108010101,100001383&view=plain&public=1",

        "newheadaches":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2185&dept=108010101,100001383&view=plain&public=1",

        "profoundfatigue":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2182&dept=108010101,100001383&view=plain&public=1",

        "runnynose":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2227&dept=108010101,100001383&view=plain&public=1",

        "shortbreath":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2180&dept=108010101,100001383&view=plain&public=1",

        "sinuscongestion":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2216&dept=108010101,100001383&view=plain&public=1",

        "sorethroat":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2187&dept=108010101,100001383&view=plain&public=1",

        "vomiting":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2235&dept=108010101,100001383&view=plain&public=1"

      },
      AsymptomaticFive: {
        mandate:
          'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2102&dept=108010101,100001383&view=plain&public=1',
        travel:
          'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=1380&dept=108010101,100001383&view=plain&public=1',
        exposure:
          'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76701,82949&vt=2102&dept=108010101,100001383&view=plain&public=1'
      }
    },
    'New Haven County and Middlesex County': {
      Symptomatic:
      {
        "bodyaches":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,81452,82383,82948,88751&vt=2181&dept=103720003,100001365,101050022,100001382,101130001&view=plain&public=1",

        "conjunctivitis":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,81452,82383,82948,88751&vt=2229&dept=103720003,100001365,101050022,100001382,101130001&view=plain&public=1",

        "cough":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,81452,82383,82948,88751&vt=2179&dept=103720003,100001365,101050022,100001382,101130001&view=plain&public=1",

        "diarrhea":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,81452,82383,82948,88751&vt=2236&dept=103720003,100001365,101050022,100001382,101130001&view=plain&public=1",

        "fever":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,81452,82383,82948,88751&vt=2154&dept=103720003,100001365,101050022,100001382,101130001&view=plain&public=1",

        "losstastesmell":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,81452,82383,82948,88751&vt=2188&dept=103720003,100001365,101050022,100001382,101130001&view=plain&public=1",

        "nausea":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,81452,82383,82948,88751&vt=2234&dept=103720003,100001365,101050022,100001382,101130001&view=plain&public=1",

        "newheadaches":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,81452,82383,82948,88751&vt=2185&dept=103720003,100001365,101050022,100001382,101130001&view=plain&public=1",

        "profoundfatigue":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,81452,82383,82948,88751&vt=2182&dept=103720003,100001365,101050022,100001382,101130001&view=plain&public=1",

        "runnynose":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,81452,82383,82948,88751&vt=2227&dept=103720003,100001365,101050022,100001382,101130001&view=plain&public=1",

        "shortbreath":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,81452,82383,82948,88751&vt=2180&dept=103720003,100001365,101050022,100001382,101130001&view=plain&public=1",

        "sinuscongestion":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,81452,82383,82948,88751&vt=2216&dept=103720003,100001365,101050022,100001382,101130001&view=plain&public=1",

        "sorethroat":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,81452,82383,82948,88751&vt=2187&dept=103720003,100001365,101050022,100001382,101130001,&view=plain&public=1",

        "vomiting":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,81452,82383,82948,88751&vt=2235&dept=103720003,100001365,101050022,100001382,101130001,&view=plain&public=1",

      },
      Asymptomatic: {
        mandate:
          'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79084,81416,79083,82948,81079,88751,83688,83687,81420,79081,81417,81418,81452,79085,82383,79080,92515&vt=2102&dept=101570001,101500001,101460003,100001382,103720003,101130001,101090001,101380001,101630001,101160001,101600001,101140001,100001365,101050004,101310002,101050022,101700005,102430001&view=plain&public=1',
        travel:
          'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79084,81416,79083,82948,81079,88751,83688,83687,81420,79081,81417,81418,81452,79085,82383,79080,92515&vt=1380&dept=101570001,101500001,101460003,100001382,103720003,101130001,101090001,101380001,101630001,101160001,101600001,101140001,100001365,101050004,101310002,101050022,101700005,102430001&view=plain&public=1',
        exposure:
          'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79084,81416,79083,82948,81079,88751,83688,83687,81420,79081,81417,81418,81452,79085,82383,79080,92515&vt=2102&dept=101570001,101500001,101460003,100001382,103720003,101130001,101090001,101380001,101630001,101160001,101600001,101140001,100001365,101050004,101310002,101050022,101700005,102430001&view=plain&public=1'
      },
      SymptomaticFive:
      {
        "bodyaches":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,81452,82383,82948&vt=2181&dept=103720003,100001365,101050022,100001382&view=plain&public=1",

        "conjunctivitis":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,81452,82383,82948&vt=2229&dept=103720003,100001365,101050022,100001382&view=plain&public=1",

        "cough":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,81452,82383,82948&vt=2179&dept=103720003,100001365,101050022,100001382&view=plain&public=1",

        "diarrhea":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,81452,82383,82948&vt=2236&dept=103720003,100001365,101050022,100001382&view=plain&public=1",

        "fever":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,81452,82383,82948&vt=2154&dept=103720003,100001365,101050022,100001382&view=plain&public=1",

        "losstastesmell":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,81452,82383,82948&vt=2188&dept=103720003,100001365,101050022,100001382&view=plain&public=1",

        "nausea":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,81452,82383,82948&vt=2234&dept=103720003,100001365,101050022,100001382&view=plain&public=1",

        "newheadaches":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,81452,82383,82948&vt=2185&dept=103720003,100001365,101050022,100001382&view=plain&public=1",

        "profoundfatigue":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,81452,82383,82948&vt=2182&dept=103720003,100001365,101050022,100001382&view=plain&public=1",

        "runnynose":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,81452,82383,82948&vt=2227&dept=103720003,100001365,101050022,100001382&view=plain&public=1",

        "shortbreath":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,81452,82383,82948&vt=2180&dept=103720003,100001365,101050022,100001382&view=plain&public=1",

        "sinuscongestion":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,81452,82383,82948&vt=2216&dept=103720003,100001365,101050022,100001382&view=plain&public=1",

        "sorethroat":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,81452,82383,82948&vt=2187&dept=103720003,100001365,101050022,100001382&view=plain&public=1",

        "vomiting":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,81452,82383,82948&vt=2235&dept=103720003,100001365,101050022,100001382&view=plain&public=1",

      },
      AsymptomaticFive: {
        mandate:
          'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,88751,81452,82383,82948&vt=2102&dept=103720003,101130001,100001365,101050022,100001382&view=plain&public=1',
        travel:
          'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,88751,81452,82383,82948&vt=1380&dept=103720003,101130001,100001365,101050022,100001382&view=plain&public=1',
        exposure:
          'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,88751,81452,82383,82948&vt=2102&dept=103720003,101130001,100001365,101050022,100001382&view=plain&public=1'
      }
    },

    'Washington RI County': {
      Symptomatic:
      {
        "bodyaches":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76702&vt=2181&dept=108710074&view=plain&public=1",

        "conjunctivitis":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76702&vt=2229&dept=108710074&view=plain&public=1",

        "cough":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76702&vt=2179&dept=108710074&view=plain&public=1",

        "diarrhea":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76702&vt=2236&dept=108710074&view=plain&public=1",

        "fever":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76702&vt=2154&dept=108710074&view=plain&public=1",

        "losstastesmell":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76702&vt=2188&dept=108710074&view=plain&public=1",

        "nausea":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76702&vt=2234&dept=108710074&view=plain&public=1",

        "newheadaches":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76702&vt=2185&dept=108710074&view=plain&public=1",

        "profoundfatigue":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76702&vt=2182&dept=108710074&view=plain&public=1",

        "runnynose":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76702&vt=2227&dept=108710074&view=plain&public=1",

        "shortbreath":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76702&vt=2180&dept=108710074&view=plain&public=1",

        "sinuscongestion":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76702&vt=2216&dept=108710074&view=plain&public=1",

        "sorethroat":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76702&vt=2187&dept=108710074&view=plain&public=1",

        "vomiting":
          "https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76702&vt=2235&dept=108710074&view=plain&public=1"

      },
      Asymptomatic: {
        mandate:
          'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76702&vt=2102&dept=108710074&view=plain&public=1',
        travel:
          'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76702&vt=2102&dept=108710074&view=plain&public=1',
        exposure:
          'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76702&vt=2102&dept=108710074&view=plain&public=1'
      },
      SymptomaticFive:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76702&vt=2228&dept=108710074&view=plain&public=1',
      AsymptomaticFive: {
        mandate:
          'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76702&vt=2102&dept=108710074&view=plain&public=1',
        travel:
          'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76702&vt=2102&dept=108710074&view=plain&public=1',
        exposure:
          'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76702&vt=2102&dept=108710074&view=plain&public=1'
      }
    }
  };
  let link = location ? urlList[location][testingStatus] : '';
  if (testingStatus == 'Symptomatic' || testingStatus == 'SymptomaticFive') {
    link = location ? urlList[location][testingStatus][condition] : '';
  } 

  if (status.includes('Asymptomatic'))
    link = location ? urlList[location][testingStatus][code] : '';
  return {
    link
  };
};
