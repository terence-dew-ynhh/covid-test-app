import React from 'react';
import Head from 'next/head';
const axios = require('axios');

export default function SubmissionForm() {

const sendData = () => {
    axios
      .post('/api/rtwinfo', { agency: agency })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="container">
      <Head>
        <title>Yale COVID-19 Test Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid">
        <img src="/YNHHSLogo.png"></img>
      </div>

      <div className="questionContainer">
        <fieldset>
          <legend>
            Please Submit Your Contact Information:
          </legend>

          <div className="radio_row_item">
            <label htmlFor="first_name">First Name:</label>
            <input id="first_name" type="text" name="first_name"></input>
          </div>
          <br></br>
          <br></br>
          <div className="radio_row_item">
            <label htmlFor="last_name">Last Name:</label>
            <input id="last_name" type="text" name="last_name"></input>
          </div>
          <br></br>
          <br></br>
          <div className="radio_row_item">
            <label htmlFor="dob">Date of Birth:</label>
            <input id="dob" type="text" name="dob"></input>
          </div>
          <br></br>
          <br></br>
          <div className="radio_row_item">
            <label htmlFor="phone_num">Contact Number:</label>
            <input id="phone_num" type="text" name="phone_num"></input>
          </div>
          <br></br>
          <br></br>
        </fieldset>
        <div className="buttonContainer">
        <button className="centered_button" onClick={()=>{sendData()}}>
          {`Submit`}
        </button>
      </div>
      </div>

      <style jsx>{`
        .questionContainer {
          width: 85%;
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
          padding: 20px 10%;
          margin-top: 40px;
        }
        .centered_button{
            padding: 15px 35px;
            margin: 2% 3% 6% 0;
            border: 2px solid #000;
            background: transparent;
            color: #000;
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

SubmissionForm.getInitialProps = async ({ query }) => {
  const { RTWStatus, pathway } = query;

  return {
    RTWStatus,
    pathway
  };
};
