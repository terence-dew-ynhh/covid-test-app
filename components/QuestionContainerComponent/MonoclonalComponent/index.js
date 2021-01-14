import { useState, useEffect } from 'react';
import styles from './MonoclonalComponent.module.css';

const MonoclonalComponent = ({ nextPage, isPrevEnabled, isDoneEnabled, updateAnswerData }) => {
  const [isDiagnosed, setIsDiagnosed] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);



  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
          <p className="error" hidden={!(isDiagnosed === 'Yes')}>
              CDC recommends vaccination should be deferred for at least 90 days after monoclonal antibody treatment.
            </p>
            <fieldset>
              <legend>Have you received monoclonal antibodies as part of COVID-19 treatment in the last 90 days?</legend>
              <div className="radio_row_item">
                <input
                  id="prev_covid_yes"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={ 
                    (e) =>{
                      setIsDiagnosed(e.target.value);
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
                        updateAnswerData({monoclonal: e.target.value});
                        nextPage(e);
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

export default MonoclonalComponent;
