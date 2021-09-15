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
        University of New Haven Health Services COVID – 19 Testing
      </h1>
      <QuestionContainerComponent></QuestionContainerComponent>
      <br></br><br></br>
      <b>
        Flu shots (not COVID) will be given at Student Health Services,
        Sheffield Hall, 1st Floor, 300 Boston Post Rd, West Haven, CT.{' '}
      </b>
    </div>
  );
}
