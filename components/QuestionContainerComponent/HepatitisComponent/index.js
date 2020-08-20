import { useState, useEffect } from 'react';
import styles from './HepatitisComponent.module.css';

const HepatitisComponent = ({ nextPage, isPrevEnabled, isDoneEnabled, updateField }) => {
  const [isDiagnosed, setIsDiagnosed] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  const choiceSelected = (e) => {
    nextPage(e);
    setIsDiagnosed(e.target.value);
    
  }

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
            <fieldset>
              <legend>Have you ever been diagnosed with HIV, hepatitis C virus, hepatitis B virus?:</legend>

              <div className="radio_row_item">
                <input
                  id="prev_covid_yes"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={ 
                    (e) =>{
                      updateField('is_diagnosed', true);
                      choiceSelected(e)
                    }
                  }
                ></input>
                <label htmlFor="prev_covid_yes">Yes</label>
                <div className="radio_row_item">
                  <input
                    id="prev_covid_no"
                    type="radio"
                    value="No"
                    name="prev_covid"
                    onClick={
                      (e) =>{
                        updateField('is_diagnosed', false);
                        choiceSelected(e)
                      }
                    }
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

export default HepatitisComponent;
