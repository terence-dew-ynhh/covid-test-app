import { useState, useEffect } from 'react';
import styles from './FactSheetComponent.module.css';

const FactSheetComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateField,
  schedulePush
}) => {
  const [isDiagnosed, setIsDiagnosed] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  const choiceSelected = (e) => {
    if (e.target.value === 'Yes') schedulePush(true);
    else nextPage(e.target.value);
    setIsDiagnosed(e.target.value);
  };

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
            <p className="error" hidden={!(isDiagnosed === 'Yes')}>
              Follow instructions below, or contact your provider's office to
              schedule.
              <br></br>
              <br></br>
              Thank you, you may close the page at this time.
            </p>
            <p className="error" hidden={!(isDiagnosed === 'No')}>
              Follow instructions below, or contact your provider's office to
              schedule.
              <br></br>
              <br></br>
              You have declined to shcedule a Covid-19 Vaccine at this time. You may close this tab.
            </p>
            <fieldset>
              <legend>
                Have you read the Emergency Use Authorization Fact Sheet and
                consent to receiving the vaccination for Covid-19?
              </legend>
              <div className="radio_row_item">
                <input
                  id="prev_covid_agree"
                  type="radio"
                  name="prev_covid"
                  onClick={(e) => {
                    nextPage(e);
                  }}
                ></input>
                <label htmlFor="prev_covid_agree">Agree</label>
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
                    nextPage(e,4)
                  }}
                ></input>
                <label htmlFor="prev_covid_yes">
                  Received/Will Receive Vaccine Elsewhere
                </label>
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
                    setIsDiagnosed(e.target.value);
                  }}
                ></input>
                <label htmlFor="prev_covid_no">Don't Agree</label>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default FactSheetComponent;
