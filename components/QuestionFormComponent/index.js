import React, { useState } from 'react';
import Link from 'next/link';
import { logInfo } from './actions';
import styles from './QuestionFormComponent.module.css';

const QuestionFormComponent = () => {
  const [patientData, setPatientData] = useState({
    age: '',
    yale_employee: '',
    employee_type: '',
    net_id: '',
    fever_higher: '',
    cough: '',
    diff_breath: '',
    asthma_lung: '',
    diabetes: '',
    obesity: '',
    cirrhosis: '',
    pregnancy: '',
    heart_cond: '',
    diseases_cough: '',
    kidney_failure: '',
    immune_system: '',
    nursing_home: '',
    health_care: '',
    treatment_facility: '',
    caregiver: ''
  });
  const [q2end, setQ2end] = useState(false);
  const [q3end, setQ3end] = useState(false);
  const [q4end, setQ4end] = useState(false);

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
                        disabled={q3end || q4end}
                        id="yale_employee_yes"
                        type="radio"
                        value="Yes"
                        name="yale_employee"
                        onClick={(e) => {
                          handleChange(e);
                          setQ2end(true);
                        }}
                      ></input>
                      <label
                        className={styles.label}
                        htmlFor="yale_employee_yes"
                      >
                        Yes
                      </label>
                    </div>

                    <div className="radio_row_item">
                      <input
                        disabled={q3end || q4end}
                        defaultChecked
                        id="yale_employee_no"
                        type="radio"
                        value=""
                        name="yale_employee"
                        onClick={(e) => {
                          handleChange(e);
                          setQ2end(false);
                          setQ3end(false);
                          setQ4end(false);
                        }}
                      ></input>
                      <label
                        className={styles.label}
                        htmlFor="yale_employee_no"
                      >
                        No
                      </label>
                    </div>
                  </fieldset>
                  <p className={styles.error} hidden={!q2end}>
                    Please contact Yale Health or your personal health care
                    provider to discuss testing and treatment.You are not
                    eligible for this asymptomatic screening program.
                  </p>
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
                      disabled={q2end || q4end}
                      id="work_remote_chk_yes"
                      type="radio"
                      value="Yes"
                      name="work_remote"
                      onClick={(e) => {
                        handleChange(e);
                        setQ3end(true);
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
                      disabled={q2end || q4end}
                      defaultChecked
                      id="work_remote_chk_no"
                      type="radio"
                      value=""
                      name="work_remote"
                      onClick={(e) => {
                        handleChange(e);
                        setQ3end(false);
                        setQ4end(false);
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
                <p className={styles.error} hidden={!q3end}>
                  No screening needed at this time. Discuss with your supervisor
                  if you plan to return to work on campus in the future.
                </p>
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
                      disabled={q2end || q3end}
                      id="health_care_yes"
                      type="radio"
                      value="Yes"
                      name="health_care"
                      onClick={(e) => {
                        handleChange(e);
                        setQ4end(true);
                      }}
                    ></input>
                    <label className={styles.label} htmlFor="health_care_yes">
                      Yes
                    </label>
                  </div>

                  <div className="radio_row_item">
                    <input
                      defaultChecked
                      disabled={q2end || q3end}
                      id="health_care_no"
                      type="radio"
                      value=""
                      name="health_care"
                      onClick={(e) => {
                        handleChange(e);
                        setQ4end(false);
                      }}
                    ></input>
                    <label className={styles.label} htmlFor="health_care_no">
                      No
                    </label>
                  </div>
                </fieldset>
                <p className={styles.error} hidden={!q4end}>
                  No testing needed at this time.{' '}
                </p>
              </div>
            </div>
            <Link href="/scheduling">
              <button
                hidden={q4end || q2end || q3end}
                type="submit"
                form="patient-form"
                className={styles.submitbutton}
              >
                Select Date and Time
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default QuestionFormComponent;
