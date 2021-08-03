import { useState, useEffect } from 'react';
import styles from './HITHistoryComponent.module.css';
import oeText from './hithistory.json';
import Link from 'next/link'

const HITHistoryComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  overEighteen,
  isSpanish,
  schedulePush,
  setJJApproved
}) => {
  const [isOver18, setIsOver18] = useState(true);

  useEffect(() => {
    isPrevEnabled(true);
    isDoneEnabled(false);
  }, []);

  let OEText = isSpanish ? oeText.sp : oeText.en;

  return (
    <>
      <div className={styles.question_row_item}>
        <p className="banner">
          We have resumed distributing the Janssen (J&J) vaccination.
        </p>
        <br></br>
        <br></br>
        <fieldset className="radio_grp_set">
          <legend>{OEText[2]}</legend>
          <Link href="/faq">
          <a target="_blank">Janssen (J&J) FAQ</a>
        </Link>
        <br></br>
        <br></br>
          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={() => {
              setJJApproved(false);
              nextPage();
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
              setJJApproved(true);
              nextPage();
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">{OEText[1]}</label>
        </fieldset>
        <br></br>
        <br></br>
        <b className="redText">
          UNH recommends that patients with HIT obtain the Pfizer or Moderna
          vaccine.
        </b>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default HITHistoryComponent;
