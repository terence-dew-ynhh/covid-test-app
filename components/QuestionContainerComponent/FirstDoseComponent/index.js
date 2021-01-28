import { useState, useEffect } from 'react';
import styles from './FirstDoseComponent.module.css';
import fdText from './firstdose.json';

                      
const FirstDoseComponent = ({ nextPage, isPrevEnabled, isDoneEnabled, updateAnswerData, isSpanish }) => {
  const [isDiagnosed, setIsDiagnosed] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(false);
  }, []);

  let FDText = isSpanish ? fdText.sp : fdText.en


  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>

            <fieldset>
              <legend>{FDText[0]}</legend>

              <div className="radio_row_item">
                <input
                  id="prev_covid_yes"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={ 
                    (e) =>{
                      updateAnswerData({first_dose: e.target.value});
                      nextPage(e);
                    }
                  }
                ></input>
                <label htmlFor="prev_covid_yes">{FDText[1]}</label>
                <div className="radio_row_item">
                  <input
                    id="prev_covid_no"
                    type="radio"
                    value="No"
                    name="prev_covid"
                    onClick={
                      (e) =>{
                        updateAnswerData({first_dose: e.target.value});
                        nextPage(e,7)
                      }
                    }
                  ></input>
                  <label htmlFor="prev_covid_no">{FDText[2]}</label>
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
