import { useState, useEffect } from 'react';
import styles from './Over18Component.module.css'


 const Over18Component =({nextPage, isPrevEnabled, isDoneEnabled}) => {
  
  const [isOver18, setIsOver18] = useState(true);
  const [isOver18andProxy, setIsOver18andProxy] = useState(true);
  useEffect(() => {
    isPrevEnabled(true);
    isDoneEnabled(false);
  }, []);

    return (
    <>
      <div className={styles.question_row_item}>
      <p className="error" hidden={isOver18}>
      If you are under the age of 18, a parent or guardian is required to schedule this appointment. We recommend contacting your medical provider directly or call the YNHHS COVID Call Center at 1-888-ASK-YNHH for a clinical assessment.
        </p>
        <p className="advisement" hidden={isOver18andProxy}>
        For any patient under the age of 18, a parent, legal guardian or designated adult is required to be present at the time of the test.        
        </p>
        <fieldset className="radio_grp_set">
          <legend>
          Are you over the age of 18? 
          </legend>
          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={() => {
              nextPage()
              setIsOver18(true);
            }}
          ></input>
          <label id={styles.blocking_label} htmlFor="employee_staff_check_yesno">I am over the age of 18</label>
          <input
            id="employee_staff_check_yesno"
            type="radio"
            name="employee_staff"
            onClick={() => {
              nextPage();
              setIsOver18(false);
              setIsOver18andProxy(true);
            }}
          ></input>
          <label id={styles.blocking_label} htmlFor="employee_staff_check_yes">I am over the age of 18 and scheduling for someone under the age of 18</label>
          <input
            id="employee_staff_check_no"
            type="radio"
            name="employee_staff"
            onClick={() => {
              setIsOver18(false);
            }}
          ></input>
          <label id={styles.blocking_label} htmlFor="employee_staff_check_no">I am under the age of 18</label>
        </fieldset>        
      </div>
      <style jsx>{``}    
      </style>
    </>
  );
}

export default Over18Component;