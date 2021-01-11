import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home({ link, recc_date, second_dose }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>COVID-19 Vaccine Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid">
        <img src="/YNHHSLogo.png"></img>
      </div>

      <div className="scheduleContainer">
        <h3>
          {second_dose == 'true' && `Please Select Date After ${recc_date}`}
        </h3>
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
          flex-direction: column;
          justify-items: center;
          border: none;
        }
        h3 {
          margin-left: 25px;
        }
      `}</style>
    </>
  );
}

Home.getInitialProps = async ({ query }) => {
  const { recc_date, second_dose, isPfizer } = query;
  let link =
    second_dose == 'true'
      ? isPfizer == 'true' ? 'https://mychartnp.ynhhs.org/POC/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=83667&vt=2295&dept=204150016&view=plain&public=1' : 'https://mychart.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=83667&vt=2295&dept=204150016&view=plain&public=1'
      : 'https://mychart.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=83666&vt=2293&dept=204150016&view=plain&public=1';

  return {
    link,
    recc_date,
    second_dose
  };
};
