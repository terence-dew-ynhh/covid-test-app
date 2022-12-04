import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
// import redirect from 'nextjs-redirect'


export default function Home({ link, recc_date, second_dose, isSpanish }) {
  const router = useRouter();

  useEffect(() => {
    window.open(link, '_blank').focus();
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
    
  let link = "https://openscheduling.ynhhs.org/mychart-prd/openscheduling/standalone?id=91925,91933,91929,91923,91927,91931,91935&vt=2460&dept=103070034,101010172,108010099,102010094,104010097,108710073,103700027&view=plain&public=1&lang=english"
  if(isPfizer == 'false')
  link = "https://openscheduling.ynhhs.org/mychart-prd/openscheduling/standalone?id=92544,92545,92546,92734,92543,92735,92736&vt=2465&dept=103070034,101010172,108010099,102010094,104010097,108710073,103700027&view=plain&public=1&lang=english"
    
  return {
    link,
    recc_date,
    second_dose,
    isSpanish
  };
};
