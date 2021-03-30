import { useState, useEffect } from 'react';
import styles from './HaveSymptomsComponent.module.css';
import oeText from './havesymptoms.json';

const HaveSymptomsComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  overEighteen,
  isSpanish,
  setRiskGroup
}) => {
  const [isOver18, setIsOver18] = useState(true);

  useEffect(() => {
    isPrevEnabled(true);
    isDoneEnabled(false);
  }, []);

  let OEText = isSpanish ? oeText.sp : oeText.en;

  let checkboxesArray = [
    'Sickle Cell Disease',
    'Downs Syndrome',
    'End Stage Kidney Disease on Dialysis ',
    'Active Cancer Treatment',
    'Solid Organ Transplant',
    "Patient of Yale New Haven Children's Hospital",
    'None of the Above'
  ];

  let conditions = checkboxesArray.map((checkbox, idx) => (
    <>
      <b>
        <p>{checkbox}</p>
      </b>{' '}
    </>
  ));

  return (
    <>
      <div className={styles.question_row_item}>
        {/* <p className="banner" >
      The following questions should be answered on behalf of the individual being scheduled for vaccination. 
        </p> */}
        <br></br>
        <br></br>
        <fieldset className="radio_grp_set">
          <legend>
            {OEText[2]}
            {conditions}
          </legend>
          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={() => {
              nextPage();
              setRiskGroup(true);
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
              nextPage();
              setRiskGroup(false);
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">{OEText[1]}</label>
        </fieldset>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default HaveSymptomsComponent;
