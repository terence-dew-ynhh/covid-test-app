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
    
  let link =
    second_dose == 'true'
      ? isPfizer == 'true'
        ? 'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=83668,83667,74622,84623,83665,83652,83656,84799,84798,84796,84797,84800,84816,85109,85376&vt=2339&dept=204150016,204590014,201280003,208040011,204010005,204400009,102360001,102350001,102370001,102340001,102380001,102400001,101960001&view=plain&public=1'
        :  'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=85687,85685&vt=2293&dept=102390001,102340001&view=plain&public=1'
      : 'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=85688,85685,85689&vt=2293&dept=101960001,102340001,102400001&view=plain&public=1';

      if(isSpanish == 'true') link = link + "&lang=espanol"
      else link = link + "&lang=english"
      if(second_dose == null) link = '';

  return {
    link,
    recc_date,
    second_dose,
    isSpanish
  };
};
// export default redirect('http://www.ynhhs.org/covidvaccine');