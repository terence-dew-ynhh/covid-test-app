import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home({ link }) {
  const router = useRouter();
  const { endpoint } = router.query;
  return (
    <>
      <Head>
        <title>Yale COVID-19 Vaccine Clinical Trial</title>
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
  let { hasSymptoms } = query;

  let link =
  //   hasSymptoms === 'true'
      // ? 
      'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76698,76703,76701,81079,82383,76700,81452,76702,82948,82949,78600,84072&vt=2231&dept=103010061,104010062,108010035,103720003,101050022,102010045,100001365,108710023,100001382,100001383,103010119,104010098,108010101,102010096,108710074,100001384,101980001&view=plain&public=1'
      // : 'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=76698,76703,76701,81079,82383,76700,81452,76702,82948,82949,78600,84072&vt=2231&dept=103010061,104010062,108010035,103720003,101050022,102010045,100001365,108710023,100001382,100001383,103010119,104010098,108010101,102010096,108710074,101980001&view=plain&public=1';

  return {
    link
  };
};
