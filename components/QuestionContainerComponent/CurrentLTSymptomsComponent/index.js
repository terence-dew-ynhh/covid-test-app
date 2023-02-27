import { useState, useEffect } from 'react';
import styles from './CurrentLTSymptomsComponent.module.css';

const CurrentLTSymptoms = ({ nextPage, isPrevEnabled, isDoneEnabled }) => {
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
            <p className="error">
            If you are experiencing any respiratory or COVID-like symptoms, a Negative COVID-19 PCR test result is required within 48 hours prior to your Easy Care visit.
            </p>
            <p className="error" hidden={!(isCovidPositive === 'Yes')}>
            If you are experiencing any of these COVID related symptoms, for the health and safety of staff and employees, a negative PCR test is required 48 hours before coming to Easy Care. Employees can schedule a COVID test by visiting <a href='https://ocucovidtesting.ynhhs.org/'>https://ocucovidtesting.ynhhs.org/</a> 
            </p>
            <fieldset>
              <legend>
                Are you currently experiencing any of the following
                life-threatening or emergency conditions?
              </legend>
              <b>- Chest pain</b>
              <br></br>
              <br></br>
              <b>- Difficulty breathing</b>
              <br></br>
              <br></br>
              <b>- Deep cuts</b>
              <br></br>
              <br></br>
              <b>- Head injuries</b>
              <br></br>
              <br></br>
              <b>- Confusion or speech problems</b>
              <br></br>
              <br></br>
              <b>- Major burns</b>
              <br></br>
              <br></br>
              <b>- Sudden blindness</b>
              <br></br>
              <br></br>
              <b>- Partial or full paralysis</b>
              <br></br>
              <br></br>
              <br></br>

              <div className="radio_row_item">
                <input
                  id="prev_covid_yes"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {
                    setIsCovidPositive(e.target.value);
                  }}
                ></input>
                <label htmlFor="prev_covid_yes">Yes</label>
                <div className="radio_row_item">
                  <input
                    id="prev_covid_no"
                    type="radio"
                    value="No"
                    name="prev_covid"
                    onClick={(e) => {
                      nextPage();
                      setIsCovidPositive(e.target.value);
                    }}
                  ></input>
                  <label htmlFor="prev_covid_no">No</label>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default CurrentLTSymptoms;
