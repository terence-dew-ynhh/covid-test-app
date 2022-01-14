import { useState, useEffect } from 'react';
import styles from './FirstDoseComponent.module.css';
import fdText from './firstdose.json';

const FirstDoseComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateAnswerData,
  isSpanish,
  isOver18,
  setSecondDose,
  setBoosterDose,
}) => {
  // const [isDiagnosed, setIsDiagnosed] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
    setBoosterDose(false);
    setSecondDose(false)
  }, []);

  let FDText = isSpanish ? fdText.sp : fdText.en;

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
            <fieldset>
              <legend>{FDText[0]}</legend>

              <div className="radio_row_item">
                <input
                  id="first"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {
                    updateAnswerData({ first_dose: e.target.value });
                    nextPage(e,2);
                  }}
                ></input>
                <label htmlFor="first">{FDText[1]}</label>
                <br></br>
                <br></br>
                <div className="radio_row_item">
                  <input
                    id="second"
                    type="radio"
                    value="No"
                    name="prev_covid"
                    onClick={(e) => {
                      updateAnswerData({ first_dose: e.target.value });
                      setSecondDose(true);
                      if(isOver18)
                      nextPage();
                      else
                      nextPage(e, 2);
                    }}
                  ></input>
                  <label htmlFor="second">{FDText[2]}</label>
                </div>
                <br></br>
                <br></br>
                <div className="radio_row_item">
                  <input
                    id="booster"
                    type="radio"
                    value="No"
                    name="prev_covid"
                    onClick={(e) => {
                      updateAnswerData({ first_dose: e.target.value });
                      setBoosterDose(true)
                      if(isOver18)
                      nextPage();
                      else
                      nextPage(e);
                    }}
                  ></input>
                  <label htmlFor="booster">{FDText[3]}</label>
                </div>
              </div>
            </fieldset>
            <br></br>
            <br></br>
            <b  className="redText"> Note - We will be offering Pfzier only at this clinic</b>
            <br></br>
            <br></br>
            <b className="redText">If you are scheduling your initial first dose of the Vaccine, your second dose appointment will be made for you at the Vaccination clinic at the time of your appointment.  </b>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default FirstDoseComponent;
