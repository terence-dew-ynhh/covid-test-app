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
            
            <h2 color="red">Update on COVID Vaccines</h2>
            <p>At this time all vaccine appointments are full. </p>
            <p> Our scheduling system is being updated as we confirm vaccine availability</p>
            <a href="https://ynhh.co1.qualtrics.com/jfe/form/SV_6rK4bO0F4VaGw3s">Sign up for updates on appointment scheduling</a><br></br><br></br>
            <a href="https://portal.ct.gov/Coronavirus/COVID-19-Vaccinations">Learn about the State of Connecticut Phase 1b Guidelines</a>

          {/* <fieldset>
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
                <br></br>
                <br></br>
                <div className="radio_row_item">
                  <input
                    id="prev_covid_no"
                    type="radio"
                    value="No"
                    name="prev_covid"
                    onClick={(e) => {
                      updateAnswerData({ is_employee: e.target.value });
                      updateHeader(true);
                      nextPage(e, 3);
                    }}
                  ></input>
                  <label htmlFor="prev_covid_no">As an Individual</label>
                </div>
              </div>
            </fieldset> */}
          </div>
        </div>
      </div>
      <style jsx>{`
      h2{
        color:red;
      }
      p{
        color: grey;
      }
      a{
        color: blue;
      }
      `}</style>
    </>
  );
};

export default IsEmployeeComponent;
