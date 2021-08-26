import styles from './WorkPlaceExposureComponent.module.css';
import { useState, useEffect } from 'react';

const WorkPlaceExposureComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  schedulePush
}) => {
  const [hasConsent, setHasConsent] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  const handleChecked = (e) => {
    if (
      e.target.id === 'prev_covid_none_of_the_above' &&
      e.target.checked === true
    ) {
      checkboxesArray.forEach((element) => {
        if (!(element === 'None_of_the_Above')) {
          let symtomsChk = document.getElementById(
            `prev_covid_${element.toLowerCase()}`
          );
          symtomsChk.checked = false;
          symtomsChk.disabled = true;
        }
      });
      schedulePush();
    }
  };

  let checkboxesArray = ['None_of_the_Above'];

  const regex = /_/gi;

  let checkboxes = checkboxesArray.map((checkbox, idx) => (
    <div className={styles.chk_row_item}>
      <label className={styles.none_label_or}>
        {' '}
        <b>Please Confirm You Agree to the Above:</b>
      </label>
      <input
        id={`prev_covid_${checkbox.toLowerCase()}`}
        type="checkbox"
        key={checkbox.replace(regex, ' ')}
        value={checkbox.replace(regex, ' ')}
        name="Consent"
        onChange={(e) => {
          handleChecked(e);
        }}
      ></input>
      <label
        className={styles.prev_none_label}
        htmlFor={`prev_covid_${checkbox.toLowerCase()}`}
      >
        {'I Agree'}
      </label>
    </div>
  ));

  return (
    <>
      <div className={styles.question_row_item}>
        <div className={styles.question_row_item_sub}>
          <fieldset>
          <legend>
            
            Notify and discuss with your manager/supervisor that you may have had a high risk workplace exposure.  Details regarding the risk of exposure can be assessed between your manager and the Infection Prevention Contact Tracing team
            <br></br><br></br>
  
            Fully VACCINATED Employees (it has been {">2"} weeks since receiving your final dose of the COVID-19 vaccine):<br></br><br></br>
            You may continue to work as long as you are ASYMPTOMATIC<br></br>
            Please schedule your test 5 days from the date of the exposure (not earlier)<br></br>
            If you test <strong>POSITIVE</strong>, contact the Occupational Health Employee Resource Center at 844-543-2147, option 2
            <br></br><br></br>
            <strong>NOT</strong> Fully VACCINATED Employees (Unvaccinated OR it has NOT been at least 2 weeks since receiving your final COVID-19 vaccine dose):<br></br><br></br>
            You must quarantine for 10 days from the date of the exposure and undergo testing on day # 10.<br></br>
            Please schedule your test 10 days from the date of exposure (not earlier)<br></br>
            If you test <strong>POSITIVE</strong>, contact the Occupational Health Employee Resource Center 844-543-2147, option 2<br></br>
            If you test NEGATIVE on this day # 10 test, you may return to work on day # 11 <br></br>
            If you need a return to work clearance from Occupational Health after completing your quarantine, contact the Employee Resource Center at 844-543-2147, option 2
  
            </legend>
            <div className={styles.q1_grid}>{checkboxes}</div>
          </fieldset>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default WorkPlaceExposureComponent;
