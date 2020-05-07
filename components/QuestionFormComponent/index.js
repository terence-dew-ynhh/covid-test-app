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
              <input id="" type="checkbox" name=""></input>
              <label htmlFor="">Fever of 100°F or higher</label>

              <input id="" type="checkbox" name=""></input>
              <label htmlFor="">Cough</label>

              <input id="" type="checkbox" name=""></input>
              <label htmlFor="">
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
                <input id="" type="checkbox" name=""></input>
                <label htmlFor="">Asthma or chronic lung disease</label>
                <input id="" type="checkbox" name=""></input>
                <label htmlFor="">Diabetes</label>
                <input id="" type="checkbox" name=""></input>
                <label htmlFor="">Extreme obesity</label>
                <input id="" type="checkbox" name=""></input>
                <label htmlFor="">Cirrhosis of the liver</label>
                <input id="" type="checkbox" name=""></input>
                <label htmlFor="">Pregnancy</label>
                
                <input id="" type="checkbox" name=""></input>
                <label htmlFor="">
                  Serious heart condition, such as congestive heart failure
                </label>
                <input id="" type="checkbox" name=""></input>
                <label htmlFor="">
                  Diseases or conditions that make it harder to cough
                </label>
                <input id="" type="checkbox" name=""></input>
                <label htmlFor="">
                  Kidney failure or end stage renal disease
                </label>
                <input id="" type="checkbox" name=""></input>
                <label htmlFor="">
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
                <input type="radio" name=""></input>
                <label htmlFor="">Yes</label>
              </div>

              <div className="radio_row_item">
                <input type="radio" name=""></input>
                <label htmlFor="">No</label>
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
                <input type="radio" name="have_referral"></input>
                <label htmlFor="">Yes</label>
              </div>

              <div className="radio_row_item">
                <input type="radio" name="have_referral"></input>
                <label htmlFor="">No</label>
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
                <input type="radio" name="have_referral"></input>
                <label htmlFor="">Yes</label>
              </div>

              <div className="radio_row_item">
                <input type="radio" name="have_referral"></input>
                <label htmlFor="">No</label>
              </div>
              
            </fieldset>
          </div>
          </div>
          <span className={styles.divider}></span>
          <div className="question-set-container-q5">
            <div className="radio_row_item">
            <fieldset className={styles.radio_grp_set}>
              <legend>
                Do you live or work in a treatment facility, group home or other
                group setting?
              </legend>

              <div className="radio_row_item">
                <input type="radio" name="have_referral"></input>
                <label htmlFor="">Yes</label>
              </div>

              <div className="radio_row_item">
                <input type="radio" name="have_referral"></input>
                <label htmlFor="">No</label>
              </div>
            </fieldset>
          </div>
          </div>
          <span className={styles.divider}></span>
          <div className="question-set-container-final">
          <div className={styles.question_row_item}>
            <input className="" type="checkbox" name=""></input>
            <label htmlFor="">
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
