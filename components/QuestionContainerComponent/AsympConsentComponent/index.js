import styles from './AsympConsentComponent.module.css';
import { useState, useEffect } from 'react';

const AsympConsentComponent = ({ nextPage, isPrevEnabled, isDoneEnabled }) => {
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
          isDoneEnabled(true);
         
        }
        else{
          isDoneEnabled(false);
        }

  };

  let checkboxesArray = ['None_of_the_Above'];

  const regex = /_/gi;

  let checkboxes = checkboxesArray.map((checkbox, idx) => (
    <div className={styles.chk_row_item}>
      <input
        id={`prev_covid_${checkbox.toLowerCase()}`}
        type="checkbox"
        key={checkbox.replace(regex, ' ')}
        value={checkbox.replace(regex, ' ')}
        name="Consent"
        onChange={(e) => {
          // isDoneEnabled(true);
          handleChecked(e);
        }}
      ></input>
      <label
        className={styles.prev_none_label}
        htmlFor={`prev_covid_${checkbox.toLowerCase()}`}
      >
        {'By checking this box I agree to the above'}
      </label>
    </div>
  ));

  return (
    <>
      <div className={styles.question_row_item}>
        <div className={styles.question_row_item_sub}>
          <fieldset>
            <legend>
              You have selected the option:{' '}
              <b>ASYMPTOMATIC (not experiencing any symptoms).</b>
              <br></br>
              <br></br>
              Should you develop symptoms between now and your appointment,
              please cancel this appointment and re-schedule with your symptoms
              selected. This is to ensure you are visiting a location with the
              ability to assist symptomatic patients.
              <br></br>
              <br></br>
              Not all of our locations are able to accommodate symptomatic
              patients. If you are found to have symptoms at the time of this
              appointment, you may be re-directed to an alternate location with
              enhanced precautions. This is to ensure the highest level of
              safety for our staff and patients.
              <br></br>
              <br></br>
            </legend>
            <div className={styles.q1_grid}>{checkboxes}</div>
          </fieldset>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default AsympConsentComponent;
