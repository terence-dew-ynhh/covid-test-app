import styles from './SympConsentComponent.module.css';
import { useState, useEffect } from 'react';

const SympConsentComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  schedulePush
}) => {
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
                  <button className="button" onClick={schedulePush}>
                    Schedule COVID-19 Testing Only
                  </button>
                  <br></br>
                  <br></br>
                </>
              )}
              After choosing Complete Survey, you will be redirected to MyChart
              to schedule a test at the dedicated test site for individuals with
              possible symptoms for COVID-19. If you wish to speak with a Yale
              Health medical professional, please contact the Campus COVID
              Resource Line at <a href='tel:203-432-6604'>(203) 432-6604</a> or call your Primary Care
              Provider.
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
