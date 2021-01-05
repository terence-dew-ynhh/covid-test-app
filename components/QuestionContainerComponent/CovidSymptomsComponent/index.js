import { useState, useEffect } from 'react';
import styles from './CovidSymptomsComponent.module.css';

const CovidSymptomsComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateField,
  schedulePush
}) => {
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
            Those that have previously tested positive are currently not
            eligible for COVID-19 screening.
          </p>
            <fieldset>
              <legend>
                Do you have any of the following Covid-19 symptoms? Fever, nasal
                congestion, new loss of taste or smell, runny nose, sore throat,
                conjunctivitis ("red eye"), shortness of breath, new headaches, body aches, nausea/vomiting, diarrhea, or severe fatigue:
              </legend>
              <div className="radio_row_item">
                <input
                  id="prev_covid_yes"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => { setIsDiagnosed('Yes')}}
                ></input>
                <label htmlFor="prev_covid_yes">Yes</label>
                <div className="radio_row_item">
                  <input
                    id="prev_covid_no"
                    type="radio"
                    value="No"
                    name="prev_covid"
                    onClick={(e) => {
                      nextPage(e);
                    }}
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

export default CovidSymptomsComponent;
