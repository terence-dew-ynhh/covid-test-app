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
  const { endpoint } = query;

  let link =
    endpoint === 'Asymptomatic'
      ? 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,81452,82106,82112,82111,78600,82383,82948,82949,76698,76700,76703,76701&vt=2102&dept=103720003,100001365,104360001,108710071,108010098,103010061,101050022,100001382,100001383,103010061,102010045,104010062,108010035,103010119,104010098,108010101,102010096&view=plain&public=1'
      : 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81079,81452,82106,82112,82111,78600,82383,82948,82949,76698,76700,76703,76701&vt=2228&dept=103720003,100001365,104360001,108710071,108010098,103010061,101050022,100001382,100001383,103010061,102010045,104010062,108010035,103010119,104010098,108010101,102010096&view=plain&public=1';

  return {
    link
  };
};
