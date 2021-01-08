import { useState, useEffect } from 'react';
import styles from './COVIDPosResultSympComponent.module.css';

const COVIDPosResultSympComponent = ({
  isPrevEnabled,
  isDoneEnabled,
  selectPathway
}) => {
  const [isCovidPositive, setIsCovidPositive] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
            <p className="disclaimer">
              You chose this option
              because you had a Positive COVID-19 test and you were out of work
              due to a home isolation requirement.
            </p>
            <br></br>
            <fieldset>
              <legend>
                If you had symptoms associated with COVID-19, has it been at
                least 14 days since the start of your symptoms? (at least 20
                days if you are immunocompromised)
                <br></br>
                <br></br>
                <b>OR</b>
                <br></br>
                <br></br>
                If you did not have symptoms, has it been at least 14 days
                since your COVID-19 positive test (the day you were swabbed)?
                (at least 20 days if you are immunocompromised)
              </legend>

              <div className="radio_row_item">
                <input
                  id="prev_covid_yes"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {
                    selectPathway(6);
                  }}
                ></input>
                <label htmlFor="prev_covid_yes">Yes</label>
              </div>
              <br></br>
              <br></br>
              <div className="radio_row_item">
                <input
                  id="prev_covid_no"
                  type="radio"
                  value="No"
                  name="prev_covid"
                  onClick={(e) => {
                    setIsCovidPositive(e.target.value)
                  }}
                ></input>
                <label htmlFor="prev_covid_no">No</label>
              </div>
            </fieldset>
            <p className="error" hidden={!(isCovidPositive === 'No')}>
              The required home isolation period is 14 days (20 days if
              immunocompromised) for anyone who is COVID-19 positive from their
              onset of symptoms (if ever symptomatic) or from their positive
              test result date (if never symptomatic).
            </p>
          </div>
        </div>
      </div>
     
      <style jsx>{``}</style>
    </>
  );
};

export default COVIDPosResultSympComponent;
