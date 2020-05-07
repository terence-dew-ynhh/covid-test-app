import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import QuestionFormComponent from "../components/QuestionFormComponent";

export default function Home() {
  const [referralSelected, setreferralSelected] = useState(false);
  const [isAdult, setIsAdult] = useState(false);
  const [continueButton, setContinueButton] = useState(false);

  const questionShowComponent =
    (referralSelected === true && isAdult === true && continueButton === true) ||
    (referralSelected === false && continueButton === true) ? (
      <QuestionFormComponent />
    ) : null;

  const buttonSelected =
    isAdult === false &&
    referralSelected === true ? (
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
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
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
              <fieldset className="radio_grp_set">
                <legend>
                  Do you have a referral from a medical professional?
                </legend>

                <div className="radio_row_item">
                  <input                    
                    id="have_referral_yes"
                    type="radio"
                    name="have_referral"
                    onClick={() => {setreferralSelected(true); setContinueButton(false)}}
                  ></input>
                  <label htmlFor="have_referral_yes">Yes</label>
                </div>

                <div className="radio_row_item">
                  <input
                  defaultChecked
                    id="have_referral_no"
                    type="radio"
                    name="have_referral"
                    onClick={() => {
                      setreferralSelected(false);
                      setContinueButton(false);
                    }}
                  ></input>
                  <label htmlFor="have_referral_no">No</label>
                </div>
              </fieldset>

              <div
                className={
                  referralSelected === true ? "age_check" : "age_check div_hide"
                }
              >
                <div className="radio_grp">
                  <fieldset className="radio_grp_set">
                    <legend>Are you over 18?</legend>
                    <input                      
                      id="question_age_check_yes"
                      type="radio"
                      name="age_check"
                      onClick={() => {
                        setIsAdult(true);
                        setContinueButton(false);
                      }}
                    ></input>
                    <label htmlFor="question_age_check_yes">Yes</label>

                    <input
                     defaultChecked
                      id="question_age_check_no"
                      type="radio"
                      name="age_check"
                      onClick={() => {
                        setIsAdult(false);
                        setContinueButton(false);
                      }}
                    ></input>
                    <label htmlFor="question_age_check_no">No</label>
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
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: center;
        }
        main {
          width: 95%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        }

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
