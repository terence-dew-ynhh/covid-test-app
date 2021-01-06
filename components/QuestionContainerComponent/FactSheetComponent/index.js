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
            <fieldset>
              <legend>
                Have you read the Emergency Use Authorization Fact Sheet and
                consent to receiving the vaccination for Covid-19?
                <a href='https://www.fda.gov/media/144414/download'>Pfizer Vaccination EUA</a>
                <a href='https://www.fda.gov/media/144638/download'>Moderna Vaccination EUA</a>
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
