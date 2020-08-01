import { useState, useEffect } from 'react';
import styles from './Over18Component.module.css'


 const Over18Component =({nextPage, isPrevEnabled, isDoneEnabled}) => {
  
  const [isOver18, setIsOver18] = useState(true);

  useEffect(() => {
    isPrevEnabled(true);
    isDoneEnabled(false);
  }, []);

    return (
    <>
      <div className={styles.question_row_item}>
      <p className="error" hidden={isOver18}>
      Please contact us at 203-932-7079 to discuss a process for you. 
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
          <label htmlFor="employee_staff_check_yes">Yes</label>

          <input
            id="employee_staff_check_no"
            type="radio"
            name="employee_staff"
            onClick={() => {
              setIsOver18(false);
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">No</label>
        </fieldset>        
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export default Over18Component;