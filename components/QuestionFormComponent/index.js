import React, { useState } from 'react';
import Link from 'next/link';
import styles from './QuestionFormComponent.module.css';
import {logInfo} from '../../pages/utils/actions';
import { Router } from 'next/router';


const QuestionFormComponent = ({casUser}) => {
  
  const [q2end, setQ2end] = useState('');
  const [q3end, setQ3end] = useState('');
  const [q4end, setQ4end] = useState('');
  const [patientData, setPatientData] = useState({
    survey_src: 'yale',
    net_id: casUser,
    covid_symptoms: '',
    work_remote: '',
    work_remote_age: '',
  });

  function submitLog(evt) {
    evt.preventDefault();
    logInfo(patientData);
  }


  const handleChange = (e) => {
    let value = patientData[e.target.name] === 'Yes' ? '' : e.target.value;

    setPatientData({ ...patientData, [e.target.name]: value });
  };

  return (
    <>
      <div className={styles.questionContainer}>
        <form
          onSubmit={(e) => submitLog(e)}
          id="patient-form"
          name="patient-form"
        >
          <div className={styles.question_set_container}>
            <div className="question-set-container-conditions">
              <div className="question-set-container-q1">
                <div className={styles.question_row_item}>
                  {/* <label htmlFor="age">Age</label>
              <input className={styles.question_input_txt} type="number" name="age" min="0" max="120"></input> */}
                  <fieldset className={styles.radio_grp_set}>
                    <legend className={styles.legend}>
                      Do you currently have symptoms that may be suggestive of
                      COVID 19? Symptoms may include fever, cough, shortness of
                      breath, sore throat, fatigue, muscle aches, loss of sense
                      of smell or taste, stomach upset.
                    </legend>

                    <div className="radio_row_item">
                      <input
                        disabled={q3end === 'Yes' || q4end === 'Yes'}
                        id="covid_symptoms_yes"
                        type="radio"
                        value="Yes"
                        name="covid_symptoms"
                        onClick={(e) => {
                          handleChange(e);
                          setQ2end(e.target.value);
                        }}
                      ></input>
                      <label
                        className={styles.label}
                        htmlFor="covid_symptoms_yes"
                      >
                        Yes
                      </label>
                    </div>

                    <div className="radio_row_item">
                      <input
                        disabled={q3end === 'Yes' || q4end === 'Yes'}
                        id="covid_symptoms_no"
                        type="radio"
                        value="No"
                        name="covid_symptoms"
                        onClick={(e) => {
                          handleChange(e);
                          setQ2end(e.target.value);
                          setQ3end(e.target.value);
                          setQ4end(e.target.value);
                        }}
                      ></input>
                      <label
                        className={styles.label}
                        htmlFor="covid_symptoms_no"
                      >
                        No
                      </label>
                    </div>
                  </fieldset>
                  <div
                    className={styles.error_container}
                    hidden={!(q2end === 'Yes')}
                  >
                    <p className={styles.error}>
                      Please contact Yale Health or your personal health care
                      provider to discuss testing and treatment.
                    </p>
                    <p className={styles.error_sub}>
                      You are not eligible for this asymptomatic screening
                      program.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="question-set-container-q2">
              <span className={styles.divider}></span>
              <div className={styles.question_row_item}>
                <fieldset className={styles.radio_grp_set}>
                  <legend className={styles.legend}>
                    Can your work be performed remotely and is it your intention
                    to work exclusively remotely?
                  </legend>

                  <div className="radio_row_item">
                    <input
                      disabled={q2end === 'Yes' || q4end === 'Yes'}
                      id="work_remote_chk_yes"
                      type="radio"
                      value="Yes"
                      name="work_remote"
                      onClick={(e) => {
                        handleChange(e);
                        setQ3end(e.target.value);
                      }}
                    ></input>
                    <label
                      className={styles.label}
                      htmlFor="work_remote_chk_yes"
                    >
                      Yes
                    </label>
                  </div>

                  <div className="radio_row_item">
                    <input
                      disabled={q2end === 'Yes' || q4end === 'Yes'}
                      id="work_remote_chk_no"
                      type="radio"
                      value="No"
                      name="work_remote"
                      onClick={(e) => {
                        handleChange(e);
                        setQ3end(e.target.value);
                        setQ4end(e.target.value);
                      }}
                    ></input>
                    <label
                      className={styles.label}
                      htmlFor="work_remote_chk_no"
                    >
                      No
                    </label>
                  </div>
                </fieldset>
                <div
                  className={styles.error_container}
                  hidden={!(q3end === 'Yes')}
                >
                  <p className={styles.error}>
                    No screening needed at this time. Discuss with your
                    supervisor if you plan to return to work on campus in the
                    future.
                  </p>
                  <p className={styles.error_sub}></p>
                </div>
              </div>
            </div>

            <div className="question-set-container-q3">
              <span className={styles.divider}></span>
              <div className={styles.question_row_item}>
                <fieldset className={styles.radio_grp_set}>
                  <legend className={styles.legend}>
                    Do you intend to work exclusively remotely due to age over
                    65 OR high risk medical condition?
                  </legend>

                  <div className="radio_row_item">
                    <input
                      disabled={q2end === 'Yes' || q3end === 'Yes'}
                      id="work_remote_age_yes"
                      type="radio"
                      value="Yes"
                      name="work_remote_age"
                      onClick={(e) => {
                        handleChange(e);
                        setQ4end(e.target.value);
                      }}
                    ></input>
                    <label className={styles.label} htmlFor="work_remote_age_yes">
                      Yes
                    </label>
                  </div>

                  <div className="radio_row_item">
                    <input
                      disabled={q2end === 'Yes' || q3end === 'Yes'}
                      id="work_remote_age_no"
                      type="radio"
                      value="No"
                      name="work_remote_age"
                      onClick={(e) => {
                        handleChange(e);
                        setQ4end(e.target.value);
                      }}
                    ></input>
                    <label className={styles.label} htmlFor="work_remote_age_no">
                      No
                    </label>
                  </div>
                </fieldset>
                <div
                  className={styles.error_container}
                  hidden={!(q4end === 'Yes')}
                >
                  <p className={styles.error}>
                    No screening needed at this time. Discuss with your
                    supervisor if you plan to return to work on campus in the
                    future.
                  </p>
                  <p className={styles.error_sub}></p>
                </div>
              </div>
            </div>

              <button
                hidden={!(q4end === 'No') && !(q2end === 'No') && !   (q3end === 'No')}
                type="submit"
                form="patient-form"
                className={styles.submitbutton}
              >
                Select Date and Time
              </button>
          </div>
        </form>
      </div>
    </>
  );
};



export default QuestionFormComponent;
