import { useState, useEffect } from 'react';
import styles from './SympImprovingOrMildComponent.module.css';

const SympImprovingOrMildComponent = ({
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
            <p className="error" hidden={!(isCovidPositive === 'Yes')}>
              You are NOT eligible to return to work. Your symptoms must be mild
              and improving for at least 24 hours in order to return to work.
              Please continue to self-isolate at home. Your out of work status
              will be extended for another 48 hours.
              <br></br>
              <br></br>
              If your symptoms are persistent or worsening, please call your
              Primary Care Provider or visit an Urgent Care. You may also
              contact the OCC-Health Call Center at 203-688-1700 (select a
              language and then option # 2 for employee health).”
            </p>
            <p className="error" hidden={!(isCovidPositive === 'No')}>
              Occupational Health will review your responses. If approved, a
              return to work letter will be sent to you ONLY via My-Chart. You
              may share the letter with your manager if requested.
              <br></br>
              <br></br>
              Your manager will be able to see your updated return to work
              clearance date in ESS.
            </p>
            <fieldset>
              <legend>
                Are your symptoms Mild and Improving OR have they returned to
                your normal baseline AND do you feel well enough to return to
                work?
              </legend>

              <div className="radio_row_item">
                <input
                  id="prev_covid_yes"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {
                    setIsCovidPositive(e.target.value);
                    isDoneEnabled(false);
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

export default SympImprovingOrMildComponent;
