import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Head from 'next/head';
import {useRouter} from 'next/router'

export default function FAQ() {
  const router = useRouter();

  useEffect(() => {
    if (prefetch) router.prefetch('/questions');
});

  return (
    <div className="container">
      <Head>
        <title>COVID-19 Employee Return to Work Clearance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img src="/YNHHSLogo.png"></img>
      <span className="divider"></span>

      <div className="questionContainer">
        <h2>COVID-19 Employee Return to Work Clearance</h2>
        <h3>Occupational Health Return to Work Clearance</h3>

        <p>
          COVID-19 Employee Return to Work Clearance cares about your well-being and wants to
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
        <br></br>
        <div className="buttonContainer">
        <button className="button" onClick={()=>{router.push('/questions')}}>
          {`Continue >`}
        </button>

      </div>
      </div>

 

      <style jsx>{`
        .questionContainer {
          width: 85%;
          background: white;
          box-shadow: 0 0 10px 5px rgba(0,0,0,0.1);
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
          padding: 20px 10%;
          margin-top: 40px;
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
