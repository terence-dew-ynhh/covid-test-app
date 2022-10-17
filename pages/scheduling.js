import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home() {

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
          src={'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=92026,91884,81624,81691,81732,81760,91885,81849,81787,81845,81850,81535,81845,81788,81793,81789,91883,81798,81803,81623,81780,82727,82726,81784,81796,81782,81801&vt=10220&dept=103010114,104010092,108010097,108710070,102010093,100001367,200010001,200010002,200010003,101010170&view=plain&public=1'}
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


