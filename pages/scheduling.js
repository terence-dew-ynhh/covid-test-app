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
  const { symptoms } = query;
  let link =
    symptoms == "true"
      ? 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=84157&vt=2228&dept=201570001&view=plain&public=1'
      : 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79929,82746&vt=2102&dept=201570001&view=plain&public=1';

  return {
    link
  };
};
