import { useState, useEffect } from 'react';
import styles from './PreviousSymptomsComponent.module.css';

const PreviousSymptoms = ({ nextPage, isPrevEnabled, isDoneEnabled }) => {
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
              Please visit <b>https://ocucovidtesting.ynhhs.org</b> 
              <br></br><br></br>
              This site is
              available for employees who have symptoms that are suggestive of
              COVID-19 and want to tested, and also before return to work for
              employees who have travelled to areas with high rates of
              infection. Note: Out-of-state or international travel is strongly
              discouraged, but testing is available if travel cannot be avoided.
            </p>
            <fieldset>
              <legend>Why do you need COVID Testing?:</legend>

              <div className="radio_row_item">
                <input
                  id="prev_covid_asymp"
                  type="radio"
                  value="No"
                  name="prev_covid"
                  onClick={(e) => {
                    nextPage();
                  }}
                ></input>
                <label htmlFor="prev_covid_yes">
                  Asymptomatic Healthcare Testing
                </label>
              </div>
              <br></br>
              <div className="radio_row_item">
                <input
                  id="prev_covid_symp"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {
                    setIsCovidPositive(e.target.value);
                  }}
                ></input>
                <label htmlFor="prev_covid_no">Having Symptoms?</label>
              </div>
              <br></br>
              <div className="radio_row_item">
                <input
                  id="prev_covid_travel"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {                    
                    setIsCovidPositive(e.target.value);
                  }}
                ></input>
                <label htmlFor="prev_covid_no">
                  Return from Travel to a High Risk Area?
                </label>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default PreviousSymptoms;
