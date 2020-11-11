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
  const { asymp } = query;
  let link = asymp === "true"
    ? 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81452,81079,82106,82111,82112,82383,76698,78600,76704,76700,76703,76701,76702,82948,82949,83140,83139,83164&vt=2275&dept=100001365,103720003,104360001,108010098,108710071,101050022,103010061,103700005,104010062,108010035,102010045,108710023,100001382,100001383,103070032,102100010,104010094&view=plain&public=1'
    : 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81452,81079,82106,82111,82112,82383,76698,78600,76704,76700,76703,76701,76702,82948,82949,83139&vt=2276&dept=100001365,103720003,104360001,108010098,108710071,101050022,103010061,103700005,104010062,108010035,102010045,108710023,100001382,100001383,103070032&view=plain&public=1';



  return {
    link
  };
};
