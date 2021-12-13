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
  pediatric, 
  isPediatric
}) => {
  const [isUnavailable, setIsUnavailable] = useState(false);

  useEffect(() => {
    isPrevEnabled(false);
    isDoneEnabled(false);
  }, []);

  let OEText = isSpanish ? oeText.sp : oeText.en;

  return (
    <>
      <div className={styles.question_row_item}>
        <p className="error" hidden={!(isUnavailable && !isPediatric)}>
          At this time, Yale New Haven Health does not currently have any
          appointments available for primary series vaccinations.
        </p>
        {isPediatric && (
          <p className="error" >
            At this time all appointments for children ages 5-11 are booked. Please check back here regularly for updates.
          </p>
        )}
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
              setIsUnavailable(false);
              overEighteen(true);
              pediatric(false);
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
              setIsUnavailable(true);
              setJJApproved(false);
              overEighteen(false);
              pediatric(false);
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
              setIsUnavailable(true);
              setJJApproved(false);
              overEighteen(false);
              pediatric(true);
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
