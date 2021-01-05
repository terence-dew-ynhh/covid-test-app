import { useState, useEffect } from 'react';
import styles from './TestedPositiveComponent.module.css';

const TestedPositiveComponent = ({ nextPage, isPrevEnabled, isDoneEnabled, updateField, schedulePush }) => {
  const [isDiagnosed, setIsDiagnosed] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
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
          <p className="error" hidden={!isDiagnosed}>
          COVID Vaccination is recommended after 4 weeks from your intitial positive COVID-19 test
          <br></br><br></br>
          When this time has passed please return to MyChart to schedule your vaccinate appointment. 
            </p>
         
            <fieldset>
              <legend>
                Have you tested positive for Covid-19 in the last 4 weeks?:
                <br></br><br></br>
                <b>You must wait for 4 weeks or more after your initial positive COVID-19 test before being vaccinated</b>
              </legend>
              
              <div className="radio_row_item">
                <input
                  id="prev_covid_yes"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={ 
                    (e) =>{
                     setIsDiagnosed(true) 
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
                        nextPage(e)
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

export default TestedPositiveComponent;
