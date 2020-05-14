import React, {useState} from "react";
import { logInfo } from './actions';
import styles from './QuestionFormComponent.module.css'

const QuestionFormComponent = () => {
  const [isEmployee, setIsEmployee] = useState(false);
  const [patientData, setPatientData] = useState({
    age:'',
    yale_employee:'',
    employee_type:'',
    net_id:'',
    fever_higher:'',
    cough:'',
    diff_breath:'',
    asthma_lung:'',
    diabetes:'',
    obesity:'',
    cirrhosis:'',
    pregnancy:'',
    heart_cond:'',
    diseases_cough:'',
    kidney_failure:'',
    immune_system:'',
    nursing_home:'',
    health_care:'',
    treatment_facility:'',
    caregiver:'',
  })

  function submitLog(evt){
    evt.preventDefault();
    logInfo(patientData);
  }

  const handleChange = e =>{
    let value = patientData[e.target.name] === 'Yes' ? '': e.target.value;

    setPatientData({ ...patientData, [e.target.name]: value });
  }
  

  const netIdField = isEmployee ? <div className={styles.question_row_item_sub}>
  <label htmlFor="net_Id">What is your NetID?</label>
  <input className={styles.question_input_txt} onChange={handleChange} type="text" name="net_Id"></input>
  </div> : null

  const employeeTypeRdio = isEmployee ? <div className={styles.question_row_item_sub}>
  <fieldset><legend>What type of employee are you?</legend><div className="radio_row_item">
    <input defaultChecked id="employee_type_researcher" type="radio" value="researcher" name="employee_type" onClick={(e)=>{handleChange(e)}}></input>
    <label htmlFor="employee_type_researcher">Researcher</label>
  </div>
  <div className="radio_row_item">
    <input  id="employee_type_faculty" type="radio" value="faculty" name="employee_type" onClick={(e)=>{handleChange(e)} }></input>
    <label htmlFor="employee_type_faculty">Faculty</label>
  </div>
  <div className="radio_row_item">
    <input  id="employee_type_student" type="radio" value="student" name="employee_type" onClick={(e)=>{handleChange(e)} }></input>
    <label htmlFor="employee_type_student">Student</label>
  </div>              
</fieldset>
  </div> : null

  return (
    <>
      <h1 className="title">
      We need to collect some more information.
      </h1>

      <p className="description">
      Details will be confirmed on site at your visit.
      </p>
      <div className={styles.questionContainer}>
      <form onSubmit={ e => submitLog(e)} id="patient-form" name="patient-form">
        <div className="question-set-container">
          <div className="question-set-container-conditions">
            
            <div className={styles.question_row_item}>
              <label htmlFor="age">Age</label>
              <input className={styles.question_input_txt} type="number" name="age" min="0" max="120"></input>

              <div className={styles.question_row_item_sub}>
              <fieldset >
              <legend>
                Are you a Yale Employee?
              </legend>

              <div className="radio_row_item">
                <input id="yale_employee_yes" type="radio" value="Yes" name="yale_employee" onClick={(e)=>{handleChange(e); setIsEmployee(true)} }></input>
                <label htmlFor="yale_employee_yes">Yes</label>
              </div>

              <div className="radio_row_item">
                <input defaultChecked id="yale_employee_no" type="radio" value="" name="yale_employee" onClick={(e)=>{handleChange(e); setIsEmployee(false)} }></input>
                <label htmlFor="yale_employee_no">No</label>
              </div>              
            </fieldset>
              </div>
              {employeeTypeRdio}
              {netIdField}             
              <div className={styles.question_row_item_sub}>
              <input id="fever_higher_chk" type="checkbox" name="fever_higher" value={"Yes"} onClick={handleChange}></input>
              <label htmlFor="fever_higher_chk">Fever of 100°F or higher</label>

              <input id="cough_chk" type="checkbox" name="cough" value="Yes" onClick={handleChange}></input>
              <label htmlFor="cough_chk">Cough</label>

              <input id="diff_breath_chk" type="checkbox" name="diff_breath" value="Yes" onClick={handleChange}></input>
              <label htmlFor="diff_breath_chk">
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
                <input id="nursing_home_chk_yes" type="radio" value="Yes" name="nursing_home" onClick={handleChange}></input>
                <label htmlFor="nursing_home_chk_yes">Yes</label>
              </div>

              <div className="radio_row_item">
                <input defaultChecked id="nursing_home_chk_no" type="radio" value="" name="nursing_home" onClick={handleChange}></input>
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
                <input id="health_care_yes" type="radio" value="Yes" name="health_care" onClick={handleChange}></input>
                <label htmlFor="health_care_yes">Yes</label>
              </div>

              <div className="radio_row_item">
                <input defaultChecked id="health_care_no" type="radio" value="" name="health_care" onClick={handleChange}></input>
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
                <input id="treatment_facility_yes" type="radio" value="Yes"  name="treatment_facility" onClick={handleChange}></input>
                <label htmlFor="treatment_facility_yes">Yes</label>
              </div>

              <div className="radio_row_item">
                <input defaultChecked id="treatment_facility_no" type="radio" value="" name="treatment_facility" onClick={handleChange}></input>
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
                <input id="caregiver_yes" type="radio" value="Yes" name="caregiver" onClick={handleChange}></input>
                <label htmlFor="caregiver_yes">Yes</label>
              </div>

              <div className="radio_row_item">
                <input defaultChecked id="caregiver_no" type="radio" value="" name="caregiver" onClick={handleChange}></input>
                <label htmlFor="caregiver_no">No</label>
              </div>
            </fieldset>
          </div>
          </div>
          <span className={styles.divider}></span>
          <div className="question-set-container-final">
          <div className={styles.question_row_item}>
            <input id="answered_truthfully_chk" type="checkbox" name="answered_truthfully"></input>
            <label htmlFor="answered_truthfully_chk">
              I have answered these questions truthfully to the best of my
              knowledge.
            </label>
            </div>
          </div>
        <button type="submit" form="patient-form"  className={styles.submitbutton}>Select Date and Time</button>
        </div>
        </form>
      </div>
    </>
  );
};

export default QuestionFormComponent;
