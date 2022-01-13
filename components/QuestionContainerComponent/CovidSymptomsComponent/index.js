import { useState, useEffect } from 'react';
import styles from './CovidSymptomsComponent.module.css';
import csText from './covidsymptoms.json';

const CovidSymptomsComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  isSpanish,
  isPediatric,
  is1217
}) => {
  const [isDiagnosed, setIsDiagnosed] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  let CSText = isSpanish ? csText.sp : csText.en;

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
            <p className="error" hidden={!(isDiagnosed === 'Yes')}>
              {CSText[1]}
            </p>
            <fieldset>
              <legend>{isPediatric|| is1217 ? "Does your child":"Do you"}  {CSText[0]}</legend>
              <div className="radio_row_item">
                <input
                  id="prev_covid_yes"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {
                    setIsDiagnosed('Yes');
                  }}
                ></input>
                <label htmlFor="prev_covid_yes">{CSText[2]}</label>
                <div className="radio_row_item">
                  <input
                    id="prev_covid_no"
                    type="radio"
                    value="No"
                    name="prev_covid"
                    onClick={(e) => {
                      nextPage(e);
                    }}
                  ></input>
                  <label htmlFor="prev_covid_no">{CSText[3]}</label>
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

export default CovidSymptomsComponent;
