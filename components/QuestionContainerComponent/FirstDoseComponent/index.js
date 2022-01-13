import { useState, useEffect } from 'react';
import styles from './FirstDoseComponent.module.css';
import fdText from './firstdose.json';
import { InsertPhotoOutlined } from '@material-ui/icons';

const FirstDoseComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateAnswerData,
  isSpanish,
  isOver18,
  setImmunocompromised,
  setBooster,
  isPediatric,
  is1217
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
                    nextPage(e, 8);
                  }}
                ></input>
                <label htmlFor="first_dose">I am scheduling {isPediatric|| is1217 ? "my child's":"my"} first dose and have not had a dose yet.</label>
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
                    nextPage(e ,4);
                    setBooster(false);
                    setImmunocompromised(false);
                    // setIsClosed(true);
                  }}
                ></input>
                <label htmlFor="second_dose">I am scheduling {isPediatric|| is1217 ? "my child's":"my"} second dose of a 2-dose vaccine</label>
              </div>
              <br></br>
              <br></br>
              <div className="radio_row_item">
                <input
                  id="third_dose"
                  type="radio"
                  value="No"
                  name="prev_covid"
                  onClick={(e) => {
                    updateAnswerData({ first_dose: e.target.value });
                    setBooster(false);
                    setImmunocompromised(true);
                    if(isPediatric)nextPage(e, 2)
                    else nextPage(e, 3)
                    // setIsClosed(true);
                  }}
                ></input>
                <label htmlFor="third_dose">I am scheduling for {isPediatric|| is1217 ? "my child's":"my"} third dose because {isPediatric|| is1217 ? "they are":"I am"} immunocompromised and {isPediatric|| is1217 ? "they":"I"} have completed my second dose at least 28 days ago.</label>
              </div>
              <br></br>
              <br></br>
              {(isOver18) && (
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
                      nextPage(e,4);
                    }}
                  ></input>
                  <label htmlFor="booster_dose">{isPediatric || is1217 ?  FDText[7] : FDText[4]  }</label>
                </div>
              )}
            </fieldset>
            <br></br>
            <br></br>
            <b className="redText">
              If you are scheduling {isPediatric|| is1217 ? "your child's":"your"} initial first dose of the Vaccine, {isPediatric|| is1217 ? "the child's":"your"}
              second dose appointment will be made for {isPediatric|| is1217 ? "them":"you"} at the Vaccination
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
