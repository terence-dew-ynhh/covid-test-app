import { useState } from 'react';
import styles from './PreviousSymptomsComponent.module.css'

const PreviousSymptoms = ({isNextEnabled, isPrevEnabled}) => {

    const [isCovidPositive, setIsCovidPositive] = useState('');


  return (
    <>
      <div className="radio_grp">
      <div className={styles.question_row_item}>
                <div className={styles.question_row_item_sub}>
                  <fieldset>
                    <legend>
                      Have you previously tested Positive for COVID?:
                    </legend>

                    <div className="radio_row_item">
                      <input
                        id="prev_covid_yes"
                        type="radio"
                        value="Yes"
                        name="prev_covid"
                        onClick={(e) => {
                          isNextEnabled(false);
                          setIsCovidPositive(e.target.value);
                        }}
                      ></input>
                      <label htmlFor="prev_covid_yes">Yes</label>
                      <div className="radio_row_item">
                        <input
                          id="prev_covid_no"
                          type="radio"
                          value="No"
                          name="prev_covid"
                          onClick={(e) => {
                            isNextEnabled(true);
                            setIsCovidPositive(e.target.value);
                          }}
                        ></input>
                        <label htmlFor="prev_covid_no">No</label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <p className="error" hidden={!(isCovidPositive === "Yes")}>
                  Those that have previously tested positive are currently not
                  eligible for COVID-19 screening.
                </p>
              </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export default PreviousSymptoms;