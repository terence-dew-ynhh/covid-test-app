import { useState, useEffect } from 'react';
import styles from './FirstResponderComponent.module.css';

const FirstResponderComponent = ({ nextPage, isPrevEnabled, isDoneEnabled, schedulePush }) => {
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
            <fieldset>
              <legend>Are you a Police/Fire/EMS or other YNHHS Approved patient or designee?:</legend>

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
              <br></br><br></br>
              <div className="radio_row_item">
                <input
                  id="prev_covid_no"
                  type="radio"
                  value="No"
                  name="prev_covid"
                  onClick={(e) => {
                    window.open('https://covidtesting2.ynhhs.org/')
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

export default FirstResponderComponent;
