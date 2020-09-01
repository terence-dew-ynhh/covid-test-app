import React, { useState } from 'react';
import Head from 'next/head';

export default function FAQ() {
  const [isCovidPositive, setIsCovidPositive] = useState('');
  const [isTwoWeeksSince, setIsTwoWeeksSince] = useState('');

  

  return (
    <div className="container">
      <Head>
        <title>YNHH Mammogram and Breast Ultrasound Screening</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid'>
      <img src="/YNHHSLogo.png"></img>
      </div>    
      
      <div className="questions_div">
                       
            <h2>Thank you for your interest in scheduliung a mammogram online.</h2>
            <h3>To ensure the best care, please contact the location convenient to you.</h3>
            
            <div className="column">
            <div className="row"><p className="location">BH Outpatient Radiology</p><p>203-447-5581</p></div>
            <div className="row"><p className="location">Bridgeport Hospital</p><p>203-384-4843</p></div>
            <div className="row"><p className="location">Greenwich Breast Imaging Center</p><p>203-863-3031</p></div>
            <div className="row"><p className="location">Lawrence & Memorial</p><p>860-444-3777</p></div>
            <div className="row"><p className="location">Yale New Haven</p><p>203-688-1010</p></div>
            <div className="row"><p className="location">Westerly Hospital</p><p>401-348-3290</p></div>
            </div>
  
        </div>

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
        .column{
          display: flex;
          flex-direction: column;
          width: 70%
        }
        .row{
          display: flex;
          flex-direction: row;
        }
        .location{
          margin-right: 25px;
        }
        h2,.main-h{
            color:#0070c0;
        }
        .main-link{
            background: #00008B;
            font-size: 2em;
            color: white;
            width: 60%;
        }
        ul{
            width:100%;
        }
        @media(max-width:422px){
            .main-link{
                font-size: 1.5em; 
            }
        }

      `}</style>
    </div>
  );
}
