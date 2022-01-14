import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home({ link }) {
  const router = useRouter();
  useEffect(()=>{
    if (link ="") router.push('/')
  })
  return (
    <>
      <Head>
        <title>YNHH COVID-19 Test Scheduler</title>
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
  const { booster, second_dose } = query;
  console.log(booster)
  
  let link = "https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=88976&vt=2293&dept=201570002&view=plain&public=1&lang=english"
  
  if(second_dose == 'true')
  link = 'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=88976&vt=2339&dept=201570002&view=plain&public=1&lang=english'
  
  if(booster == 'true')
  link = 'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79188&vt=2460&dept=201570002&view=plain&public=1&lang=english'
  
  if(booster == undefined){
    link = ""
  }

  if(flu == "true"){
    link = "https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=89130&vt=10220&dept=201570002&view=plain&public=1&lang=english"
  }

  return {
    link
  };
};
