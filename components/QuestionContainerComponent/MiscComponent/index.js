import { useState, useEffect } from 'react';
import styles from './MiscComponent.module.css';
import mText from './miscclonal.json';

const MiscComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateAnswerData,
  isSpanish,
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
              <legend>In the past 90 days,  {isPediatric|| is1217 ? 'Has your child' : 'Have you'} been diagnosed with multisystem inflammatory syndrome in children also known as MIS-C and are they still recovering from the diagnosis?</legend>
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
                <label htmlFor="prev_covid_na">{MText[2]} {isPediatric || is1217 ? "":"or MIS-A"}</label>
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
                <label htmlFor="prev_covid_yes">
                  No, {isPediatric|| is1217 ? 'my child has' : 'I have'} fully recovered
                  from MIS-C more than 90 days ago
                </label>
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
                <label htmlFor="prev_covid_no">
                  Yes, {isPediatric || is1217 ? 'my child has' : 'I have'} been diagnosed
                  with MIS-C in the past 90 days and is still symptomatic from
                  this diagnosis
                </label>
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
