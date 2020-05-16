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
                  <fieldset className="radio_grp_set">
                    <legend>Are you an employee or medical staff member of Yale New Haven Health/ Yale Medicine?</legend>
                    <input     
                    defaultChecked                 
                      id="employee_staff_check_yes"
                      type="radio"
                      name="employee_staff"
                      onClick={() => {
                        setIsEmployee(true);
                        setContinueButton(false);
                      }}
                    ></input>
                    <label htmlFor="employee_staff_check_yes">Yes</label>

                    <input                     
                      id="employee_staff_check_no"
                      type="radio"
                      name="employee_staff"
                      onClick={() => {
                        setIsEmployee(false);
                        setContinueButton(false);
                      }}
                    ></input>
                    <label htmlFor="employee_staff_check_no">No</label>
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
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          color: white;
          width: 100%;
          margin-top: 3rem;
        }
        .grid_subcontainer {
          width: 100%;
          background: #0f4d92;
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
        .question_div {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          margin: 0 0 3% 0;
          flex-direction: row;
          width: 100%;
        }
        .age_check,
        .have_referral {
          display: flex;
          align-items: flex-start;
          justify-content: center;
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
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
