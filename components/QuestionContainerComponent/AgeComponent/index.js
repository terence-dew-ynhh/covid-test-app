import { useState, useEffect } from 'react';
import styles from './Over18Component.module.css';
import oeText from './over18.json';

const Over18Component = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  over65,
  isSpanish,
  schedulePush,
  setJJApproved,
  pediatric, 
  isPediatric,
  setSixteen,
  set18to64,
}) => {
  const [isUnavailable, setIsUnavailable] = useState(false);

  useEffect(() => {
    isPrevEnabled(false);
    isDoneEnabled(false);
    setSixteen(false);
    over65(false);
    pediatric(false)
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
            id="age1865"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              setIsUnavailable(false);
              over65(true);
              set18to64(false);
              pediatric(false);
              nextPage(e);
            }}
          ></input>
          <label htmlFor="age1865">{OEText[0]}</label>
        <br></br>
        <br></br>
          <input
            id="age1864"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              setIsUnavailable(false);
              over65(false);
              set18to64(true);
              pediatric(false);
              nextPage(e);
            }}
          ></input>
          <label htmlFor="age1864">Someone who is 18 – 64 years of age</label>
        <br></br>
        <br></br>
          <input
            id="employee_staff_check_sixteen"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              setIsUnavailable(false);
              setSixteen(true);
              set18to64(false);
              over65(false);
              pediatric(false);
              nextPage(e);
            }}
          ></input>
          <label htmlFor="employee_staff_check_sixteen">{OEText[4]}</label>
          <br></br>
          <br></br>
          {/* <input
            id="employee_staff_check_no"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              setIsUnavailable(true);
              setJJApproved(false);
              over65(false);
              pediatric(false);
              nextPage(e, 2);
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">{OEText[1]}</label>
          <br></br>
          <br></br> */}
          <input
            id="employee_staff_check_five"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              setIsUnavailable(true);
              setJJApproved(false);
              set18to64(false);
              over65(false);
              pediatric(true);
              nextPage(e);
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
