import { useState, useEffect } from 'react';
import styles from './ReturnedFromHighRiskComponent.module.css'


 const ReturnedFromHighRisk =({nextPage, isPrevEnabled, isDoneEnabled}) => {
  
  const [isEmployee, setIsEmployee] = useState(true);

  useEffect(() => {
    isPrevEnabled(true);
    isDoneEnabled(false);
  }, []);

    return (
    <>
      <div className={styles.question_row_item}>
      <p className="error" hidden={isEmployee}>
      We are not testing employees who travel to non-high risk locations<br></br>

        </p>
        <fieldset className="radio_grp_set">
          <legend>
          Have you returned OR will you be returning within 1 week from a High Risk Location and need a COVID-19 test to be cleared to return to work? <br></br><br></br>
        	<b>Note:</b> After Clicking on the website below. Click the "X" in upper right hand corner and select "Close Current Tab" to return to the questionnaire. (If Applicable) <br></br><br></br>
          Within the U.S.: <a target="_blank" href='https://portal.ct.gov/Coronavirus/Covid-19-Knowledge-Base/Travel-In-or-Out-of-CT'>https://portal.ct.gov/Coronavirus/Covid-19-Knowledge-Base/Travel-In-or-Out-of-CT</a><br></br><br></br>
          International: <a target="_blank" href='https://www.cdc.gov/coronavirus/2019-ncov/travelers/map-and-travel-notices.html'>https://www.cdc.gov/coronavirus/2019-ncov/travelers/map-and-travel-notices.html</a>

          </legend>
          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              nextPage(e)
              setIsEmployee(true);
            }}
          ></input>
          <label htmlFor="employee_staff_check_yes">Yes</label>

          <input
            id="employee_staff_check_no"
            type="radio"
            name="employee_staff"
            onClick={() => {
              setIsEmployee(false);
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">No</label>
        </fieldset>        
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export default ReturnedFromHighRisk;