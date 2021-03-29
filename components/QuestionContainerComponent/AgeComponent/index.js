import { useState, useEffect } from 'react';
import styles from './AgeComponent.module.css';

const AgeComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateAnswerData
}) => {
  const [isDiagnosed, setIsDiagnosed] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
            <p className="banner">
              The following questions should be answered on behalf of the
              individual being scheduled for vaccination.
            </p>
            <br></br>
            <br></br>
            <fieldset>
              <legend>I am currently scheduling for:</legend>
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
                  Someone who is currently 18 years of age or older
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
                    Someone who is 16 or 17 years old
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
