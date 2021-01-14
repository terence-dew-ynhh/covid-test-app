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
    isPrevEnabled(false);
  }, []);

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>

          <fieldset>
              <legend>
              Are you getting vaccinated as part of an organization or as an individual?
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
                <label htmlFor="prev_covid_yes">An Organization</label>
                {/* <div className="radio_row_item">
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
                  <label htmlFor="prev_covid_no">As an Individual</label>
                </div> */}
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
