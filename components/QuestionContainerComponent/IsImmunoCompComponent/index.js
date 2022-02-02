import { useState, useEffect } from 'react';
import styles from './IsImmunoCompComponent.module.css';
import qText from './isimmunocomp.json';

const IsImmunoCompComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateAnswerData,
  schedulePush,
  isSpanish,
  isOver18,
  isPediatric,
  is1217,
  setImmunocompromised,
  setBooster
}) => {
  const [isDiagnosed, setIsDiagnosed] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  let QText = isSpanish ? qText.sp : qText.en;

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
            <fieldset>
              <legend>
                Which statement best describes{' '}
                {isPediatric || is1217 ? 'your child?' : 'you?'}
              </legend>
              <div className="radio_row_item">
                <input
                  id="prev_covid_no"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {
                    setImmunocompromised(false);
                    nextPage(e);
                  }}
                ></input>
                <label htmlFor="prev_covid_no">
                  {isPediatric || is1217 ? 'My child is' : 'I am'} not
                  immunocompromised
                </label>
                </div>
                <br></br>
                <br></br>
                <div className="radio_row_item">
                  <input
                    id="prev_covid_yes_3rd"
                    type="radio"
                    value="No"
                    name="prev_covid"
                    onClick={(e) => {
                      updateAnswerData({ first_dose: e.target.value });
                      setBooster(false);
                      setImmunocompromised(true);
                      if (isPediatric) nextPage(e, 3);
                      else nextPage(e, 4);
                    }}
                  ></input>
                  <label htmlFor="prev_covid_yes_3rd">
                    {isPediatric || is1217 ? 'My child is' : 'I am'}{' '}
                    immunocompromised and I wish to schedule a third dose{' '}
                    {(isPediatric || is1217) && 'for them'}
                  </label>
                </div>
                <br></br>
                <br></br>
                <div className="radio_row_item">
                  <input
                    id="prev_covid_yes_series"
                    type="radio"
                    value="No"
                    name="prev_covid"
                    onClick={(e) => {
                      setImmunocompromised(true);
                      nextPage(e);
                    }}
                  ></input>
                  <label htmlFor="prev_covid_yes_series">
                    {isPediatric || is1217 ? 'My child is' : 'I am'}{' '}
                    immunocompromised and I wish to schedule another dose or
                    booster{isPediatric || is1217 ? ' for them.' : '.'}
                  </label>
                </div>
            </fieldset>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default IsImmunoCompComponent;
