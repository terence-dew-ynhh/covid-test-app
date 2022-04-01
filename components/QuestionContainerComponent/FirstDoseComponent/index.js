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
  isOver65,
  setBooster,
  isPediatric,
  is1217,
  isImmunocomp,
  setThirdDose,
  is18to64,
  isOver50,
  setIsOver50,
  is2ndBooster,
  setIs2ndBooster
}) => {
  const [isClosed, setIsClosed] = useState('');
  const [isDosePrimary, setisDosePrimary] = useState('');

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
            {isClosed && (
              <p className="error">
                At this time, Yale New Haven Health does not offer Dose 1
                (primary series), please check with your primary care attending,
                local pharmacy, or check back here in the future.
              </p>
            )}
            {isDosePrimary && (
              <p className="error">
                Please contact 1-833-ASK-YNHH (275-9644) to check for
                appointment availability and to schedule your child’s primary
                series appointment.
              </p>
            )}
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
                    setIsClosed(true);
                    setisDosePrimary(false);
                    // setThirdDose(false);
                    // nextPage(e, 9);
                  }}
                ></input>
                <label htmlFor="first_dose">
                  I am scheduling {isPediatric || is1217 ? "my child's" : 'my'}{' '}
                  first primary series dose
                </label>
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
                    if (isOver65 || is18to64) nextPage(e, 5);
                    if (isPediatric) {
                      setisDosePrimary(true);
                      setIsClosed(false);
                    } else nextPage(e, 10);
                    setBooster(false);
                    setThirdDose(false);
                  }}
                ></input>
                <label htmlFor="second_dose">
                  I am scheduling {isPediatric || is1217 ? "my child's" : 'my'}{' '}
                  second primary series dose
                </label>
              </div>
              <br></br>
              <br></br>
              {isImmunocomp && (
                <>
                  <div className="radio_row_item">
                    <input
                      id="third_dose"
                      type="radio"
                      value="No"
                      name="prev_covid"
                      onClick={(e) => {
                        updateAnswerData({ first_dose: e.target.value });
                        setBooster(false);
                        setThirdDose(true);
                        if (isPediatric) {
                          setisDosePrimary(true);
                          setIsClosed(false);
                        } else nextPage(e, 5);
                      }}
                    ></input>
                    <label htmlFor="third_dose">
                      I am scheduling for{' '}
                      {isPediatric || is1217 ? "my child's" : 'my'} additional
                      primary series dose and have completed{' '}
                      {isPediatric || is1217 ? 'their' : 'my'} second dose at
                      least 28 days ago.
                    </label>
                  </div>
                  <br></br>
                  <br></br>
                </>
              )}
              
              {!isPediatric && (
                <div className="radio_row_item">
                  <input
                    id="booster_dose"
                    type="radio"
                    value="No"
                    name="prev_covid"
                    onClick={(e) => {
                      updateAnswerData({ first_dose: e.target.value });
                      setBooster(true);
                      setThirdDose(false);
                      if (isOver65 || is18to64) nextPage(e, 5);
                      else nextPage(e, 10);
                    }}
                  ></input>
                  <label htmlFor="booster_dose">
                    {`I am scheduling ${
                      isPediatric || is1217 ? 'my child’s' : 'my'
                    } first booster and ${
                      isPediatric || is1217 ? 'they ' : ''
                    }have completed ${
                      isPediatric || is1217 ? 'their ' : 'my'
                    } ${
                      isImmunocomp ? 'additonal primary dose.' : 'second dose'
                    } at least ${isImmunocomp ? '3' : '5'} months ago.`}
                  </label>
                </div>
              )}
              <br></br>
              <br></br>
              {!isPediatric && ((is1217 && isImmunocomp) || isOver50) && (
                <div className="radio_row_item">
                  <input
                    id="booster_dose2"
                    type="radio"
                    value="No"
                    name="prev_covid"
                    onClick={(e) => {
                      updateAnswerData({ first_dose: e.target.value });
                      setBooster(true);
                      setIs2ndBooster(true);
                      setThirdDose(false);
                      if (isOver65 || is1217 || (is18to64 && isImmunocomp) ) nextPage(e, 5);
                      else nextPage(e);
                    }}
                  ></input>
                  <label htmlFor="booster_dose2">
                    {`I am scheduling ${
                      isPediatric || is1217 ? 'my child’s' : 'my'
                    } second booster and ${
                      isPediatric || is1217 ? 'they ' : ''
                    }have completed ${
                      isPediatric || is1217 ? 'their ' : 'my'
                    } ${
                      isImmunocomp ? 'first booster' : 'second dose'
                    } at least 4 months ago.`}
                  </label>
                </div>
              )}
            </fieldset>
            <br></br>
            <br></br>
            {(is1217 || is18to64) && !isImmunocomp && (
              <>
                <b>
                  *An 8-week interval may be optimal for some people ages 12
                  years and older, especially for males ages 12 to 39 years. A
                  shorter interval (3 weeks for Pfizer-BioNTech; 4 weeks for
                  Moderna) between the first and second doses remains the
                  recommended interval for: people who are moderately or
                  severely immunocompromised; adults ages 65 years and older;
                  and others who need rapid protection due to increased concern
                  about community transmission or risk of severe disease.{' '}
                </b>
              </>
            )}
            <br></br>
            <br></br>
            <b className="redText">
              If you are scheduling{' '}
              {isPediatric || is1217 ? "your child's " : 'your '}initial first
              dose of the Vaccine,{' '}
              {isPediatric || is1217 ? "the child's " : 'your '}
              second dose appointment will be made for{' '}
              {isPediatric || is1217 ? 'them' : 'you'} at the Vaccination clinic
              at the time of your appointment.{' '}
            </b>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default FirstDoseComponent;
