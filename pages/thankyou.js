import React, { useState } from 'react';
import Head from 'next/head';

export default function FAQ() {
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
        <h1 className="title">Thank You For Scheduling an Appointment</h1>
        <div className="questions_div">
          <p>
            Did you know that Yale has clinical trials that can accelerate the
            development treatments for COVID-19 and is looking at investigative
            agents for those who have tested positive with or without symptoms,
            as well as healthy volunteers and those interested in vaccines? If
            you are interested in learning more about Covid research
            opportunities, <a>click here…</a>
          </p>
        </div>
      </div>
      <style jsx>{`
        .questions_div {
          background: white;
          width: 80%;
          box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          padding: 2%;
        }
        h2,
        .main-h {
          color: #0070c0;
        }
        .main-link {
          background: #00008b;
          font-size: 2em;
          color: white;
          width: 60%;
        }
        .divider {
          display: block;
          background: #131313;
          height: 1px;
          width: 95%;
          margin: 10px 0;
        }
        p{
          font-weight: 500;
        }
        ul {
          width: 100%;
        }
        @media (max-width: 422px) {
          .main-link {
            font-size: 1.5em;
          }
        }
      `}</style>
    </>
  );
}
