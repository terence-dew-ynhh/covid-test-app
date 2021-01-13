import { useState, useEffect } from 'react';
import styles from './TestedPositiveComponent.module.css';

const TestedPositiveComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateAnswerData,
  schedulePush
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
            <p className="error" hidden={!isDiagnosed}>
              When this time has passed, please return to this page to schedule
              your vaccine appointment
            </p>

            <fieldset>
              <legend>
                Have you tested positive for Covid-19 in the last 4 weeks?:
                <br></br>
                <br></br>
                <b>
                  You must wait for 4 weeks or more after your initial positive
                  COVID-19 test before being vaccinated
                </b>
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
                <label htmlFor="prev_covid_yes">Yes</label>
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
                  <label htmlFor="prev_covid_no">No</label>
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
