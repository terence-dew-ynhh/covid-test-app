import React, { useState } from 'react';
import Link from 'next/link'
import Head from 'next/head';
import {useRouter} from 'next/router'

export default function FAQ() {
  const router = useRouter();
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

        <p>
          Do you Need to Activate your MyChart?
        </p>

      
        <div className="buttonContainer">
        <button className="button" onClick={() => window.location.href = 'https://mychart.ynhhs.org/mychart-prd/signup'}>
          {`To My Chart activation >`}
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
