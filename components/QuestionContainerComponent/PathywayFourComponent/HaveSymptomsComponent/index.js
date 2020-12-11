import { useState, useEffect } from 'react';
import styles from './HaveSymptomsComponent.module.css';

const HaveSymptomsComponent = ({
  isPrevEnabled,
  isDoneEnabled,
  selectPathway,
  pushTocontactSubmission
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
              Occupational Health will review your responses. If approved, a
              return to work letter will be sent to you ONLY via My-Chart. You
              may share the letter with your manager if requested. 
              <br></br><br></br>
              Your manager
              will be able to see your updated return to work clearance date in
              ESS.
            </p>
            <fieldset>
              <legend>Do you currently have any symptoms?:</legend>

              <div className="radio_row_item">
                <input
                  id="prev_covid_yes"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {
                    selectPathway(2);
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
                    isDoneEnabled(true);
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

export default HaveSymptomsComponent;
