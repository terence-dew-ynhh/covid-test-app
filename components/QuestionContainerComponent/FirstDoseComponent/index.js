import { useState, useEffect } from 'react';
import styles from './FirstDoseComponent.module.css';
import fdText from './firstdose.json';

const FirstDoseComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateAnswerData,
  isSpanish,
  isOver18,
  setImmunocompromised,
  setBooster,
  isPediatric
}) => {
  const [isClosed, setIsClosed] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  let FDText = isSpanish ? fdText.sp : fdText.en;

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
            <p className="error" hidden={!isClosed}>
              At this time, Yale New Haven Health does not currently have any
              appointments available for primary series vaccinations.
            </p>
            <br></br>
            <br></br>
            <fieldset>
              <legend>{FDText[0]}</legend>

              <div className="radio_row_item">
                <input
                  id="first_dose"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {
                    updateAnswerData({ first_dose: e.target.value });
                    setBooster(false);
                    setImmunocompromised(false);
                    setIsClosed(true);
                    nextPage(e, 7);
                  }}
                ></input>
                <label htmlFor="first_dose">{FDText[1]}</label>
              </div>
              <br></br>
              <br></br>
              <div className="radio_row_item">
                <input
                  id="second_dose"
                  type="radio"
                  value="No"
                  name="prev_covid"
                  onClick={(e) => {
                    updateAnswerData({ first_dose: e.target.value });
                    nextPage(e ,3);
                    setBooster(false);
                    setImmunocompromised(false);
                    // setIsClosed(true);
                  }}
                ></input>
                <label htmlFor="second_dose">{FDText[2]}</label>
              </div>
              <br></br>
              <br></br>
              {!isPediatric && (<div className="radio_row_item">
                <input
                  id="third_dose"
                  type="radio"
                  value="No"
                  name="prev_covid"
                  onClick={(e) => {
                    updateAnswerData({ first_dose: e.target.value });
                    setBooster(false);
                    setImmunocompromised(true);
                    nextPage(e, 2)
                    // setIsClosed(true);
                  }}
                ></input>
                <label htmlFor="third_dose">{FDText[3]}</label>
              </div>)}
              <br></br>
              <br></br>
              {isOver18 && (
                <div className="radio_row_item">
                  <input
                    id="booster_dose"
                    type="radio"
                    value="No"
                    name="prev_covid"
                    onClick={(e) => {
                      updateAnswerData({ first_dose: e.target.value });
                      setBooster(true);
                      setImmunocompromised(false);
                      nextPage(e,7);
                    }}
                  ></input>
                  <label htmlFor="booster_dose">{FDText[4]}</label>
                </div>
              )}
            </fieldset>
            <br></br>
            <br></br>
            {!isOver18 && (
              <b className="redText">
                Patients ages 12-17 are currently not eligible for the booster
              </b>
            )}
            <br></br>
            <br></br>
            <b className="redText">
              If you are scheduling your initial first dose of the Vaccine, your
              second dose appointment will be made for you at the Vaccination
              clinic at the time of your appointment.{' '}
            </b>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default FirstDoseComponent;
