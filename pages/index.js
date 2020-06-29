import React, { useState } from "react";
import Head from "next/head";
import QuestionContainerComponent from "../components/QuestionContainerComponent";

export default function Home() {
 

  return (
    <div className="container">
      <Head>
        <title>YNHH COVID-19 Test Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid'>
      <img src="/YNHHSLogo.png"></img>
      <span className="divider"></span>
      </div>
      <h1 className="title">
          See if you qualify for coronavirus (COVID-19) testing
        </h1>
      <QuestionContainerComponent></QuestionContainerComponent>
      
    </div>
  );
}
