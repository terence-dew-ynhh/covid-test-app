import { useState, useEffect } from 'react';
import styles from './RecentCovidTestComponent.module.css';

const RecentCovidTestComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled
}) => {
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
            <p className="error" hidden={!(isCovidPositive === 'No')}>
              A COVID test is required prior to completing your quarantine. For
              COVID-19 testing, please contact OCC Health Call Center at
              203-688-1700 (select a language and then option # 2 for employee
              health
            </p>
            <fieldset>
              <legend>
              Have you had a recent COVID-19 test on or after day # 6 of your quarantine to come out of quarantine of 7 days?
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
                  id="prev_covid_yes"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {
                    nextPage(2);
                  }}
                ></input>
                <label htmlFor="prev_covid_yes">I do not need a test since I completed my 10 day Quarantine</label>
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
                    setIsCovidPositive(e.target.value)
                  }}
                ></input>
                <label htmlFor="prev_covid_no">No</label>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default RecentCovidTestComponent;
