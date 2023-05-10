import { useState, useEffect } from 'react';
import styles from './CurrentSymptomsComponent.module.css';

const CurrentSymptoms = ({ nextPage, isPrevEnabled, isDoneEnabled }) => {
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
              If you are experiencing any respiratory or COVID-like symptoms, a Negative COVID-19 PCR or Rapid Antigen Test result is required within 48 hours prior to your Easy Care visit.
            </p>
            <p className="error" hidden={!(isCovidPositive === 'Yes')}>
              If you are experiencing any of these COVID related symptoms, for the health and safety of staff and employees, a negative PCR test is required 48 hours before coming to Easy Care. Employees can schedule a COVID test by visiting <a href='https://ocucovidtesting.ynhhs.org/'>https://ocucovidtesting.ynhhs.org/</a>
            </p>
            <fieldset>
              <legend>
                Are you currently experiencing any of the following COVID
                related symptoms?
              </legend>
              <div className={styles.q1_grid}>
                <b>- Trouble Breathing or Shortness of Breath</b>


                <b>- Persistent Pain/Pressure in the Chest</b>


                <b>- Fever</b>


                <b>- Cough</b>


                <b>- Body Aches</b>


                <b>- Profound Fatigue</b>


                <b>- New Headaches</b>


                <b>- Sore throat</b>


                <b>- New loss of taste or smell</b>


                <b>- Sinus Congestion</b>


                <b>- Runny Nose (Rhinorrhea)</b>


                <b>- Pink Eye/Runny Eye (Conjunctivitis)</b>


                <b>- Diarrhea</b>



              </div>


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

export default CurrentSymptoms;
