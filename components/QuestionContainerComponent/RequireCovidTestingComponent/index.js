import { useState, useEffect } from 'react';
import styles from './RequireCovidTestingComponent.module.css'


 const RequireCovidTesting =({nextPage, isPrevEnabled, isDoneEnabled, updateIsSymptomatic, isNextEnabled}) => {
  
  const [isEmployee, setIsEmployee] = useState(true);

  useEffect(() => {
    isPrevEnabled(true);
    isDoneEnabled(false);
    isNextEnabled(false);
  }, []);

    return (
    <>
      <div className={styles.question_row_item}>
      {/* <p className="error" hidden={isEmployee}>
      Follow up with your manager regarding any workplace exposure concerns and testing per guidance from Infection Prevention
        </p> */}
        <fieldset className="radio_grp_set">
          <legend>
          Why do you need COVID testing?:
          </legend>
          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              updateIsSymptomatic(true)
              nextPage(e)
            }}
          ></input>
          <label htmlFor="employee_staff_check_yes">Having Symptoms?</label>
          <br></br>
          <br></br>
          <input
            id="employee_staff_check_no"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              updateIsSymptomatic(false)
              nextPage(e,5)
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">Return from Travel to a High Risk Area?</label>
          <br></br>
          <br></br>
          <input
            id="employee_staff_check_exempt"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              updateIsSymptomatic(false)
              nextPage(e,9)
            }}
          ></input>
          <label htmlFor="employee_staff_check_exempt">I have a COVID-19 Vaccine Exemption and I am Required for weekly COVID-19 testing</label>
          <br></br>
          <br></br>
          <input
            id="employee_staff_check_workplace_exposure"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              updateIsSymptomatic(false)
              nextPage(e,12)
            }}
          ></input>
          <label htmlFor="employee_staff_check_workplace_exposure">I have a COVID 19 Vaccine exemption (or I am not fully vaccinated) and I am required to have twice weekly testing</label>
          <br></br>
          <br></br>
          <input
            id="employee_staff_check_household_exposure"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              updateIsSymptomatic(false)
              nextPage(e,13)
            }}
          ></input>
          <label htmlFor="employee_staff_check_household_exposure">I am asymptomatic but have had a confirmed exposure at work or in the community</label>
        </fieldset>        
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export default RequireCovidTesting;