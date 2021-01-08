import { useState, useEffect } from 'react';
import styles from './FirstDoseComponent.module.css';

const FirstDoseComponent = ({ nextPage, isPrevEnabled, isDoneEnabled, updateField, schedulePush }) => {
  const [isDiagnosed, setIsDiagnosed] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(false);
  }, []);

  const choiceSelected = (e) => {
    if(e.target.value === 'Yes') schedulePush(true);
    else nextPage(e.target.value); 
    setIsDiagnosed(e.target.value);
    
  }

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>

            <fieldset>
              <legend>Are you scheduling for your first dose of COVID19 vaccine?:</legend>

              <div className="radio_row_item">
                <input
                  id="prev_covid_yes"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={ 
                    (e) =>{
                      nextPage(e);
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
                        nextPage(e,6)
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

export default FirstDoseComponent;
