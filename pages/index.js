import React, { useState } from 'react';
import Head from 'next/head';
import QuestionContainerComponent from '../components/QuestionContainerComponent';

export default function Home() {
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
      <QuestionContainerComponent></QuestionContainerComponent>
    </div>
  );
}
