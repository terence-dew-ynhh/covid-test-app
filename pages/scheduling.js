import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home({ link }) {
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

Home.getInitialProps = async () => {
  let link = 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79084,81416,79083,82948,81079,88751,83688,83687,81420,79081,81417,81418,81452,79085,82383,79080,79073,79078,79077&vt=2275&dept=101570001,101500001,101460003,100001382,103720003,101130001,101090001,101380001,101630001,101160001,101600001,101140001,100001365,101050004,101310002,101050022,101700005,103010045,104290002,104240001&view=plain&public=1';

  return {
    link
  };
};
