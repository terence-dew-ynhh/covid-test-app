import React, { useState } from 'react';
import Head from 'next/head';
import RTWTableComponent from '../components/dashboard/RTWTableComponent';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>COVID-19 Employee Return to Work Clearance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid">
        <img src="/YNHHSLogo.png"></img>
      </div>
      <h1 className="title">
      COVID-19 Employee Return to Work Clearance
      </h1>
      <div className="questionContainer">
      <RTWTableComponent></RTWTableComponent>
      </div>
      <style jsx>{`
        .questionContainer {
          width: 90%;
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
          padding: 20px 1%;
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