import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import QuestionFormComponent from '../components/QuestionFormComponent';
import {parseCookies, logInfo} from './utils/actions';
import Cookie from 'js-cookie'

export default function Home({user}) {
  const [isCovidPositive, setIsCovidPositive] = useState('');
  const [isTwoWeeksSince, setIsTwoWeeksSince] = useState('');
  

  const questionShowComponent =
    (isCovidPositive === 'No')
    ? (
      <QuestionFormComponent casUser={user} />
    ) : null;

    
    const endTestingText = isTwoWeeksSince  === 'Yes'
      ? 'You may return to work on campus.'
      : 'Complete self-isolation as recommended by your health care provider.';
    const endTestingSubText = isTwoWeeksSince  === 'Yes'
    ? ' No further testing is needed.'
    : 'You may go to work when cleared by Employee Health. No additional testing is needed.';

  const secondCovidQuestions = (isCovidPositive === 'Yes') ? (
    <fieldset className="radio_grp_set">
      <legend>
        Has it been 14 days from symptom onset and 3 days since resolution of
        fever and improvement of symptoms?
      </legend>
      <input
        id="question_covid_check2_yes"
        className="initial_radios"
        value='Yes'
        type="radio"
        name="covid_check2"
        onClick={(e) => {
          setIsTwoWeeksSince(e.target.value);
        }}
      ></input>
      <label className="initial_radios" htmlFor="question_covid_check2_yes">
        Yes
      </label>
      <input
        id="question_covid_check2_no"
        className="initial_radios"
        value='No'
        type="radio"
        name="covid_check2"
        onClick={(e) => {
          setIsTwoWeeksSince(e.target.value);
        }}
      ></input>
      <label className="initial_radios" htmlFor="question_covid_check2_no">
        No
      </label>
    </fieldset>
  ) : null;
  

  return (
    <div className="container">
      <Head>
        <title>Yale COVID-19 Test Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img src="/YHlogo_color.png"></img>
      <span className="divider"></span>

      <h1 className="title">
       See if you qualify for coronavirus (COVID 19) screening
      </h1>

      <div className="grid">
        <div className="grid_subcontainer">
          <div className="question_div">
            <div className={'age_check'}>
              <div className="radio_grp">
                <fieldset className="radio_grp_set">
                  <legend>Have you had a positive test for COVID 19 at any time since March 1?</legend>
                  <input
                    tabIndex="1"
                    id="question_covid_check_yes"
                    className="initial_radios"
                    type="radio"
                    value='Yes'
                    name="covid_check"
                    onClick={(e) => {
                      setIsCovidPositive(e.target.value);
                      setIsTwoWeeksSince('');
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
                    value='No'
                    name="covid_check"
                    onClick={(e) => {
                      setIsCovidPositive(e.target.value);
                      setIsTwoWeeksSince('');
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
                <div className="error_container" hidden={isTwoWeeksSince === ''}>
                <p className="error" >
                  {endTestingText}
                </p>
                <p className="error_sub" >
                  {endTestingSubText}
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {questionShowComponent }
        <a href='https://usability.yale.edu/web-accessibility/accessibility-yale'>Accessibility at yale</a>
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
          margin-bottom: 3em;
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

Home.getInitialProps = ({req}) =>{
  const cookies = parseCookies(req);
  return{
    user: cookies.token
  }
} 
