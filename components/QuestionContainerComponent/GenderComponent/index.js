import { useState, useEffect } from 'react';
import styles from './GenderComponent.module.css';

const GenderComponent = ({ nextPage, isPrevEnabled, isNextEnabled, isDoneEnabled, updateField}) => {
  const [isMale, setIsMale] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
    isNextEnabled(false);
  }, []);

  const choiceSelected = (e,progressVal) => {
    nextPage(e,progressVal);
    // setIsMale(e.target.value);
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
                    updateField('is_male', true);
                    choiceSelected(e,2)
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
                      updateField('is_male', false);
                      choiceSelected(e,1)
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
