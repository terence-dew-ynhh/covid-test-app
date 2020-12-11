import React, { useState } from 'react';
import Head from 'next/head';
import QuestionContainerComponent from '../components/QuestionContainerComponent';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>COVID-19 Employee Return to Work Clearance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid">
        <img src="/YNHHSLogo.png"></img>
      </div>
      <h1 className="title">
      COVID-19 Employee Return to Work Clearance
      </h1>
      <QuestionContainerComponent></QuestionContainerComponent>
    </div>
  );
}