import React, { useState } from 'react';
import { logInfo } from './actions';
import styles from './QuestionFormComponent.module.css';

const QuestionFormComponent = () => {
  const [isCovidPositive, setIsCovidPositive] = useState(false);
  const [patientData, setPatientData] = useState({
    prev_pos_test: '',
    location: '',

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
      <h1 className="title">We need to collect some more information.</h1>

      <p className="description">
        Details will be confirmed on site at your visit.
      </p>
      <div className={styles.questionContainer}>
        <form
          onSubmit={(e) => submitLog(e)}
          id="patient-form"
          name="patient-form"
        >
          <div className="question-set-container">
            <div className="question-set-container-conditions">
              <div className={styles.question_row_item}>
                <div className={styles.question_row_item_sub}>
                  <fieldset>
                    <legend>
                      Have you previously tested Positive for COVID?:
                    </legend>

                    <div className="radio_row_item">
                      <input
                        id="prev_covid_yes"
                        type="radio"
                        value="Yes"
                        name="prev_covid"
                        onClick={(e) => {handleChange(e); setIsCovidPositive(true)}}
                      ></input>
                      <label htmlFor="prev_covid_yes">Yes</label>
                      <div className="radio_row_item">
                        <input
                          defaultChecked
                          id="prev_covid_no"
                          type="radio"
                          value=""
                          name="prev_covid"
                          onClick={(e) => {handleChange(e); setIsCovidPositive(false)}}
                          ></input>
                        <label htmlFor="prev_covid_no">No</label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <p className="error" hidden={!isCovidPositive}>Unfortunately retesting is currently not recommended</p>
              </div>
            </div>
            <span className={styles.divider}></span>
            <div className={styles.question_row_item}>
              <div className={styles.question_row_item_sub}>
                <fieldset>
                  <legend>What is your preferred collection location?</legend>

                  <div className="select-wrapper">
                    <select disabled={isCovidPositive} className="select">
                      <option value="value1">Yale New Haven Hospital</option>
                    </select>
                  </div>
                </fieldset>
              </div>
            </div>
            <div className={styles.question_row_item}>
              <div className={styles.question_row_item_sub}>
            <button disabled={isCovidPositive} type="submit" form="patient-form" className="button">
              Select Date and Time
            </button>
            </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default QuestionFormComponent;
