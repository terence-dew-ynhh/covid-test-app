import React, {useState} from "react";
import {blurFocus,dataInput} from './utils'
import styles from './QuestionFormComponent.module.css'
import Link from "next/link";



const QuestionFormComponent = () => {

  const [under18, setUnder18] = useState(false);



  return (
    <div>
      <h1 className="title">
      We need to collect some more information.
      </h1>

      <p className="description">
      Details will be confirmed on site at your visit.
      </p>
      <div className={styles.questionContainer}>
        <div className="question-set-container">
          <div className="question-set-container-conditions">
            
            <div className={styles.question_row_item}>
              <label htmlFor="">Date of Birth</label>
              <input className={styles.question_input_txt} onBlur={(e) => setUnder18(blurFocus(e))} onInput={(e)=> dataInput(e)} type="text" name=""></input>
              <small>Hint: MM/DD/YYYY</small>
              {under18 ? <small className={styles.error}>Patients must be 18 years or older to take a COVID-19 test.</small> : null}

              
              <div className={styles.question_row_item_sub}>
              <input id="fever_higher_chk" type="checkbox" name=""></input>
              <label htmlFor="fever_higher_chk">Fever of 100°F or higher</label>

              <input id="cough_chk" type="checkbox" name=""></input>
              <label htmlFor="cough_chk">Cough</label>

              <input id="diff_breat_chk" type="checkbox" name=""></input>
              <label htmlFor="diff_breat_chk">
                Difficulty breathing or shortness of breath
              </label>
              </div>
            </div>
          </div>
          <span className={styles.divider}></span>
          <div className="question-set-container-q1">
          <div className={styles.question_row_item}>
            <fieldset>
              <legend>
                Do you have any of the following medical conditions? (Select all
                that apply)
              </legend>
              <div className={styles.q1_grid}>
                <input id="asthma_lung_chk" type="checkbox" name=""></input>
                <label htmlFor="asthma_lung_chk">Asthma or chronic lung disease</label>
                <input id="diabetes_chk" type="checkbox" name=""></input>
                <label htmlFor="diabetes_chk">Diabetes</label>
                <input id="obesity_chk" type="checkbox" name=""></input>
                <label htmlFor="obesity_chk">Extreme obesity</label>
                <input id="cirrhosis_chk" type="checkbox" name=""></input>
                <label htmlFor="cirrhosis_chk">Cirrhosis of the liver</label>
                <input id="pregnancy_chk" type="checkbox" name=""></input>
                <label htmlFor="pregnancy_chk">Pregnancy</label>
                
                <input id="heart_cond_chk" type="checkbox" name=""></input>
                <label htmlFor="heart_cond_chk">
                  Serious heart condition, such as congestive heart failure
                </label>
                <input id="diseases_cough_chk" type="checkbox" name=""></input>
                <label htmlFor="diseases_cough_chk">
                  Diseases or conditions that make it harder to cough
                </label>
                <input id="kidney_failure_chk" type="checkbox" name=""></input>
                <label htmlFor="kidney_failure_chk">
                  Kidney failure or end stage renal disease
                </label>
                <input id="immune_system_chk" type="checkbox" name=""></input>
                <label htmlFor="immune_system_chk">
                  Conditions that result in a weakened immune system, including
                  cancer treatment
                </label>
              </div>
            </fieldset>   
            </div>         
          </div>
          <span className={styles.divider}></span>
          <div className="question-set-container-q2">
          <div className="radio_row_item">
            <fieldset className={styles.radio_grp_set}>
              <legend>
                Do you live in a nursing home or long-term care facility?
              </legend>

              <div className="radio_row_item">
                <input id="nursing_home_chk_yes" type="radio" name=""></input>
                <label htmlFor="nursing_home_chk_yes">Yes</label>
              </div>

              <div className="radio_row_item">
                <input id="nursing_home_chk_no" type="radio" name=""></input>
                <label htmlFor="nursing_home_chk_no">No</label>
              </div>
            </fieldset>
            </div>
          </div>
          <span className={styles.divider}></span>
          <div className="question-set-container-q3">
          <div className="radio_row_item">
            <fieldset className={styles.radio_grp_set}>
              <legend>
                Are you a health care worker, first responder or law enforcement
                officer?
              </legend>

              <div className="radio_row_item">
                <input id="health_care_yes" type="radio" name="have_referral"></input>
                <label htmlFor="health_care_yes">Yes</label>
              </div>

              <div className="radio_row_item">
                <input id="health_care_no" type="radio" name="have_referral"></input>
                <label htmlFor="health_care_no">No</label>
              </div>              
            </fieldset>
            </div>
          </div>
          <span className={styles.divider}></span>
          <div className="question-set-container-q4">
          <div className="radio_row_item">
            <fieldset className={styles.radio_grp_set}>
              <legend>
                Do you live or work in a treatment facility, group home or other
                group setting?
              </legend>

              <div className="radio_row_item">
                <input id="treatment_facility_yes" type="radio" name="have_referral"></input>
                <label htmlFor="treatment_facility_yes">Yes</label>
              </div>

              <div className="radio_row_item">
                <input id="treatment_facility_no" type="radio" name="have_referral"></input>
                <label htmlFor="treatment_facility_no">No</label>
              </div>
              
            </fieldset>
          </div>
          </div>
          <span className={styles.divider}></span>
          <div className="question-set-container-q5">
            <div className="radio_row_item">
            <fieldset className={styles.radio_grp_set}>
              <legend>
              Are you a caregiver for either an older person (age 60 or older) or someone who has a weakened immune system?
              </legend>

              <div className="radio_row_item">
                <input id="caregiver_yes" type="radio" name="work_treatment_yes"></input>
                <label htmlFor="caregiver_yes">Yes</label>
              </div>

              <div className="radio_row_item">
                <input id="caregiver_no" type="radio" name="work_treatment_no"></input>
                <label htmlFor="caregiver_no">No</label>
              </div>
            </fieldset>
          </div>
          </div>
          <span className={styles.divider}></span>
          <div className="question-set-container-final">
          <div className={styles.question_row_item}>
            <input className="answered_chk" type="checkbox" name="answered_chk"></input>
            <label htmlFor="answered_chk">
              I have answered these questions truthfully to the best of my
              knowledge.
            </label>
            </div>
          </div>
          <Link href="/scheduling">
        <button className="button">Select Date and Time</button>
      </Link>
        </div>
      </div>
    </div>
  );
};

export default QuestionFormComponent;
