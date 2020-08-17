import { useState, useEffect } from 'react';
import styles from './PregnantComponent.module.css';

const PregnantComponent = ({ nextPage, isPrevEnabled, isDoneEnabled }) => {
  const [isPregnant, setIsPregnant] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  const choiceSelected = (e) => {
    nextPage(e);
    setIsPregnant(e.target.value);
    // updateField('is_pregnant', isPregnant);
  }


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
              <legend>Are you pregnant or breastfeeding?:</legend>

              <div className="radio_row_item">
                <input
                  id="prev_covid_yes"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={ 
                    choiceSelected
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
                      choiceSelected
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

export default PregnantComponent;
