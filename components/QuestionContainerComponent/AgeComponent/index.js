import { useState, useEffect } from 'react';
import styles from './AgeComponent.module.css';
import ageText from './agequestion.json';


const AgeComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateAnswerData,
  isSpanish
}) => {
  const [isDiagnosed, setIsDiagnosed] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(false);
  }, []);

  let AGText = isSpanish ? ageText.sp : ageText.en


  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
            <p className="banner">
              {AGText[3]}
            </p>
            <br></br>
            <br></br>
            <fieldset>
              <legend>{AGText[2]}</legend>
              <div className="radio_row_item">
                <input
                  id="prev_covid_yes"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {
                    nextPage();
                  }}
                ></input>
                <label htmlFor="prev_covid_yes">
                {AGText[0]}
                </label>
                <br></br>
                <br></br>
                <div className="radio_row_item">
                  <input
                    id="prev_covid_no"
                    type="radio"
                    value="No"
                    name="prev_covid"
                    onClick={(e) => {
                      window.location.href = 'https://covidvaccine.ynhh.org/'
                    }}
                  ></input>
                  <label htmlFor="prev_covid_no">
                  {AGText[1]}
                  </label>
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

export default AgeComponent;
