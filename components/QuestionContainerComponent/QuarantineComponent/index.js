import { useState, useEffect } from 'react';
import styles from './QuarantineComponent.module.css';

const QuarantineComponent = ({ nextPage, isPrevEnabled, isDoneEnabled, updateAnswerData, schedulePush }) => {
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
              You are in quarantine and are not eligible for the vaccination at this time.
              <br></br>
              <br></br>
              Thank you, you may close the page at this time.
            </p>
            <fieldset>
              <legend>Are you in Quarantine for Covid-19 related exposure?:</legend>
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
                        updateAnswerData({quarantined: e.target.value});
                        schedulePush();
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

export default QuarantineComponent;
