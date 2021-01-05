import { useState, useEffect } from 'react';
import styles from './SelectVaccineComponent.module.css';

const SelectVaccineComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateField,
  schedulePush,
  pfizerSelected
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
            <fieldset>
              <legend>Which Vaccine Did you Receive?</legend>
              <div className="radio_row_item">
                <input
                  id="prev_covid_yes"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {
                    pfizerSelected(true);
                    nextPage(e);
                  }}
                ></input>
                <label htmlFor="prev_covid_yes">Pfizer</label>
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
                    pfizerSelected(false);
                    nextPage(e);
                  }}
                ></input>
                <label htmlFor="prev_covid_no">Moderna</label>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default SelectVaccineComponent;
