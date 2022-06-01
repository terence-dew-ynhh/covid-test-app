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
  const { location = '', status = '', isBelowFive = '', code = '' } = query;

  let link =
    status == 'Symptomatic'
      ? 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78600,85142,76703,88751,81079,83232,82383,82948,76701,82949,76702&vt=1946&dept=103010119,100001384,104010098,101130001,103720003,100001365,101050022,100001382,108010101,100001383,108710074&view=plain&public=1'
      : 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=17499,79079,80284,79167,79095,83141,80285,79077,81409,79074,85156,79075,79078,80286,80287,79076,81411,81413,82984,78600,85142,76703,92515,79085,81418,83687,81420,81416,79083,79080,81417,79084,79081,88751,81079,83232,82383,82948,76701,82949,76702&vt=1935&dept=103010045,104030001,104160006,104140001,104050002,103550001,104130001,104240001,103220001,103160002,103540001,103080004,104290002,104200001,104080003,103190001,103500001,103480001,104340001,103010119,100001384,104010098,102430001,101310002,101140001,101380001,101630001,101500001,101460003,101700005,101600001,101570001,101160001,101130001,103720003,100001365,101050022,100001382,108010101,100001383,108710074&view=plain&public=1';

  return {
    link
  };
};
