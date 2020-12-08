import { useState, useEffect } from 'react';
import styles from './ReturnFromHighRiskComponent.module.css';

const ReturnFromHighRiskComponent = ({
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
            <fieldset>
              <legend>
                -Per the CT Executive Order, returning from a high risk travel
                location requires you to remain off work until you have 1 (one)
                negative baseline PCR test (72 hour prior to return or after the
                return). <br></br> -If your baseline PCR test is negative AND you
                are asymptomatic, you may return to work as scheduled. <br></br>{' '}
                -You do not require clearance from Occupational Health.
                <br></br><br></br>
                Do you still need a baseline PCR test after coming back from high risk travel?
              </legend>

              <div className="radio_row_item">
                <input
                  id="prev_covid_yes"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {
                    setIsCovidPositive(e.target.value);
                  }}
                ></input>
                <label htmlFor="prev_covid_yes">Yes</label>
              </div>           
            </fieldset>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default ReturnFromHighRiskComponent;
