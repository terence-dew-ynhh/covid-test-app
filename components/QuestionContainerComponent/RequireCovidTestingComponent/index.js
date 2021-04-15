import { useState, useEffect } from 'react';
import styles from './RequireCovidTestingComponent.module.css'


 const RequireCovidTesting =({nextPage, isPrevEnabled, isDoneEnabled}) => {
  
  const [travel, setTravel] = useState(false);

  useEffect(() => {
    isPrevEnabled(true);
    isDoneEnabled(false);
  }, []);
  

    return (
    <>
      <div className={styles.question_row_item}>
      {/* <p className="error" hidden={isEmployee}>
      Follow up with your manager regarding any workplace exposure concerns and testing per guidance from Infection Prevention
        </p> */}
        <fieldset className={styles.radio_grp_set}>
          <legend>
          Why do you need COVID testing?:
          </legend>
          <input
            id="2a"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              nextPage(e)
            }}
          ></input>
          <label htmlFor="2a">I am having symptoms</label>
          <br></br>
          <br></br>
          <input
            id="2b"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              
              nextPage(e,4)
            }}
          ></input>
          <label htmlFor="2b">I require testing for work-related travel</label>
          <br></br>
          <br></br>
          <input
            id="2c"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              nextPage(e,4)
              setTravel(true);
            }}
          ></input>
          <label htmlFor="2c">I have had a workplace exposure identified by my manager</label>
          <br></br>
          <br></br>
          <input
            id="2d"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              window.location.href = "https://www.ynhhs.org/patient-care/covid-19/testing/testing-locations.aspx"
            }}
          ></input>
          <label htmlFor="2d">I need a test for another reason</label>                   
        </fieldset>        
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export default RequireCovidTesting;