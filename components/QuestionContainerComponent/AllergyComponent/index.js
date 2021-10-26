import { useState, useEffect } from 'react';
import styles from './AllergyComponent.module.css';
import oeText from './over18.json';

const AllergyComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  isOver18,
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
      nextPage(e, 2);
    } else if (isBooster) {
      nextPage(e);
    } else {
      if (isOver18) nextPage(e, 3);
      else nextPage(e, 5);
    }
  };

  let OEText = isSpanish ? oeText.sp : oeText.en;

  return (
    <>
      <div className={styles.question_row_item}>
        <p className="banner">
          NOTE: If your allergist has approved your receiving additional COVID
          vaccinations you may proceed.
        </p>
        <p className="error" hidden={!hasNoAllergy}>
          Yale New Haven Health does not currently have any appointments
          available for Moderna third dose.
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
              setHasNoAllergy(true);
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
              handleSelection(e);
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">{OEText[1]}</label>
          <br></br>
          <br></br>
          <input
            id="employee_staff_check_no"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              handleSelection(e);
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">{OEText[2]}</label>
        </fieldset>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default AllergyComponent;
