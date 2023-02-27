import { useState, useEffect } from 'react';
import styles from './RequireCovidTestingComponent.module.css'


 const RequireCovidTesting =({nextPage, isPrevEnabled, isDoneEnabled, updateIsSymptomatic, isNextEnabled, updateIsConnecticut}) => {
  
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
          <label htmlFor="employee_staff_check_yes">Having Symptoms? Please contact the Employee Resource Center to discuss symptoms and testing for COVID-19, Flu, and RSV; Call: (844)-543-2147</label>
          <br></br>
          <br></br>
          {/* <input
            id="employee_staff_check_no"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              updateIsSymptomatic(false)
              nextPage(e, 4)
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">Return from Travel to a High Risk Area?</label>
          <br></br>
          <br></br> */}
          {/* <input
            id="employee_staff_check_exempt"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              updateIsConnecticut(true)
              updateIsSymptomatic(false)
              nextPage(e,7)
            }}
          ></input>
          <label htmlFor="employee_staff_check_exempt"><u>I work in CT or New York</u> and am required to have weekly COVID-19 testing due to an exemption or some other reason.</label>
          <br></br>
          <br></br>
          <input
            id="employee_ri_check_exempt"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              updateIsConnecticut(false)
              updateIsSymptomatic(false)
              nextPage(e,7)
            }}
          ></input>
          <label htmlFor="employee_ri_check_exempt"><u>I work in RI</u> and am required to have weekly or twice weekly COVID-19 testing due to an exemption or some other reason.</label>
          <br></br>
          <br></br> */}
          <input
            id="employee_staff_check_workplace_exposure"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              updateIsSymptomatic(false)
              nextPage(e,10)
            }}
          ></input>
          <label htmlFor="employee_staff_check_workplace_exposure">I am asymptomatic and I had a possible WORKPLACE exposure to someone with COVID-19</label>
          <br></br>
          <br></br>
          <input
            id="employee_staff_check_household_exposure"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              updateIsSymptomatic(false)
              nextPage(e,11)
            }}
          ></input>
          <label htmlFor="employee_staff_check_household_exposure">I am asymptomatic and I had a possible Household, Community, or during Travel exposure to someone with COVID-19</label>
        </fieldset>        
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export default RequireCovidTesting;