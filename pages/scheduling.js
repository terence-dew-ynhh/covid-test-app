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
    'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76698,76701,81079,82383,81452,76702,82948,82949,79643&vt=2228&dept=103010119,108010101,103720003,101050022,100001365,108710074,100001383,100001358,100001382&view=plain&public=1';
  // const locationMapping = [
  //   {
  //     name: 'Mohegan Sun Employees',
  //     link:
  //       'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76698,76701,81079,82383,81452,76702,82948,82949,79643&vt=2228&dept=103010119,108010101,103720003,101050022,100001365,108710074,100001383,100001358,100001382&view=plain&public=1'
  //   }
  // ];

  // locationMapping.forEach((element) => {
  //   if (endpoint === element.name) {
  //     link = element.link;
  //   }
  // });

  return {
    link
  };
};
