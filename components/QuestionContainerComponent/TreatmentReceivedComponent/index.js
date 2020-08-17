import { useState, useEffect } from 'react';
import styles from './TreatmentReceivedComponent.module.css';

const TreatmentReceivedComponent = ({ nextPage, isPrevEnabled, isDoneEnabled, updateField }) => {
  const [istreatmentReceived, setIsTreatmentReceived] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  const choiceSelected = (e) => {
    nextPage(e);
    setIsTreatmentReceived(e.target.value);
    updateField('is_pregnant', isPregnant);
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
              <legend>Do you currently receive any treatment with immunosuppressive therapy, including cytotoxic agents or systemic corticosteroids ?:</legend>

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

export default TreatmentReceivedComponent;
