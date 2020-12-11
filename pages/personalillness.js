import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function PersonalIllness() {
  return (
    <div className="container">
      <Head>
        <title>COVID-19 Employee Return to Work Clearance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid">
      <img src="/YNHHSLogo.png"></img>
      </div>

      <div className="questionContainer">
        <h2>COVID-19 Employee Return to Work Clearance</h2>
        <h3>Occupational Health Return to Work Clearance</h3>

        <p>
          Please contact your local Occupational Health Office for clearance
          to return to work due to your personal health condition (see below for
          locations and phone numbers below). Please ensure you have a medical
          note from your primary care provider. 
          <br></br><br></br>
          List of Occupational Health Offices below:
        </p>

        <p>
          <b><u>Sherman Avenue (New Haven)</u></b><br></br><br></br>
          175 Sherman Avenue, 5th Floor, New Haven, CT  06511<br></br><br></br>
          203-789-3392<br></br><br></br>
          <b>M-F, 8:00 am – 5:00 pm</b>
        </p>
        <p>
          <b><u>York Street (New Haven)</u></b><br></br><br></br>
          20 York Street, East Pavilion, 1st Floor, New Haven, CT  06510<br></br><br></br>
          203-688-2462<br></br><br></br>
          <b>M-F, 8:00 am – 4:00 pm</b>
        </p>
        <p>
          <b><u>Bridgeport</u></b><br></br><br></br>
          226 Mill Hill Avenue Bridgeport, CT  06610<br></br><br></br>
          203-384-3613<br></br><br></br>
          <b>M-F, 8:00 am – 4:30 pm</b>
        </p>
        <p>
          <b><u>Greenwich</u></b><br></br><br></br>
          5 Perryridge Road, 3rd Floor, Greenwich, CT  06830<br></br><br></br>
          203-789-3392<br></br><br></br>
          <b>M-F, 7:45 am – 4:00 pm</b>
        </p>
        <p>
          <b><u>Groton (Pequot Health Center)</u></b><br></br><br></br>
          52 Hazelnut Hill Road, Groton, CT  06340<br></br><br></br>
          860-446-8265 X 7074<br></br><br></br>
          <b>M-F, 8:00 am – 4:30 pm</b>
        </p>
        <p>
          <b><u>Lawrence & Memorial</u></b><br></br><br></br>
          365 Montauk Ave, New London, CT  06320<br></br><br></br>
          860-442-0711  or extension 2288<br></br><br></br>
          <b>M-F, 7:00 am – 3:30 pm</b>
        </p>
        <p>
          <b><u>Westerly</u></b><br></br><br></br>
          25 Wells Street, Westerly, RI  02891<br></br><br></br>
          401-348-3783<br></br><br></br>
          <b>M-F, 7:00 am – 3:30 pm</b>
        </p>
      </div>

      {/* <Link href="/questions">
        <a>Continue</a>
      </Link> */}

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
