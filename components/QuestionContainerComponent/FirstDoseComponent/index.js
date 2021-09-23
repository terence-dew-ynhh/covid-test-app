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
  isImmunocomp,
  setBooster
}) => {
  // const [isDiagnosed, setIsDiagnosed] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
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
                  id="first_dose"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {
                    updateAnswerData({ first_dose: e.target.value });
                    nextPage(e,5);

                  }}
                ></input>
                <label htmlFor="first_dose">{FDText[1]}</label>
                </div>
                <br></br>
                <br></br>
                <div className="radio_row_item">
                  <input
                    id="second_dose"
                    type="radio"
                    value="No"
                    name="prev_covid"
                    onClick={(e) => {
                      updateAnswerData({ first_dose: e.target.value });
                      nextPage(e,3);
                    }}
                  ></input>
                  <label htmlFor="second_dose">{FDText[2]}</label>
                  </div>
                  <br></br>
                  <br></br>
                <div className="radio_row_item">
                  <input
                    id="third_dose"
                    type="radio"
                    value="No"
                    name="prev_covid"
                    onClick={(e) => {
                      updateAnswerData({ first_dose: e.target.value });
                      setBooster(false);
                      nextPage(e,2);
                    }}
                  ></input>
                  <label htmlFor="third_dose">{FDText[3]}</label></div>
                  <br></br>
                  <br></br>
                <div className="radio_row_item">
                  <input
                    id="booster_dose"
                    type="radio"
                    value="No"
                    name="prev_covid"
                    onClick={(e) => {
                      updateAnswerData({ first_dose: e.target.value });
                      setBooster(true);
                      nextPage(e);
                    }}
                  ></input>
                  <label htmlFor="booster_dose">{FDText[4]}</label></div>
            </fieldset>
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
