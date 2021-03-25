import { useState, useEffect } from 'react';
import styles from './Over18Component.module.css'
import oeText from './over18.json';



 const Over18Component =({nextPage, isPrevEnabled, isDoneEnabled, overEighteen, isSpanish}) => {
  
  const [isOver18, setIsOver18] = useState(true);

  useEffect(() => {
    isPrevEnabled(false);
    isDoneEnabled(false);
  }, []);

  let OEText = isSpanish ? oeText.sp : oeText.en;

    return (
    <>
      <div className={styles.question_row_item}>
      <p className="error" hidden={isOver18}>
      Please contact us at 203-932-7079 to discuss a process for you. 
        </p>
        <fieldset className="radio_grp_set">
          <legend>
          {OEText[0]} 
          </legend>
          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={() => {
              nextPage();
              setIsOver18(true);
              overEighteen(true);
            }}
          ></input>
          <label htmlFor="employee_staff_check_yes">{OEText[1]}</label>

          <input
            id="employee_staff_check_no"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              setIsOver18(false);
              overEighteen(false);
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">{OEText[2]}</label>
        </fieldset>        
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export default Over18Component;