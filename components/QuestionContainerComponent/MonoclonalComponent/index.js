import { useState, useEffect } from 'react';
import styles from './MonoclonalComponent.module.css';
import mText from './monoclonal.json';

const MonoclonalComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateAnswerData,
  isSpanish,
  isOver18,
  isPediatric,
  is1217
}) => {
  const [isDiagnosed, setIsDiagnosed] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  let MText = isSpanish ? mText.sp : mText.en;

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
            <p className="error" hidden={!(isDiagnosed === 'Yes')}>
              {MText[1]}
            </p>
            <fieldset>
              <legend>{isPediatric || is1217 ? "Has your child":"Have you"} {MText[0]}</legend>
              <div className="radio_row_item">
                <input
                  id="prev_covid_yes"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {
                    setIsDiagnosed(e.target.value);
                  }}
                ></input>
                <label htmlFor="prev_covid_yes">{MText[2]}</label>
                <div className="radio_row_item">
                  <input
                    id="prev_covid_no"
                    type="radio"
                    value="No"
                    name="prev_covid"
                    onClick={(e) => {
                      updateAnswerData({ monoclonal: e.target.value });
                      // if(isOver18)
                      // nextPage(e,2);
                      // else
                      nextPage(e)
                    }}
                  ></input>
                  <label htmlFor="prev_covid_no">{MText[3]}</label>
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

export default MonoclonalComponent;
