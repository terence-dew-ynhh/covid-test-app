import { useState, useEffect } from 'react';
import styles from './QuarantineComponent.module.css';
import qText from './quarantine.json';

const QuarantineComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateAnswerData,
  schedulePush,
  isSpanish
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
            <p className="error" hidden={!(isDiagnosed === 'Yes')}>
              {QText[1]}
              <br></br>
              <br></br>
              {QText[2]}
            </p>
            <fieldset>
              <legend>{QText[0]}</legend>
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
                <label htmlFor="prev_covid_yes">{QText[3]}</label>
                <div className="radio_row_item">
                  <input
                    id="prev_covid_no"
                    type="radio"
                    value="No"
                    name="prev_covid"
                    onClick={(e) => {
                      updateAnswerData({ quarantined: e.target.value });
                      schedulePush();
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

export default QuarantineComponent;
