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
      {/* <p className="banner" >
      Based on our extremely low rates of positive results, we are ending COVID-19 testing for asymptomatic employees after Friday, July 3. After this date, any employees without symptoms should contact their primary care provider if they wish to be tested.
      <br></br>
      <br></br>
      The protocols for employees experiencing symptoms remains the same. If you are at work, leave immediately and contact your manager. Call Occupational Health through the YNHHS COVID Call Center at <span className="phone">833-ASK-YNHH</span>
 
      </p> */}
      <div className='grid'>
      <img src="/YNHHSLogo.png"></img>
      </div>      
      <h1 className="title">
          See if you qualify for coronavirus (COVID-19) testing
        </h1>
      <QuestionContainerComponent></QuestionContainerComponent>
      
    </div>
  );
}
