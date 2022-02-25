import { useState, useEffect } from 'react';
import styles from './SelectVaccineComponent.module.css';
import svText from './selvaccine.json';

const SelectVaccineComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  pfizerSelected,
  updateAnswerData,
  isSpanish,
  isImmunocomp,
  isBooster,
  isOver65,
  setJJApproved,
  isJassenapproved,
  is1217,
  isThirdDose
}) => {
  const [isModerna, setIsModerna] = useState(false);

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  let SVText = isSpanish ? svText.sp : svText.en;

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
            <p className="banner">{SVText[1]}</p>
            {isModerna && (
              <p className="error">
                We do not currently offer Moderna primary series doses, please
                check your local community pharmacy or check back here in the
                future
              </p>
            )}
            <br></br>
            <br></br>
            <fieldset>
              <legend>
                {isBooster
                  ? 'What vaccine would you like to receive as a booster?'
                  : `What was your ${
                      isThirdDose ? 'primary series vaccine' : 'Dose 1 Vaccine'
                    } ?`}
              </legend>

              {isOver65 && (
                <>
                  <div className="radio_row_item">
                    <input
                      id="moderna"
                      type="radio"
                      value="No"
                      name="prev_covid"
                      onClick={(e) => {
                        updateAnswerData({ sel_vaccine: 'Moderna' });
                        setIsModerna(true);
                        if (isBooster) {
                          if (isImmunocomp) nextPage(e, 2);
                          else nextPage(e, 5);
                        }
                      }}
                    ></input>
                    <label htmlFor="moderna">Moderna</label>
                  </div>
                  <br></br>
                  <br></br>
                </>
              )}
              <div className="radio_row_item">
                <input
                  id="pfizer"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {
                    updateAnswerData({ sel_vaccine: 'Pfizer' });
                    pfizerSelected(true);
                    setJJApproved(false);
                    if (isImmunocomp) nextPage(e, 2);
                    else nextPage(e, 5);
                  }}
                ></input>
                <label htmlFor="pfizer">Pfizer</label>
              </div>
              <br></br>
              <br></br>
              {isThirdDose && isOver65 && (
                <>
                  <div className="radio_row_item">
                    <input
                      id="janssen"
                      type="radio"
                      value="Yes"
                      name="prev_covid"
                      onClick={(e) => {
                        nextPage(e);
                      }}
                    ></input>
                    <label htmlFor="janssen">Janssen</label>
                  </div>
                </>
              )}
            </fieldset>
          </div>
          <p>
            <b>
              If you are unsure: find your vaccine card, call the place where
              you got vaccinated, or call the YNHHS call center at
              1-833-ASK-YNHH (275-9644) for further assistance.
            </b>
          </p>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default SelectVaccineComponent;
