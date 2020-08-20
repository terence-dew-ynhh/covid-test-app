import { useState, useEffect } from 'react';
import styles from './HistoryComponent.module.css';

const HistoryComponent = ({ nextPage, isPrevEnabled, isDoneEnabled, updateField }) => {
  const [hasAdverseReaction, setHasAdverseReaction] = useState('');

  useEffect(() => {
    isPrevEnabled(true);
  }, []);

  const choiceSelected = (e) => {
    // nextPage(e);
    isDoneEnabled(true);
    setHasAdverseReaction(e.target.value);    
  }


  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
            <fieldset>
              <legend>Do you have a history of severe adverse reaction associated with a vaccine?:</legend>

              <div className="radio_row_item">
                <input
                  id="prev_covid_yes"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={ 
                    (e) =>{
                      updateField('adverse_reaction', true);
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
                        updateField('adverse_reaction', false);
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

export default HistoryComponent;
