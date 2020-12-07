import { useState, useEffect } from 'react';
import styles from './NeedCovidTestComponent.module.css';

const NeedCovidTestComponent = ({ selectPathway }) => {
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
            {/* <p className="error" hidden={!(isCovidPositive === 'Yes')}>
              If you are experiencing symptoms, we recommend contacting your
              medical provider directly or call the YNHHS COVID Call Center at
              1-833-ASK-YNHH for a clinical assessment.
            </p> */}
            <fieldset>
              <legend>Choose a reason you need Occupational Health Clearance to Return to Work:</legend>

              <div className="radio_row_item">
                <input
                  id="prev_covid_yes"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {
                  }}
                ></input>
                <label htmlFor="prev_covid_yes">Had a COVID-Positive result and was out of work</label>
              </div>
              <br></br><br></br>
              <div className="radio_row_item">
                <input
                  id="prev_covid_no"
                  type="radio"
                  value="No"
                  name="prev_covid"
                  onClick={(e) => {
                  }}
                ></input>
                <label htmlFor="prev_covid_no">Had a COVID-Negative result, had symptoms and was out of work</label>
              </div>
              <br></br><br></br>
              <div className="radio_row_item">
                <input
                  id="prev_covid_no"
                  type="radio"
                  value="No"
                  name="prev_covid"
                  onClick={(e) => {
                  }}
                ></input>
                <label htmlFor="prev_covid_no">Did not have a COVID test but had symptoms and was out of work</label>
              </div>
              <br></br><br></br>
              <div className="radio_row_item">
                <input
                  id="prev_covid_no"
                  type="radio"
                  value="No"
                  name="prev_covid"
                  onClick={(e) => {
                  }}
                ></input>
                <label htmlFor="prev_covid_no">Had a High Risk Household Exposure and completed my 14 day Quarantine</label>
              </div>
              <br></br><br></br>
              <div className="radio_row_item">
                <input
                  id="prev_covid_no"
                  type="radio"
                  value="No"
                  name="prev_covid"
                  onClick={(e) => {
                  }}
                ></input>
                <label htmlFor="prev_covid_no">Returned from a High Risk Travel Location</label>
              </div>
              <br></br><br></br>
              <div className="radio_row_item">
                <input
                  id="prev_covid_no"
                  type="radio"
                  value="No"
                  name="prev_covid"
                  onClick={(e) => {
                  }}
                ></input>
                <label htmlFor="prev_covid_no">Personal Illness unrelated to COVID-19 </label>
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
