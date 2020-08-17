import fetch from 'isomorphic-unfetch'
import React, { useState } from "react";
import Head from "next/head";
import QuestionContainerComponent from "../components/QuestionContainerComponent";


function Home({uuid}) {

  // const updateField = async (propName,propValue) => {
  //   const action = 'post';
  //   const res = await fetch('http://localhost:3011/api/survey', {
  //     method: action,
  //     body: JSON.stringify({uuid:uuid, [propName]:propValue})
  //   })

  //   // console.log(res)
  // }

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
          See if you qualify for coronavirus (COVID-19) testing
        </h1>
      {/* <QuestionContainerComponent uuid={uuid} updateField={updateField}/> */}
      <QuestionContainerComponent uuid={uuid} />
      
    </div>
  );
}

Home.getInitialProps = async (context) => {
  const res = await fetch("http://localhost:3011/api/uuid");
  const json = await res.json();
  return {uuid: json}
}

export default Home
