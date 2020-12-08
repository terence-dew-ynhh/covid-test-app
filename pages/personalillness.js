import React, { useState } from 'react';
import Link from 'next/link'
import Head from 'next/head';

export default function FAQ() {
  return (
    <div className="container">
      <Head>
        <title>Yale COVID-19 Test Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img src="/YHlogo_color.png"></img>
      <span className="divider"></span>

      <div className="questions_div">
        <h2>ale New Haven Health System</h2>
        <h3>Occupational Health Return to Work Clearance</h3>

        <p>
          Yale New Haven Health System cares about your well-being and wants to
          make the process of your return to work clearance as quick and easy as
          possible. Please choose “continue” for the return to work process and
          complete all required data fields.
        </p>

        <p>
          If at any point you prefer to speak with someone from Occupational
          Health, please contact the Occupational Health COVID Call Center at
          203-688-1700; after choosing a language, choose option # 2 for
          employee health.
        </p>
      </div>

      <Link href="/questions">
          <a>Continue</a>
        </Link> 

      <style jsx>{`
        .questions_div {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: start;
          -ms-flex-align: start;
          align-items: flex-start;
          -webkit-box-pack: start;
          -ms-flex-pack: start;
          justify-content: flex-start;
          margin: 0 0 3% 0;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          width: 100%;
          padding-left: 2%;
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
        ul {
          width: 100%;
        }
        @media (max-width: 422px) {
          .main-link {
            font-size: 1.5em;
          }
        }
      `}</style>
    </div>
  );
}
