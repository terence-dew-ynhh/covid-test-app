import { useState, useEffect } from 'react';
import styles from './Less14DaysContactComponent.module.css';

const Less14DaysContactComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled
}) => {
  const [isCovidPositive, setIsCovidPositive] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(false);
  }, []);

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
            <p className="error" hidden={!(isCovidPositive === 'Yes')}>
              The required duration for quarantine after a high risk household
              exposure is 10 days from last close contact date
            </p>
            <fieldset>
              <legend>
                Has it been at least 10 days since your last close contact*
                with the COVID-19 Positive person in your Household AND you had a negative COVID-19 test on or after day # 10 of your quarantine?:
                <br></br>
                <br></br>
                OR
                <br></br>
                <br></br>
                Has it been more than 10 days since your last close contact* with the COVID-19 Positive person in your Household (no testing required)?
                <br></br>
                <br></br>
                *Close contact is defined as: no mask use, within 6 feet, and
                greater than 15 minutes over a 24 hour period with the COVID-19
                positive individual while they were infectious
              </legend>

              <div className="radio_row_item">
                <input
                  id="prev_covid_yes"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {
                    nextPage();
                  }}
                ></input>
                <label htmlFor="prev_covid_yes">Yes</label>
              </div>
              <br></br>
              <br></br>
              <div className="radio_row_item">
                <input
                  id="prev_covid_no"
                  type="radio"
                  value="No"
                  name="prev_covid"
                  onClick={(e) => {
                    setIsCovidPositive(e.target.value);
                  }}
                ></input>
                <label htmlFor="prev_covid_no">No </label>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default Less14DaysContactComponent;
