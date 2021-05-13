import { useState, useEffect } from 'react';
import styles from './AgeComponent.module.css';
import oeText from './agequestion.json';

const Over18Component = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  overEighteen,
  isSpanish,
  schedulePush,
  // setJJApproved
}) => {
  const [isOver18, setIsOver18] = useState(true);

  useEffect(() => {
    isPrevEnabled(false);
    isDoneEnabled(false);
  }, []);

  let OEText = isSpanish ? oeText.sp : oeText.en;

  return (
    <>
      <div className={styles.question_row_item}>
        <p className="banner">
          The following questions should be answered on behalf of the individual
          being scheduled for vaccination.
        </p>
        <br></br>
        <br></br>
        <fieldset className="radio_grp_set">
          <legend>{OEText[2]}</legend>
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
          <label htmlFor="employee_staff_check_yes">{OEText[0]}</label>
          <br></br>
          <br></br>
          <input
            id="employee_staff_check_no"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              // nextPage();
              setIsOver18(false);
              setJJApproved(false);
              nextPage();
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">{OEText[1]}</label>
        </fieldset>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default Over18Component;