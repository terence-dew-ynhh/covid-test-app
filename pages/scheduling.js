import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home({ link }) {
  const router = useRouter();
  console.log(link);

  useEffect(() => {
    window.open(link, '_blank').focus();
  }, []);
  return (
    <>
      <Head>
        <title>CCSU COVID-19 Test Scheduler</title>
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
  const { isstudent } = query;
  let link = 
    isstudent == "true"
      ? 'https://openscheduling.ynhhs.org/Mychart-PRD/openscheduling/standalone?id=89312&vt=2102&dept=100001390&view=plain&public=1'
      : 'https://openscheduling.ynhhs.org/Mychart-PRD/openscheduling/standalone?id=91049&vt=2455&dept=100001390&view=plain&public=1';
  if(!query.isstudent) link = null;
  return {
    link
  };
};
