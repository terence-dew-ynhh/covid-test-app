import { useState, useEffect } from 'react';
import styles from './IsEmployeeComponent.module.css';

const IsEmployeeComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateAnswerData,
  updateHeader
}) => {

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>

          <fieldset>
              <legend>
              What kind of COVID19 vaccination invite do you have?
              </legend>
              <div className="radio_row_item">
                <input
                  id="prev_covid_yes"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {
                    updateAnswerData({ is_employee: e.target.value });
                    nextPage(e, 2);
                  }}
                ></input>
                <label htmlFor="prev_covid_yes">Organizational</label>
                <div className="radio_row_item">
                  <input
                    id="prev_covid_no"
                    type="radio"
                    value="No"
                    name="prev_covid"
                    onClick={(e) => {
                      updateAnswerData({ is_employee: e.target.value });
                      updateHeader(true);
                      nextPage(e);
                    }}
                  ></input>
                  <label htmlFor="prev_covid_no">Individual</label>
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

export default IsEmployeeComponent;
