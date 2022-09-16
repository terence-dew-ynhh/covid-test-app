import React, { useState } from 'react';
import Head from 'next/head';
import QuestionContainerComponent from '../components/QuestionContainerComponent';

export default function Home() {
  return (
    <div className="container">
        <>
      <Head>
        <title>Mohegan Flu Vaccine Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      <script src="https://mychart.ynhhs.org/mychart-prd/Scripts/lib/Widget/widget_sdk.js"></script>
      </Head>

      <div className="grid">
        <img src="/YNHHSLogo.png"></img>
      </div>
      <div className="scheduleContainer">
      <div id="open-scheduler"
        data-url="https://MyChart.ynhhs.org/mychart-prd"
        data-apikey="vXykxvjGIe80218"
        data-widget-type="openscheduling"
        data-additionalparams-dept="204620001"
        data-additionalparams-vt="10220"
        data-additionalparams-id="82100">
        </div>
      </div>
      <style jsx>{`
        .scheduleContainer{
          width: 100%;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-items: center;
          border: none;
        }
      `}</style>
    </>
    </div>
  );
}
