import styles from './FeeConsentComponent.module.css';
import { useState, useEffect } from 'react';

const FeeConsentComponent = ({ nextPage, isPrevEnabled, isDoneEnabled, schedulePush }) => {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(false);
  }, []);

  const handleChecked = (e) => {
    nextPage(e)
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
            <p className="error">
     
              You will be billed a $75 fee for this test.
              <br></br>
              <br></br>
              You have chosen to have testing for a reason that cannot be billed to insurance.
              <br></br>
              <br></br>
              If you are experiencing symptoms or have a known exposure to someone with COVID-19, please go back to the beginning of this form and choose the correct reason for
              testing to ensure this can be billed to insurance.
              <br></br>
              <br></br>
        </p>
            </legend>
            <div className={styles.q1_grid}>{checkboxes}</div>
          </fieldset>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default FeeConsentComponent;
