import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
// import redirect from 'nextjs-redirect'

export default function Home({ link, recc_date, second_dose, isSpanish }) {
  const router = useRouter();

  useEffect(() => {
    if (link == '') router.push(`/`);
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
          {second_dose == 'true'
            ? isSpanish == 'true'
              ? `Seleccione una fecha posterior a ${recc_date}`
              : `Please Select Date After ${recc_date}`
            : ''}
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
  const { recc_date, second_dose, isPfizer, isSpanish, in_zip_range } = query;
  let link = '';

  if (in_zip_range === 'true')
    link =
      'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=83833,83836,83835,83834,85604&vt=2293&dept=421010023,421020006,421090007,421160004,421030003&view=plain&public=1';
  else
    link =
      'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=84788,84789,84786,84787,84790,84814,85097,85374,85635,85636,85637,85638,85639,85640,85642,85643&vt=2293&dept=102360001,102350001,102390001,102370001,102340001,102380001,102400001,101960001&view=plain&public=1';

  console.log(link);
  if (isSpanish == 'true') link = link + '&lang=espanol';
  else link = link + '&lang=english';
  if (second_dose == null) link = '';

  return {
    link,
    recc_date,
    second_dose,
    isSpanish
  };
};
