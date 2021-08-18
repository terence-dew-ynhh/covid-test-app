import { useState, useEffect } from 'react';
import styles from './SelectVaccineComponent.module.css';
import svText from './selvaccine.json';

const SelectVaccineComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  pfizerSelected,
  updateAnswerData,
  isSpanish,
  isImmunocomp
}) => {
  // const [isDiagnosed, setIsDiagnosed] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  let SVText = isSpanish ? svText.sp : svText.en;

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
            <p className="banner">{SVText[1]}</p>
            <br></br>
            <br></br>
            <fieldset>
              <legend>
                What was your Dose 1{isImmunocomp ? '&2' : ''} Vaccine?
              </legend>

              <div className="radio_row_item">
                <input
                  id="prev_covid_no"
                  type="radio"
                  value="No"
                  name="prev_covid"
                  onClick={(e) => {
                    updateAnswerData({ sel_vaccine: 'Moderna' });
                    pfizerSelected(false);
                    if (pfizerSelected == null) nextPage();
                    else nextPage(e, 2);
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
                    updateAnswerData({ sel_vaccine: 'Pfizer' });
                    pfizerSelected(true);
                    if (pfizerSelected == null) nextPage();
                    else nextPage(e, 2);
                  }}
                ></input>
                <label htmlFor="prev_covid_yes">Pfizer</label>
              </div>
            </fieldset>
          </div>
          <p>
            <b>
              If you are unsure: find your vaccine card, call the place where
              you get vaccinated, or call the call center at 1-833-ASK-YNHH
              (275-9644)
            </b>
          </p>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default SelectVaccineComponent;
