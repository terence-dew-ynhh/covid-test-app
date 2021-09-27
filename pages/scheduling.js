import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
// import redirect from 'nextjs-redirect'


export default function Home({ link, recc_date, second_dose, isSpanish }) {
  const router = useRouter();

  useEffect(() => {
    // if (link == '') router.push(`/`);
      // window.location.href ='http://covidvaccine.ynhh.org/'
  }, []);

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
          {second_dose == 'true' ? (isSpanish == 'true' ? `Seleccione una fecha posterior a ${recc_date}`  : `Please Select Date After ${recc_date}`) : ''}
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
  const { recc_date, second_dose, isPfizer, isSpanish } = query;
    
  let link = "https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=91933,91923,91925,91927,91929,91931,91935&vt=2460&dept=103070034,104010097,108010099,102010094,101010172,103700027,108710073&view=plain&public=1&lang=english"
    
  return {
    link,
    recc_date,
    second_dose,
    isSpanish
  };
};
