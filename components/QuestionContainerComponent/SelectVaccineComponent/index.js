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
  isOver18,
  setJJApproved,
  isJassenapproved,
  is1617
}) => {
  const [isModerna, setIsModerna] = useState(true);

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
            {!isModerna && isBooster && (
              <p className="error">
                {isJassenapproved
                  ? 'We plan to offer J&J Boosters at limited sites in December. Please contact us at 1-833-ASK-YNHH (275-9644).'
                  : `At this time, Yale New Haven Health does not currently have any appointments available for primary series vaccinations.`}
              </p>
            )}
            <br></br>
            <br></br>
            <fieldset>
              <legend>
                {isBooster
                  ? 'What vaccine would you like to receive as a booster?'
                  : `What was your Dose 1${isImmunocomp ? '&2' : ''} Vaccine?`}
              </legend>

              {(isBooster && isOver18 && !is1617) && (
                <>
                  <div className="radio_row_item">
                    <input
                      id="prev_covid_no"
                      type="radio"
                      value="No"
                      name="prev_covid"
                      onClick={(e) => {
                        if (isBooster) {
                          nextPage(e);
                        } else {
                          updateAnswerData({ sel_vaccine: 'Moderna' });
                          pfizerSelected(false);
                          setJJApproved(false);
                          nextPage(e, 4);
                        }
                      }}
                    ></input>
                    <label htmlFor="prev_covid_no">Moderna</label>
                  </div>
                  <br></br>
                  <br></br>
                </>
              )}
              <div className="radio_row_item">
                <input
                  id="prev_covid_six"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {
                    updateAnswerData({ sel_vaccine: 'Pfizer' });
                    pfizerSelected(true);
                    setJJApproved(false);
                    // if(is1617) {nextPage(e, 4)}
                    // if (isOver18){setIsModerna(false)}
                    // else nextPage(e, 2);
                    if (isImmunocomp) nextPage(e);
                    else nextPage(e, 4);
                  }}
                ></input>
                <label htmlFor="prev_covid_six">Pfizer</label>
              </div>
              <br></br>
              <br></br>
              {/* {!is1617 && (
                <div className="radio_row_item">
                  <input
                    id="prev_covid_jj"
                    type="radio"
                    value="JJ"
                    name="prev_covid"
                    onClick={(e) => {
                      updateAnswerData({ sel_vaccine: 'Jansen' });
                      pfizerSelected(false);
                      setJJApproved(true);
                      // if (isOver18) setIsModerna(false);
                      // else nextPage(e, 2);
                    }}
                  ></input>
                  <label htmlFor="prev_covid_jj">Janssen (J&J)</label>
                </div>
              )} */}
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
