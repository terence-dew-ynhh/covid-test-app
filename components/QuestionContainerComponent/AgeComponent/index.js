import { useState, useEffect } from 'react';
import styles from './Over18Component.module.css';
import oeText from './over18.json';

const Over18Component = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  overEighteen,
  isSpanish,
  schedulePush,
  setJJApproved,
  underFive
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
          <legend>{OEText[3]}</legend>
          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              setIsOver18(true);
              overEighteen(true);
              underFive(false);
              nextPage(e, 2);
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
              setIsOver18(false);
              setJJApproved(false);
              overEighteen(false);
              underFive(false);
              nextPage();
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">{OEText[1]}</label>
          <br></br>
          <br></br>
          <input
            id="employee_staff_check_five"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              setIsOver18(false);
              setJJApproved(false);
              overEighteen(false);
              underFive(true);
              nextPage();
            }}
          ></input>
          <label htmlFor="employee_staff_check_five">{OEText[2]}</label>
        </fieldset>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default Over18Component;
