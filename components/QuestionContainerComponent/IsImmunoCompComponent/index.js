import { useState, useEffect } from 'react';
import styles from './IsImmunoCompComponent.module.css';
import qText from './isimmunocomp.json';

const IsImmunoCompComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateAnswerData,
  schedulePush,
  isSpanish,
  isOver18,
  isPediatric,
  is1217,
  setImmunocompromised,
  setBooster
}) => {
  const [isDiagnosed, setIsDiagnosed] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  let QText = isSpanish ? qText.sp : qText.en;

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
            <fieldset>
              <legend>{isPediatric|| is1217 ? "Is your child currently":"Are you"} immunocompromised and {isPediatric|| is1217 ? "has your child":"have you"} completed {isPediatric|| is1217 ? "their":"your"} second dose at least 28 days ago?</legend>
              <div className="radio_row_item">
                <input
                  id="prev_covid_yes"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {
                    updateAnswerData({ first_dose: e.target.value });
                    setBooster(false);
                    setImmunocompromised(true);
                    if(isPediatric)nextPage(e, 3)
                    else nextPage(e, 4)

                  }}
                ></input>
                <label htmlFor="prev_covid_yes">{QText[3]}</label>
                <div className="radio_row_item">
                  <input
                    id="prev_covid_no"
                    type="radio"
                    value="No"
                    name="prev_covid"
                    onClick={(e) => {
                      nextPage(e)
                    }}
                  ></input>
                  <label htmlFor="prev_covid_no">{QText[4]}</label>
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

export default IsImmunoCompComponent;
