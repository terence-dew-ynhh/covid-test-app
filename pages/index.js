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
        Yale New Haven Health Services COVID – 19 Testing
      </h1>
      <QuestionContainerComponent></QuestionContainerComponent>
    </div>
  );
}
