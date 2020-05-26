import React, { useState } from "react";
import Head from "next/head";
import QuestionFormComponent from "../components/QuestionFormComponent";

export default function Home() {
  const [isEmployee, setIsEmployee] = useState(true);
  const [continueButton, setContinueButton] = useState(false);

  const questionShowComponent =
    (isEmployee && continueButton) ? (
      <QuestionFormComponent />
    ) : null;

  

  return (
    <div className="container">
      <Head>
        <title>YNHH COVID-19 Test Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

          <img src="/YNHHSLogo.png"></img>
          <span className="divider"></span>

        <h1 className="title">
          See if you qualify for coronavirus (COVID-19) testing
        </h1>

        <p className="description">
          Test supplies are extremely limited. Help those who need testing the
          most by answering truthfully.
        </p>

        <div className="grid">
          <div className="grid_subcontainer">
            <div className="question_div">
                <div className="radio_grp">
                <fieldset>
                  <legend>What is your preferred collection location?</legend>

                  <div className="select-wrapper">
                    <select className="select">
                      <option value="value1">Yale New Haven Hospital</option>
                    </select>
                  </div>
                </fieldset>
                  <p className="error" hidden={isEmployee}>Sorry, please navigate to a public testing website to schedule your test</p>
                </div>
            </div>
            <div>
            <button onClick={()=>setContinueButton(true)} className="button">Continue</button>                
            </div>
          </div>
        </div>
        {questionShowComponent}
      <style jsx>{`        
        .grid {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
              -ms-flex-align: center;
                  align-items: center;
          -webkit-box-pack: center;
              -ms-flex-pack: center;
                  justify-content: center;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
              -ms-flex-direction: column;
                  flex-direction: column;
          color: white;
          width: 100%;
          margin-top: 3rem;
        }
        .grid_subcontainer {
          width: 100%;
          background: #0f4d92;
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
        }
        .question_div {
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
              -ms-flex-direction: row;
                  flex-direction: row;
          width: 100%;
        }
        .age_check,
        .have_referral {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: start;
              -ms-flex-align: start;
                  align-items: flex-start;
          -webkit-box-pack: center;
              -ms-flex-pack: center;
                  justify-content: center;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
              -ms-flex-direction: column;
                  flex-direction: column;
        }
        .div_hide {
          display: none;
        }

        .cancel_link {
          color: white;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
                -ms-flex-direction: column;
                    flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
