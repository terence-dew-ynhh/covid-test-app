import { useState, useEffect } from 'react';
import styles from './Over18Component.module.css'
import oeText from './over18.json';



 const Over18Component =({nextPage, isPrevEnabled, isDoneEnabled, isSpanish}) => {
  
  const [isOver18, setIsOver18] = useState(true);
  const [under18, setUnder18] = useState(true); 

  useEffect(() => {
    isPrevEnabled(false);
    isDoneEnabled(false);
  }, []);

  let OEText = isSpanish ? oeText.sp : oeText.en;

    return (
    <>
      <div className={styles.question_row_item}>
      <p className="banner" >
      The following questions should be answered on behalf of the individual being scheduled for vaccination. 
        </p>
        <br></br>
        <br></br>
        <fieldset className="radio_grp_set">
          <legend>
          {OEText[2]}
          </legend>
          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={() => {
              nextPage();
              setIsOver18(true);
              // overEighteen(true);
            }}
          ></input>
          <label htmlFor="employee_staff_check_yes">{OEText[0]}</label>
            <br></br>
            <br></br>
          <input
            id="employee_staff_check_no"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              //nextPage();
              //setIsOver18(false);
              // overEighteen(false);
              setUnder18(false);
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">{OEText[1]}</label>
          <p className="error" hidden={under18}>You have indicated that you are scheduling for yourself or someone who is 16 or 17 years old. At this time only the Pfizer Vaccine is eligible for this age group. To ensure that the appropriate Vaccine is scheduled please call 1-833-ASK-YNHH (275-9644) for assistance.</p>
        </fieldset>        
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export default Over18Component;