import React, { useState } from 'react';
import Head from 'next/head';

export default function FAQ() {
  const [isCovidPositive, setIsCovidPositive] = useState('');
  const [isTwoWeeksSince, setIsTwoWeeksSince] = useState('');  

  return (
    <div className="container">
    <Head>
      <title>YNHH COVID-19 Test Scheduler</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="grid">
      <img src="/YNHHSLogo.png"></img>
    </div>
    <h1 className="title">
      One time testing is available for state mandated individuals – ask your
      supervisor if you have any questions. Do not sign up for asymptomatic
      COVID testing if you have symptoms or have already been tested since
      June 18th
    </h1>
  </div>  
  <style jsx>{`
  .questionContainer {
    width: 100%;
    background: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: space-between;
    -ms-flex-pack: space-between;
    justify-content: space-between;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
`}</style>   
  );
}
