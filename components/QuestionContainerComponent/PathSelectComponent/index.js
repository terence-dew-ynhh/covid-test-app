import { useState, useEffect } from 'react';
import styles from './PathSelectComponent.module.css';

const PathSelectComponent = ({ selectPathway, schedulePush }) => {
  const [isCovidPositive, setIsCovidPositive] = useState('');

  useEffect(() => {
    // isDoneEnabled(false);
    // isPrevEnabled(true);
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
                  id="had_pos_res"
                  type="radio"
                  value="1"
                  name="prev_covid"
                  onClick={(e) => {
                    selectPathway(e.target.value);
                  }}
                ></input>
                <label htmlFor="had_pos_res">Had a COVID-Positive result and was out of work</label>
              </div>
              <br></br><br></br><br></br>
              <div className="radio_row_item">
                <input
                  id="had_neg_res"
                  type="radio"
                  value="2"
                  name="prev_covid"
                  onClick={(e) => {
                    selectPathway(e.target.value);
                  }}
                ></input>
                <label htmlFor="had_neg_res">Had a COVID-Negative result, had symptoms and was out of work</label>
              </div>
              <br></br><br></br><br></br>
              <div className="radio_row_item">
                <input
                  id="no_covid_test"
                  type="radio"
                  value="3"
                  name="prev_covid"
                  onClick={(e) => {
                    selectPathway(e.target.value);
                  }}
                ></input>
                <label htmlFor="no_covid_test">Did not have a COVID test but had symptoms and was out of work</label>
              </div>
              <br></br><br></br><br></br>
              <div className="radio_row_item">
                <input
                  id="high_risk_expo"
                  type="radio"
                  value="4"
                  name="prev_covid"
                  onClick={(e) => {
                    selectPathway(e.target.value);
                  }}
                ></input>
                <label htmlFor="high_risk_expo">Had a High Risk Household Exposure and completed my Quarantine</label>
              </div>
              <br></br><br></br><br></br>
              <div className="radio_row_item">
                <input
                  id="high_risk_travel"
                  type="radio"
                  value="5"
                  name="prev_covid"
                  onClick={(e) => {
                    selectPathway(e.target.value);
                  }}
                ></input>
                <label htmlFor="high_risk_travel">Returned from a High Risk Travel Location</label>
              </div>
              <br></br><br></br><br></br>
              <div className="radio_row_item">
                <input
                  id="personal_illness"
                  type="radio"
                  value="6"
                  name="prev_covid"
                  onClick={(e) => {
                    schedulePush('personalillness');
                  }}
                ></input>
                <label htmlFor="personal_illness">Personal Illness unrelated to COVID-19 </label>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default PathSelectComponent;
