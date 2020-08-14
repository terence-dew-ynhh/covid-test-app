import { useState, useEffect } from 'react';
import styles from './GenderComponent.module.css';

const GenderComponent = ({ nextPage, isPrevEnabled, isNextEnabled, isDoneEnabled }) => {
  const [isMale, setIsMale] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
    isNextEnabled(false);
  }, []);

  const choiceSelected = (e) => {
    nextPage(e,2);
    setIsMale(e.target.value);
    updateField('is_male', isMale);
  }

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
            <fieldset>
              <legend>What is your gender?:</legend>

              <div className="radio_row_item">
                <input
                  id="prev_covid_yes"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {
                    choiceSelected
                  }}
                ></input>
                <label htmlFor="prev_covid_yes">Male</label>
                <div className="radio_row_item">
                  <input
                    id="prev_covid_no"
                    type="radio"
                    value="No"
                    name="prev_covid"
                    onClick={(e) => {
                      choiceSelected
                    }}
                  ></input>
                  <label htmlFor="prev_covid_no">Female</label>
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

export default GenderComponent;
