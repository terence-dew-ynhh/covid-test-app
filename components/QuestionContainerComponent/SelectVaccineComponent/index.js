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
  isBoosterDose,
  isSecondDose
}) => {
  const [isModerna, setIsModerna] = useState(false);

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  // const choiceSelected = (e) => {
  //   if (e.target.value === 'Yes') schedulePush(true);
  //   else nextPage(e.target.value);
  //   setIsDiagnosed(e.target.value);
  // };

  let SVText = isSpanish ? svText.sp : svText.en;

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
            <p className="banner">{SVText[1]}</p>
            {isModerna  && <p className='error'>We will only be offering Pfzier only at this clinic</p>}
            <br></br>
            <br></br>
            <fieldset>
              {isSecondDose && <legend>{SVText[0]}</legend>}
              {isBoosterDose && <legend>{SVText[2]}</legend>}


              <div className="radio_row_item">
                <input
                  id="prev_covid_no"
                  type="radio"
                  value="No"
                  name="prev_covid"
                  onClick={(e) => {
                    updateAnswerData({ sel_vaccine: 'Moderna' });
                    pfizerSelected(false);
                    if(isBoosterDose) setIsModerna(true)
                    else nextPage(e);
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
