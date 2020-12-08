import { useState, useEffect } from 'react';
import styles from './COVIDPosResultSympComponent.module.css';

const COVIDPosResultSympComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled
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
            <p className="error" hidden={!(isCovidPositive === 'Yes')}>
              You chose this option because you had a Positive COVID-19 test and
              you were out of work due to a home isolation requirement.
            </p>
            <fieldset>
              <legend>
                If you had symptoms associated with COVID-19, has it been at
                least 10 days since the start of your symptoms? (at least 20
                days if you are immunocompromised)
                <br></br>
                or
                <br></br>
                b. If you did not have symptoms, has it been at least 10 days
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
                    // setIsCovidPositive(e.target.value);
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
                    // nextPage();
                  }}
                ></input>
                <label htmlFor="prev_covid_no">No</label>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default COVIDPosResultSympComponent;
