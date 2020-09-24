import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function CallService({ link }) {



  const router = useRouter();
  const { endpoint } = router.query;



  return (
    <div className="container">
      <Head>
        <title>YNHH Affiliates Flu Vaccination</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid">
        <img src="/YNHHSLogo.png"></img>
      </div>
      <h1 className="title">
      YNHH Affiliates Flu Vaccination
      </h1>
      <div className="questionContainer">
        <p>
        <p>Call Occupational Medicine and Wellness Services:
</p>
        <p>Bridgeport: 203.384.3613</p>
        <p>Greenwich: 203.863.3483</p>
        <p>New Haven: 203.688.2462</p>
        <p>New London: 860.442.0711, ext. 2288</p>
        <p>Westerly: 401.348.3783</p>
        </p>

      </div>

      <style jsx>{`
        .questionContainer {
          width: 60%;
          background: white;
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
          padding: 40px;
        }

        .buttonContainer{
          padding-top: 25px;
        }
        @media (max-width: 700px) {
          .questionContainer {
            width: 100%;
            padding-left: 40px;
          }
        }
      `}</style>
    </div>
  );
}

