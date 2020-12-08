import { useState, useEffect } from 'react';
import styles from './NoCovidTestComponent.module.css';

const NoCovidTestComponent = ({ schedulePush, selectPathway}) => {

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>

            <fieldset>
              <legend>Are you still experiencing symptoms at this time and need a COVID-19 test?:</legend>

              <div className="radio_row_item">
                <input
                  id="prev_covid_yes"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {
                    schedulePush();
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
                    selectPathway(6);
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

export default NoCovidTestComponent;
