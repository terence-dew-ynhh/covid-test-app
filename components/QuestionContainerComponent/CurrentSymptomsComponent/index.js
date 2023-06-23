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
            <p className="info">
              If you are experiencing any respiratory or COVID-like symptoms, a Negative COVID-19 PCR or Rapid Antigen Test result is required within 48 hours prior to your Easy Care visit.
            </p>
            <p className="error" hidden={!(isCovidPositive === 'Yes')}>
            Employees can self-schedule a COVID test at a YNHHS Draw station via MyChart scheduling. Or please call the Employee Resource Center with COVID-19 questions and concerns (not scheduling) at 844-543-2147, Option 2, open Monday – Friday 7 am – 4:30 pm.
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
