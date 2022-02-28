import { useState, useEffect } from 'react';
import styles from './TestedPositiveComponent.module.css';
import tpText from './testedpositive.json';

const TestedPositiveComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateAnswerData,
  schedulePush,
  isSpanish,
  isPediatric,
  is1217
}) => {
  const [isDiagnosed, setIsDiagnosed] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  let TPText = isSpanish ? tpText.sp : tpText.en;

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
            <p className="error" hidden={!isDiagnosed}>
              {TPText[2]}
            </p>

            <fieldset>
              <legend>
              {isPediatric|| is1217 ? "Has your child":"Have you"} tested positive for COVID-19 in the last 10 days?
                <br></br>
                <br></br>
                <b>Before getting vaccinated, {isPediatric|| is1217 ? "your child":"you"} must wait until resolution of covid 19 symptoms and completion of a 10 day isolation period (20 days if you are immunocompromised or had severe symptoms).</b>
              </legend>

              <div className="radio_row_item">
                <input
                  id="prev_covid_yes"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {
                    setIsDiagnosed(true);
                  }}
                ></input>
                <label htmlFor="prev_covid_yes">{TPText[3]}</label>
                <div className="radio_row_item">
                  <input
                    id="prev_covid_no"
                    type="radio"
                    value="No"
                    name="prev_covid"
                    onClick={(e) => {
                      updateAnswerData({ tested_pos_4_weeks: e.target.value });
                      nextPage(e);
                    }}
                  ></input>
                  <label htmlFor="prev_covid_no">{TPText[4]}</label>
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

export default TestedPositiveComponent;
