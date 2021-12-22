import { useState, useEffect } from 'react';
import styles from './NeedCovidTestComponent.module.css';

const NeedCovidTestComponent = ({ nextPage, isPrevEnabled, isDoneEnabled, schedulePush }) => {
  const [isCovidPositive, setIsCovidPositive] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>            <fieldset>
              <legend>Why do you need COVID Testing?:</legend>

              <div className="radio_row_item">
                <input
                  id="prev_covid_yes"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {
                    nextPage()
                  }}
                ></input>
                <label htmlFor="prev_covid_yes">Having Symptoms</label>
              </div>
              <br></br><br></br>
              <div className="radio_row_item">
                <input
                  id="prev_covid_no"
                  type="radio"
                  value="No"
                  name="prev_covid"
                  onClick={(e) => {
                    nextPage();
                  }}
                ></input>
                <label htmlFor="prev_covid_no">Exposure to COVID </label>
              </div>
              <br></br><br></br>
              <div className="radio_row_item">
                <input
                  id="prev_covid_no"
                  type="radio"
                  value="No"
                  name="prev_covid"
                  onClick={(e) => {
                    nextPage();
                  }}
                ></input>
                <label htmlFor="prev_covid_no">Work Clearance</label>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default NeedCovidTestComponent;
