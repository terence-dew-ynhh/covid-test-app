import { useState, useEffect } from 'react';
import styles from './SelectVaccineComponent.module.css';

const SelectVaccineComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateField,
  schedulePush,
  pfizerSelected,
  updateAnswerData
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
            <p className="banner">
              Please bring Vaccine card from dose 1 to appointment. Please don’t schedule 2nd dose appointment until you’ve received your 1st dose of vaccine 
            </p>
            <br></br><br></br>
            <fieldset>
              <legend>Which Vaccine Did you Receive?</legend>

              <div className="radio_row_item">
                <input
                  id="prev_covid_no"
                  type="radio"
                  value="No"
                  name="prev_covid"
                  onClick={(e) => {
                    updateAnswerData({sel_vaccine: 'Moderna'});
                    pfizerSelected(false);
                    nextPage(e);
                  }}
                ></input>
                <label htmlFor="prev_covid_no">Moderna</label>
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
                    updateAnswerData({sel_vaccine: 'Pfizer'});
                    pfizerSelected(true);
                    nextPage(e);
                  }}
                ></input>
                <label htmlFor="prev_covid_yes">Pfizer</label>
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
