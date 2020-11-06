import React, { useState } from 'react';
import Head from 'next/head';

export default function Error() {
  return (
    <>
      <div className="container">
        <Head>
          <title>YNHH COVID-19 Test Scheduler</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="grid">
          <img src="/YNHHSLogo.png"></img>
        </div>
        <div className="questionContainer">
        <h1 className="title">

      </h1>
          <p className="disclaimer">
            Please visit{' '}
            <a href="https://ocucovidtesting.ynhhs.org">
              https://ocucovidtesting.ynhhs.org
            </a>
            <br></br>
            <br></br>
            This site is available for employees who have symptoms that are
            suggestive of COVID-19 and want to tested, and also before return to
            work for employees who have travelled to areas with high rates of
            infection. 
            <br></br><br></br>
            <b>Note:</b> Out-of-state or international travel is strongly
            discouraged, but testing is available if travel cannot be avoided.
          </p>
        </div>
      </div>

      <style jsx>{`
        .questionContainer {
          width: 80%;
          background: none;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: space-between;
          -ms-flex-pack: space-between;
          justify-content: space-between;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
        }
      `}</style>
    </>
  );
}
