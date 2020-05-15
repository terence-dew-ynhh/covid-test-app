import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import QuestionFormComponent from '../components/QuestionFormComponent';

export default function Home() {
  const [isCovidPositive, setIsCovidPositive] = useState(false);
  const [isTwoWeeksSince, setIsTwoWeeksSince] = useState(false);
  const [continueButton, setContinueButton] = useState(false);

  const questionShowComponent =
    (isCovidPositive === false && continueButton === true) ||
    continueButton === true ? (
      <QuestionFormComponent />
    ) : null;

  const endTestingText = isTwoWeeksSince
    ? 'You may return to work on campus. No further testing is needed.'
    : 'Complete self-isolation as recommended by your health care provider. You may go to work when cleared by Employee Health. No additional testing is needed.';

  const secondCovidQuestions = isCovidPositive ? (
    <fieldset className="radio_grp_set">
      <legend>
        Has it been 14 days from symptom onset and 3 days since resolution of
        fever and improvement of symptoms?
      </legend>
      <input
        id="question_covid_check2_yes"
        className="initial_radios"
        type="radio"
        name="covid_check2"
        onClick={() => {
          setIsTwoWeeksSince(true);
          setContinueButton(false);
        }}
      ></input>
      <label className="initial_radios" htmlFor="question_covid_check2_yes">
        Yes
      </label>
      <input
        defaultChecked
        id="question_covid_check2_no"
        className="initial_radios"
        type="radio"
        name="covid_check2"
        onClick={() => {
          setIsTwoWeeksSince(false);
          setContinueButton(false);
        }}
      ></input>
      <label className="initial_radios" htmlFor="question_covid_check2_no">
        No
      </label>
    </fieldset>
  ) : null;

  const buttonSelected =
    isCovidPositive === true ? null : (
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

      <img src="/YHlogo_color.png"></img>
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
            <div className={'age_check'}>
              <div className="radio_grp">
                <fieldset className="radio_grp_set">
                  <legend>Have you had a positive test for COVID 19?</legend>
                  <input
                    id="question_covid_check_yes"
                    className="initial_radios"
                    type="radio"
                    name="covid_check"
                    onClick={() => {
                      setIsCovidPositive(true);
                      setContinueButton(false);
                    }}
                  ></input>
                  <label
                    className="initial_radios"
                    htmlFor="question_covid_check_yes"
                  >
                    Yes
                  </label>

                  <input
                    defaultChecked
                    id="question_covid_check_no"
                    className="initial_radios"
                    type="radio"
                    name="covid_check"
                    onClick={() => {
                      setIsCovidPositive(false);
                      setContinueButton(false);
                    }}
                  ></input>
                  <label
                    className="initial_radios"
                    htmlFor="question_covid_check_no"
                  >
                    No
                  </label>
                </fieldset>
                {secondCovidQuestions}
                <p className="error" hidden={!isCovidPositive}>
                  {endTestingText}
                </p>
              </div>
            </div>
          </div>
          <div>{buttonSelected}</div>
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
        label,
        legend,
        .button {
          color: white;
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
          width: 100%;
        }
        .div_hide {
          display: none;
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
          height: .5em;
        }
      `}</style>
    </div>
  );
}
