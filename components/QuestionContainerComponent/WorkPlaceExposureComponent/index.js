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
              Notify and discuss with your manager/supervisor that you may have
              had a high risk workplace exposure. Details regarding the risk of
              exposure can be assessed between your manager and your local
              Infection Prevention department.
              <br></br>
              <br></br>
              <b>1.</b> Fully Vaccinated AND <b>BOOSTED</b> Employees:
              <br></br>
              <blockquote>
                <b>a.</b> You may continue to work as long as you are
                ASYMPTOMATIC
                <br></br>
                <b>b.</b> You <b>DO NOT REQUIRE</b> testing<br></br>
              </blockquote>
              <b>2.</b>
              <strong> NOT</strong> Fully Vaccinated OR Fully Vaccinated AND
              <b> NOT BOOSTED </b>
              Employees:<br></br>
              <blockquote>
                <b>a.</b>You may Continue to Work as long as you are
                ASYMPTOMATIC and get testing<br></br>
                <blockquote>
                  <b>i.</b> Please schedule a test ONCE 1 or 2 days after
                  your exposure AND<br></br>
                  <b>ii.</b>Schedule a test ONCE between days 5 and 7 after your
                  exposure<br></br>
                </blockquote>
              </blockquote>
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
