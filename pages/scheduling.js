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
  const { recc_date, second_dose, isPfizer, isSpanish, in_zip_range, jjApproved, overeighteen  } = query;
  let link = 'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=85604,85773,86539&vt=2293&dept=421030003&view=plain&public=1';

  if(jjApproved == "false") link = 'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=85604,86539&vt=2293&dept=421030003&view=plain&public=1'

  if(overeighteen == "false") link = 'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=86539&vt=2293&dept=421030003&view=plain&public=1'
 
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
