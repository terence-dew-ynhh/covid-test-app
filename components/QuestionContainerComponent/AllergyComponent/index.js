import { useState, useEffect } from 'react';
import styles from './AllergyComponent.module.css';
import oeText from './over18.json';

const AllergyComponent = ({
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
      nextPage(e, 4);
    } else if (isBooster) {
      nextPage(e, 3);
    } else {
      if (isOver65) nextPage(e, 4);
      else nextPage(e, 5);
    }
  };

  let OEText = isSpanish ? oeText.sp : oeText.en;

  return (
    <>
      <div className={styles.question_row_item}>
        {/* <p className="banner">
          NOTE: If your allergist has approved your receiving additional COVID
          vaccinations you may proceed.
        </p>
        <p className="error" hidden={!hasNoAllergy}>
         Due to allergic reaction, please contact your provider for COVID-19 vaccination recommendations
        </p> */}
        <br></br>
        <br></br>
        <fieldset className="radio_grp_set">
          <legend>
            {OEText[3]}
            <p>
              <b>
                *Please respond “yes” even if your allergic reaction was not
                severe enough to require emergency medical care.
              </b>
            </p>
          </legend>

          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              setHasNoAllergy(true);
              nextPage(e);
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
        </fieldset>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default AllergyComponent;
