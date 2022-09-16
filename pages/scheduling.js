import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home({ link }) {
  return (
    <>
      <Head>
        <title>Mohegan Flu Vaccine Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      <script src="https://mychartnp.ynhhs.org/poc/Scripts/lib/Widget/widget_sdk.js"></script>
      </Head>

      <div className="grid">
        <img src="/YNHHSLogo.png"></img>
      </div>
      <div className="scheduleContainer">
      <div id="open-scheduler"
        data-url="https://MyChartnp.ynhhs.org/poc"
        data-apikey="vXykxvjGIe80218"
        data-widget-type="openscheduling"
        data-additionalparams-dept="204620001"
        data-additionalparams-vt="10220"
        data-additionalparams-id="82100">
          
        </div>
      </div>
      <style jsx>{`
        .scheduleContainer{
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
  let link = 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=82100&vt=10220&dept=204620001&view=plain&public=1';

  return {
    link
  };
};
