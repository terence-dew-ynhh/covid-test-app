import { useState, useEffect } from 'react';
import styles from './TestingTypeComponent.module.css';

const TestingTypeComponent = ({ nextPage, isPrevEnabled, isDoneEnabled, setTestingState }) => {
  const [isCovidPositive, setIsCovidPositive] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  const handleSelection = () => {
    isDoneEnabled(true);
  };

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
            {/* <p className="error" hidden={!(isCovidPositive === 'Yes')}>
              Those that have previously tested positive are currently not
              eligible for COVID-19 screening.
            </p> */}
            <fieldset>
              <legend>Please indicate the testing needed:</legend>

              <div className="radio_row_item">
                <input
                  id="prev_covid_asymp"
                  type="radio"
                  value="Asymp"
                  name="prev_covid_a"
                  onClick={(e) => {
                    handleSelection();
                    setTestingState(1)
                  }}
                ></input>
                <label htmlFor="prev_covid_asymp">
                  COVID Only – Asymptomatic{' '}
                </label>
              </div>
              <br></br>
              <br></br>
              <div className="radio_row_item">
                <input
                  id="prev_covid_symp"
                  type="radio"
                  value="Symp"
                  name="prev_covid_a"
                  onClick={(e) => {
                    handleSelection();
                    setTestingState(2)
                  }}
                ></input>
                <label htmlFor="prev_covid_symp">
                  COVID Only – Symptomatic{' '}
                </label>
              </div>
              <br></br>
              <br></br>
              <div className="radio_row_item">
                <input
                  id="prev_covid_sympflu"
                  type="radio"
                  value="SympFlu"
                  name="prev_covid_a"
                  onClick={(e) => {
                    handleSelection();
                    setTestingState(3)
                  }}
                ></input>
                <label htmlFor="prev_covid_sympflu">
                  COVID/Flu – Symptomatic{' '}
                </label>
              </div>
              <br></br>
              <br></br>
            </fieldset>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default TestingTypeComponent;
