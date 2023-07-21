import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home({ link }) {
  const router = useRouter();
  const { endpoint } = router.query;

  useEffect(() => {
    window.location.href = link;
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
  const { language } = query;
  let link = 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=115456&vt=8051785&dept=101020054&view=plain&public=1' 
  if(language == 'English'){
      link = 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78611&vt=8051785&dept=101020054&view=plain&public=1'
  }
  return {
    link
  };
};
