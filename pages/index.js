import React, { useState } from 'react';
import Head from 'next/head';
import QuestionContainerComponent from '../components/QuestionContainerComponent';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CCSU COVID-19 Test Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid">
        <img src="/YNHHSLogo.png"></img>
      </div>
      <h1 className="title">
        Central Connecticut State University Health Services COVID–19 Testing
      </h1>
      <QuestionContainerComponent></QuestionContainerComponent>
    </div>
  );
}
