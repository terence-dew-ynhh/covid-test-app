import { useState, useEffect } from 'react';
import styles from './AllergistApprovedComponent.module.css';
import oeText from './over18.json';

const AllergistApprovedComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  isOver65,
  isSpanish,
  isImmunocomp,
  isBooster
}) => {
  const [hasNoAllergy, setHasNoAllergy] = useState(false);

  useEffect(() => {
    isPrevEnabled(true);
    isDoneEnabled(false);
  }, []);

  const handleSelection = (e) => {
    if (isImmunocomp) {
      nextPage(e, 3);
    } else if (isBooster) {
      nextPage(e, 2);
    } else {
      if (isOver65) nextPage(e, 3);
      else nextPage(e, 4);
    }
  };

  let OEText = isSpanish ? oeText.sp : oeText.en;

  return (
    <>
      <div className={styles.question_row_item}>

        <p className="error" hidden={!hasNoAllergy}>
        Please contact your primary care provider to arrange for an allergist to determine if it is safe for you to receive another dose of the Moderna or Pfizer COVID-19 vaccine
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
              handleSelection(e);
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
              setHasNoAllergy(true);
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">{OEText[1]}</label>
          
        </fieldset>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default AllergistApprovedComponent;
