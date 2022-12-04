import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
export default function Home({ link }) {
  const router = useRouter();
  const { endpoint } = router.query;
  
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
  const { symptoms } = query;
  let link =
    symptoms == "true"
      ? 'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/standalone?id=88976&vt=2443&dept=201570002&view=plain&public=1&lang=english'
      : 'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/standalone?id=88976&vt=2443&dept=201570002&view=plain&public=1&lang=english';

  return {
    link
  };
};
