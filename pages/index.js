import fetch from 'isomorphic-unfetch'
import React, { useState } from "react";
import Head from "next/head";
import QuestionContainerComponent from "../components/QuestionContainerComponent";


  function Home({uuid}) {

  return (
    <div className="container">
      <Head>
        <title>Yale COVID-19 Vaccine Clinical Trial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid'>
      <img src="/YNHHSLogo.png"></img>
      </div>      
      <h1 className="title">
      Yale COVID-19 Vaccine Clinical Trial
        </h1>
      <QuestionContainerComponent uuid={uuid} />
      
    </div>
  );
}

Home.getInitialProps = async (context) => {
  let uuid = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  return {uuid: uuid}
}

export default Home
