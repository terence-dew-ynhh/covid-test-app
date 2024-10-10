import Head from 'next/head';
import { useEffect } from 'react';

export default function Home({ link }) {

  useEffect(() => {
    window.open(link, '_blank').focus();
  }, []);

  return (
    <>
      <Head>
        <title>Mohegan Flu Vaccine Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid">
        <img src="/YNHHSLogo.png"></img>
      </div>
      <div className="scheduleContainer">
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

Home.getInitialProps = async () => {
  let link = 'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/standalone?id=82100&vt=10220&dept=204620001&view=plain&public=1&lang=english';

  return {
    link
  };
};