import { useState, useEffect } from 'react';
import styles from './SelectPfizerComponent.module.css';
import svText from './selvaccine.json';

const SelectPfizerComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  pfizerSelected,
  updateAnswerData,
  isSpanish,
  isImmunocomp,
  isBooster
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
            <p className="error" hidden={!(isModerna && isBooster)}>
              Yale New Haven Health is following State of Connecticut and
              Centers for Disease Control and Prevention (CDC) guidance that
              allows for certain individuals to receive a booster dose of the
              Pfizer COVID-19 vaccine. The current recommendations do not allow
              those who have received Moderna as a primary series to receive a
              booster. <br></br>
              <br></br>
              We will continue to update our website, ynhhs.org, regarding
              eligibility and additional guidance. Please do not contact your
              doctor’s office to request a booster if you are not currently
              eligible.
            </p>
            <p className="error" hidden={!(isModerna && !isBooster)}>
              Yale New Haven Health does not currently have any appointments
              available for Moderna third dose.
            </p>
            <br></br>
            <br></br>
            <fieldset>
              <legend>
                The CDC recommends, if possible, that your additional dose of
                COVID vaccine be the same type of vaccine that you initially
                received. For example, if you received two doses of the Moderna
                vaccine, you should try to schedule your additional dose at a
                site that is offering the Moderna vaccine on the day of your
                appointment. The same is true for the Pfizer vaccine. <br></br>
                <br></br> However, the CDC states that you can get the other
                mRNA vaccine as your additional vaccine dose if the one for your
                original vaccine series is not readily available.
              </legend>

              <div className="radio_row_item">
                <input
                  id="prev_covid_no"
                  type="radio"
                  value="No"
                  name="prev_covid"
                  onClick={(e) => {
                    setIsModerna(true);
                  }}
                ></input>
                <label htmlFor="prev_covid_no">
                  I received Moderna as my primary series and <b>would not</b> like to
                  schedule an appointment to receive a Pfizer third dose.
                </label>
              </div>
              <br></br>
              <br></br>
              <div className="radio_row_item">
                <input
                  id="prev_covid_yes"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {
                    nextPage(e,2)
                  }}
                ></input>
                <label htmlFor="prev_covid_yes">
                  I received Moderna as my primary series and <b>would</b> like to
                  schedule an appointment to receive a Pfizer third dose.
                </label>
              </div>
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

export default SelectPfizerComponent;
