import { useState, useEffect } from 'react';
import styles from './MiscComponent.module.css';
import mText from './miscclonal.json';

const MiscComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateAnswerData,
  isSpanish
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
              <legend>{MText[0]}</legend>
              <div className="radio_row_item">
                <input
                  id="prev_covid_na"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {
                    updateAnswerData({ miscivig: e.target.value });
                    nextPage(e);
                  }}
                ></input>
                <label htmlFor="prev_covid_na">{MText[2]}</label>
              </div>
              <br></br>
              <br></br>
              <div className="radio_row_item">
                <input
                  id="prev_covid_yes"
                  type="radio"
                  value="No"
                  name="prev_covid"
                  onClick={(e) => {
                    updateAnswerData({ miscivig: e.target.value });
                    nextPage(e);
                  }}
                ></input>
                <label htmlFor="prev_covid_yes">{MText[3]}</label>
              </div>
              <br></br>
              <br></br>
              <div className="radio_row_item">
                <input
                  id="prev_covid_no"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {
                    setIsDiagnosed(e.target.value);
                  }}
                ></input>
                <label htmlFor="prev_covid_no">{MText[4]}</label>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default MiscComponent;