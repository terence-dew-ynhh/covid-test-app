import styles from './SympConsentComponent.module.css';
import { useState, useEffect } from 'react';

const SympConsentComponent = ({ nextPage, isPrevEnabled, isDoneEnabled, schedulePush }) => {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(false);
  }, []);

  const handleChecked = (e) => {
    setHasConsent((consent) => !consent);
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
              You have selected the option:{' '}
              <b>SYMPTOMATIC (experiencing symptoms).</b>
              <br></br>
              <br></br>
              {!hasConsent && (
                <div className={styles.q1_grid}>{checkboxes}</div>
              )}
              {hasConsent && (
                <>
                <br></br>
                <br></br>
                <button
                  className="button"
                  onClick={schedulePush}
                >
                  Schedule COVID-19 Testing Only
                </button>
                <br></br>
                <br></br></>
              )}
              If you do not have a primary care provider and would like to be
              assessed for flu or other medical concerns, please call the YNHHS
              Call Center at 833-ASK-YNHH (833-275-9644) or{' '}
              <a target="__blank" href="https://www.ynhhs.org/make-an-appointment/schedule-a-walk-in.aspx?utm_source=covidtesting2&utm_medium=link">
                CLICK HERE
              </a>{' '}
              make a walk-in or video visit with one of our clinicians.
              <br></br>
              <br></br>
              If you are symptomatic and test positive, you may be eligible for
              COVID-19 treatment. You should call your primary care provider,
              or, if you do not have a primary care provider, call 833-ASK-YNHH
              (833-275-9644) as soon as your result is available to be assessed
              for eligibility for referral and treatment.
              <br></br>
              <br></br>
            </legend>
          </fieldset>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default SympConsentComponent;
