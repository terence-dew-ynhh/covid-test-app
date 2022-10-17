import { useState, useEffect } from 'react';
import styles from './PreviousSymptomsComponent.module.css';

const PreviousSymptoms = ({ nextPage, isPrevEnabled, isDoneEnabled, schedulePush }) => {
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
            <p className="error" hidden={!(isCovidPositive == 'Yes')}>
              Sorry, you are not eligible for the Flu shot.
            </p>
            <fieldset>
              <legend>
                Have you had any of the following?
              </legend>
              <legend> - A serious reaction to a flu
                shot</legend>
              <legend> - Guillain-Barré syndrome</legend>
              <legend> - Allergy to chicken eggs or chicken
                egg product</legend>

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
                      schedulePush(true);
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

export default PreviousSymptoms;
