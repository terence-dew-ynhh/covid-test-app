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
  isOver50,
  setIsOver50,
  is2ndBooster,
  setIs2ndBooster,
  setIsAdolescent
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
       {isUnavailable && <p className="error">
        At this time, Yale New Haven Health is not offering COVID Vaccinations for this age group. Please check with your primary care provider or <a href="www.vaccines.gov/search/" target={"_blank"}>www.vaccines.gov/search/</a> to locate a local vaccine provider.
        </p>}
        {/* {isPediatric && (
          <p className="error" >
            At this time all appointments for children ages 5-11 are booked. Please check back here regularly for updates.
          </p>
        )} */}
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
              setIsUnavailable(true);
              over65(true);
              set18to64(false);
              setIsOver50(true)
              pediatric(false);
              // nextPage(e);
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
              setIsUnavailable(true);
              over65(false);
              set18to64(true);
              pediatric(false);
              setIsOver50(true);
              // nextPage(e);
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
              setIsUnavailable(true);
              setSixteen(true);
              set18to64(false);
              over65(false);
              setIsOver50(false);
              pediatric(false);
              // nextPage(e);
            }}
          ></input>
          <label htmlFor="employee_staff_check_sixteen">{OEText[4]}</label>
          <br></br>
          <br></br>

          <input
            id="employee_staff_check_five"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              setIsUnavailable(true);
              setJJApproved(false);
              set18to64(false);
              over65(false);
              setIsOver50(false);
              pediatric(true);
              // nextPage(e);
            }}
            ></input>
          <label htmlFor="employee_staff_check_five">{OEText[2]}</label>
            <br></br>
            <br></br>
          <input
            id="employee_staff_check_6mo"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              setIsUnavailable(false);
              setJJApproved(false);
              set18to64(false);
              over65(false);
              setIsOver50(false);
              pediatric(false);
              setIsAdolescent(true)
              nextPage(e,12);
            }}
          ></input>
          <label htmlFor="employee_staff_check_6mo">Someone who is 6 months – 5 years of age</label>
       
        </fieldset>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default Over18Component;
