import { useState, useEffect } from 'react';
import styles from './PostTravelTestingComponent.module.css'


 const PostTravelTesting =({nextPage, isPrevEnabled, isDoneEnabled, schedulePush}) => {
  
  const [isEmployee, setIsEmployee] = useState(true);

  useEffect(() => {
    isPrevEnabled(true);
    isDoneEnabled(false);
  }, []);

    return (
    <>
      <div className={styles.question_row_item}>
      <p className="error" hidden={isEmployee}>
          Sorry, please navigate to a public testing website to schedule your
          test
        </p>
        <fieldset className="radio_grp_set">
          <legend>
        	Choose which post-travel testing you would like to schedule:
          </legend>
          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              nextPage(e)
            }}
          ></input>
          <label className={styles.blocking_label} htmlFor="employee_staff_check_yes">1st Baseline Test upon return from travel</label>
          <br></br>
          <br></br>
          <input
            id="employee_staff_check_no"
            type="radio"
            name="employee_staff"
            onClick={() => {
              schedulePush(true)
            }}
          ></input>
          <label className={styles.blocking_label} htmlFor="employee_staff_check_no">2nd Test, please schedule yourself on the 7th day after returning from travel</label>
        </fieldset>        
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export default PostTravelTesting;