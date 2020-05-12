import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import QuestionFormComponent from "../components/QuestionFormComponent";

export default function Home() {
  const [isAdult, setIsAdult] = useState(false);
  const [continueButton, setContinueButton] = useState(false);

  const questionShowComponent =
    (isAdult === true && continueButton === true) ||
    (continueButton === true) ? (
      <QuestionFormComponent />
    ) : null;

  const buttonSelected =
    isAdult === false ? (
      <Link href="/notqualified">
        <button className="button">Continue</button>
      </Link>
    ) : (
      <button
        className="button"
        onClick={() => {
          setContinueButton(true);
        }}
      >
        Continue
      </button>
    );

  return (
    <div className="container">
      <Head>
        <title>Yale COVID-19 Test Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <img src="/YHlogo_color.svg"></img>
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
              <div
                className={"age_check"}
              >
                <div className="radio_grp">
                  <fieldset className="radio_grp_set">
                    <legend>Are you over 18?</legend>
                    <input                      
                      id="question_age_check_yes"
                      className="initial_radios"
                      type="radio"
                      name="age_check"
                      onClick={() => {
                        setIsAdult(true);
                        setContinueButton(false);
                      }}
                    ></input>
                    <label className="initial_radios" htmlFor="question_age_check_yes">Yes</label>

                    <input
                     defaultChecked
                      id="question_age_check_no"
                      className="initial_radios"
                      type="radio"
                      name="age_check"
                      onClick={() => {
                        setIsAdult(false);
                        setContinueButton(false);
                      }}
                    ></input>
                    <label className="initial_radios" htmlFor="question_age_check_no">No</label>
                  </fieldset>
                </div>
              </div>
            </div>
            <div>
              { buttonSelected }
              <Link href="/">
                <a className="cancel_link">Cancel</a>
              </Link>
            </div>
          </div>
        </div>
        {questionShowComponent}
      </main>

      <style jsx>{`        
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          color: white;
          width: 95%;
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
        label,
        legend,
        .button {
          color: white;
        }
        .button {
          padding: 15px 35px;
          margin: 0 3% 3% 2%;
          border: 2px solid white;
          background: transparent;
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
