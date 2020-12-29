import { useState, useEffect } from 'react';
import styles from './NoCovidTestComponent.module.css';

const NoCovidTestComponent = ({ schedulePush, selectPathway}) => {

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
          <p className="error">
            {' '}
            ATTENTION: You DO NOT NEED Occupational Health Clearance to return
            to work ONLY if the following applies to you: <br></br>
            <br></br>• You had a COVID-19 Vaccine dose in the past 48 hours AND
            <br></br>
            <br></br>• You developed ONLY vaccine side effects (fever, chills,
            muscle or joint aches, headaches, nausea, transient vomiting)
            lasting less than 48 hours AND<br></br>
            <br></br>• You took yourself out of work due to the symptoms for less than 48 hours<br></br>
            <br></br>
            If the above criteria do not apply to you and you still need
            clearance, please press Continue<br></br>
            <br></br>
          </p>
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
