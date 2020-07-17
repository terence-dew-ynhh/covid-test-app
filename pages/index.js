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
      </div>
      <h1 className="title">
      An appointment is required to be tested; if there is not availability at your assigned location and preferred date, please search for an future date / time at your assigned location.  
      If none are available at your location please check back.
        </h1>
      <QuestionContainerComponent></QuestionContainerComponent>
      
    </div>
  );
}
