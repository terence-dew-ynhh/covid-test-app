import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home({ link }) {
  const router = useRouter();
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
  const { asymp } = query;
  console.log(asymp);
  let link =
    asymp === 'true'
      ? 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81452,81079,82106,82111,82112,82383,76698,78600,76704,76700,76703,76701,76702,82948,82949,83140,83139,83164,79073,79074,81414,81413,82457,81409,79075,79076,79077,79095,79078,79079,79080,79081,79082,79083,79084,79085,79167,80284,80285,80286,80287,81420,81419,81418,81417,81416,82984,84072,85142&vt=2275&dept=100001365,103720003,104360001,108010098,108710071,101050022,103010061,103700005,104010062,108010035,102010045,108710023,100001382,100001383,103070032,102100010,104010094,103010045,103160002,103530001,103480001,103490001,103220001,103080004,103190001,104240001,104050002,104290002,104030001,101700005,101160001,101050004,101460003,101570001,101310002,104140001,104160006,104130001,104200001,104080003,101630001,101230010,101140001,101600001,101500001,104340001,103010119,104010098,108010101,102010096,108710074,101980001,100001384&view=plain&public=1'
      : 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81452,81079,82106,82111,82112,82383,76698,78600,76704,76700,76703,76701,76702,82948,82949,83139,84072,85142&vt=2276&dept=100001365,103720003,104360001,108010098,108710071,101050022,103010061,103700005,104010062,108010035,102010045,108710023,100001382,100001383,103070032,103010119,104010098,108010101,102010096,108710074,101980001&view=plain&public=1';

  return {
    link
  };
};
