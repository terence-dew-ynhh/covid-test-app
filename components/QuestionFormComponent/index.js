import React, { useState } from 'react';
import Link from 'next/link';
import { logInfo } from './actions';
import styles from './QuestionFormComponent.module.css';

const QuestionFormComponent = () => {
  const [isEmployee, setIsEmployee] = useState(false);
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

  // const netIdField = isEmployee ? <div className={styles.question_row_item_sub}>
  // <label htmlFor="net_Id">What is your NetID?</label>
  // <input className={styles.question_input_txt} onChange={handleChange} type="text" name="net_Id"></input>
  // </div> : null

  const employeeTypeRdio = isEmployee ? (
    <div className={styles.question_row_item_sub}>
      <fieldset>
        <legend>What type of employee are you?</legend>
        <div className="radio_row_item">
          <input
            defaultChecked
            id="employee_type_researcher"
            type="radio"
            value="researcher"
            name="employee_type"
            // onClick={}
          ></input>
          <label htmlFor="employee_type_researcher">Researcher</label>
        </div>
        <div className="radio_row_item">
          <input
            id="employee_type_faculty"
            type="radio"
            value="faculty"
            name="employee_type"
            // onClick={}
          ></input>
          <label htmlFor="employee_type_faculty">Faculty</label>
        </div>
        <div className="radio_row_item">
          <input
            id="employee_type_student"
            type="radio"
            value="student"
            name="employee_type"
            // onClick={}
          ></input>
          <label htmlFor="employee_type_student">Student</label>
        </div>
      </fieldset>
    </div>
  ) : null;

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
          <div className={styles.question_set_container}>
            <div className="question-set-container-conditions">
              <div className="question-set-container-q1">
                <div className={styles.question_row_item}>
                  {/* <label htmlFor="age">Age</label>
              <input className={styles.question_input_txt} type="number" name="age" min="0" max="120"></input> */}
                  <fieldset className={styles.radio_grp_set}>
                    <legend>
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
                      <label htmlFor="yale_employee_yes">Yes</label>
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
                      <label htmlFor="yale_employee_no">No</label>
                    </div>
                  </fieldset>
                  <p className={styles.error} hidden={!q2end}>
                    Please contact Yale Health or your personal health care
                    provider to discuss testing and treatment.
                  </p>
                </div>
              </div>
            </div>
            <div className="question-set-container-q2">
              <span className={styles.divider}></span>
              <div className={styles.question_row_item}>
                <fieldset className={styles.radio_grp_set}>
                  <legend>
                    Can your work be performed remotely and is it your intention
                    to work remotely?
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
                    <label htmlFor="work_remote_chk_yes">Yes</label>
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
                    <label htmlFor="work_remote_chk_no">No</label>
                  </div>
                </fieldset>
                <p className={styles.error} hidden={!q3end}>
                  No testing needed at this time. Discuss with your supervisor
                  if you plan to return to work on campus in the future.{' '}
                </p>
              </div>
            </div>

            <div className="question-set-container-q3">
              <span className={styles.divider}></span>
              <div className={styles.question_row_item}>
                <fieldset className={styles.radio_grp_set}>
                  <legend>
                    Do you intend to work remotely due to age over 65 OR high
                    risk medical condition?
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
                    <label htmlFor="health_care_yes">Yes</label>
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
                    <label htmlFor="health_care_no">No</label>
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

{
  /* <div className={styles.question_row_item}>
            <fieldset>
              <legend>
                Do you have any of the following medical conditions? (Select all
                that apply)
              </legend>
              <div className={styles.q1_grid}>
                <input id="asthma_lung_chk" type="checkbox" name="asthma_lung" value="Yes" onClick={handleChange}></input>
                <label htmlFor="asthma_lung_chk">Asthma or chronic lung disease</label>
                <input id="diabetes_chk" type="checkbox" name="diabetes" value="Yes" onClick={handleChange}></input>
                <label htmlFor="diabetes_chk">Diabetes</label>
                <input id="obesity_chk" type="checkbox" name="obesity" value="Yes" onClick={handleChange}></input>
                <label htmlFor="obesity_chk">Extreme obesity</label>
                <input id="cirrhosis_chk" type="checkbox" name="cirrhosis" value="Yes" onClick={handleChange}></input>
                <label htmlFor="cirrhosis_chk">Cirrhosis of the liver</label>
                <input id="pregnancy_chk" type="checkbox" name="pregnancy" value="Yes" onClick={handleChange}></input>
                <label htmlFor="pregnancy_chk">Pregnancy</label>
                
                <input id="heart_cond_chk" type="checkbox" name="heart_cond" value="Yes" onClick={handleChange}></input>
                <label htmlFor="heart_cond_chk">
                  Serious heart condition, such as congestive heart failure
                </label>
                <input id="diseases_cough_chk" type="checkbox" name="diseases_cough" value="Yes" onClick={handleChange}></input>
                <label htmlFor="diseases_cough_chk">
                  Diseases or conditions that make it harder to cough
                </label>
                <input id="kidney_failure_chk" type="checkbox" name="kidney_failure" value="Yes" onClick={handleChange}></input>
                <label htmlFor="kidney_failure_chk">
                  Kidney failure or end stage renal disease
                </label>
                <input id="immune_system_chk" type="checkbox" name="immune_system" value="Yes" onClick={handleChange}></input>
                <label htmlFor="immune_system_chk">
                  Conditions that result in a weakened immune system, including
                  cancer treatment
                </label>
              </div>
            </fieldset>   
            </div>          */
}
