import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home({ link, recc_date, second_dose }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>YNHH COVID-19 Vaccine Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid'>
      <img src="/YNHHSLogo.png"></img>
      </div>

      
      <div className="scheduleContainer">
      <h3>{(second_dose == 'true') && `Please Select Date After ${recc_date}`}</h3>
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
        h3{
          margin-left: 25px;
        }
      `}</style>
    </>
  );
}

Home.getInitialProps = async ({ query }) => {
  const { recc_date, second_dose } = query;
  let link = 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=11959,11961&vt=10542&dept=105150003&view=plain&public=1';
  

  return {
    link,
    recc_date,
    second_dose
  };
};
 