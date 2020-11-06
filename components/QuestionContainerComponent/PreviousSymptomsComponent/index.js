import { useState, useEffect } from 'react';
import styles from './PreviousSymptomsComponent.module.css';

const PreviousSymptoms = ({ nextPage, isPrevEnabled, isDoneEnabled, viewPush }) => {
  const [isCovidPositive, setIsCovidPositive] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
            <p className="error" hidden={!(isCovidPositive === 'Yes')}>
            Please reach out to your manager for testing associated with contact tracing.
            </p>
            <fieldset>
              <legend>Why do you need COVID Testing?:</legend>

              <div className="radio_row_item">
                <input
                  id="prev_covid_asymp"
                  type="radio"
                  value="No"
                  name="prev_covid"
                  onClick={(e) => {
                    nextPage();
                  }}
                ></input>
                <label htmlFor="prev_covid_asymp">
                  Asymptomatic Healthcare Testing
                </label>
              </div>
              <br></br><br></br>
              <div className="radio_row_item">
                <input
                  id="prev_covid_symp"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {
                    viewPush(false);
                  }}
                ></input>
                <label htmlFor="prev_covid_symp">Having Symptoms?</label>
              </div>
              <br></br><br></br>
              <div className="radio_row_item">
                <input
                  id="prev_covid_travel"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {                    
                    viewPush(false);
                  }}
                ></input>
                <label htmlFor="prev_covid_travel">
                  Return from Travel to a High Risk Area?
                </label>
              </div>
              <br></br><br></br>
              <div className="radio_row_item">
                <input
                  id="prev_covid_contact"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {                    
                    setIsCovidPositive(e.target.value);
                  }}
                ></input>
                <label htmlFor="prev_covid_contact">
                  Contact Tracing
                </label>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default PreviousSymptoms;
