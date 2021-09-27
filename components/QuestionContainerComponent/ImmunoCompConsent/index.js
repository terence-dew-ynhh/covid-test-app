import { useEffect } from 'react';
import styles from './ImmunoCompConsent.module.css';
import vsText from './immunocomp.json';

const ImmunoCompConsent = ({
  isPrevEnabled,
  isDoneEnabled,
  nextPage,
  isSpanish,
  isPfizer,
}) => {
  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(false);
  }, []);

  const handleChecked = (e) => {
    nextPage();
  };

  const regex = /_/gi;

  let VSText = isSpanish ? vsText.sp : vsText.en;

  let checkboxesArray = ['Acknowledge'];

  let checkboxes = checkboxesArray.map((checkbox, idx) => (
    <div className={styles.chk_row_item}>
      <label className={styles.none_label_or}> {''}</label>
      <input
        id={`prev_covid_${checkbox.toLowerCase()}`}
        type="checkbox"
        key={checkbox.replace(regex, ' ')}
        value={checkbox.replace(regex, ' ')}
        name="Consent"
        onChange={(e) => {
          handleChecked(e);
        }}
      ></input>
      <label
        className={styles.none_label_or}
        htmlFor={`prev_covid_${checkbox.toLowerCase()}`}
      >
        {VSText[2]}
      </label>
    </div>
  ));

  return (
    <>
      <div className={styles.question_row_item}>
        <div className={styles.question_row_item_sub}>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>
              <br></br>
              <br></br>
              {VSText[0]}
            </legend>
            <a
              className="fin-statment"
              target="__blank"
              href="https://www.ynhhs.org/patient-care/covid-19/Vaccine/third-dose-immunocompromised"
            >
              <span>
                {' '}
                {VSText[1]}
              </span>
            </a>{' '}
            <br></br>
            <br></br>
            <div className={styles.q1_grid}>{checkboxes}</div>
          </fieldset>
        </div>
      </div>
      <style jsx>{`
        
        .fin-statment {
          align-self: start;
        }

      `}</style>
    </>
  );
};

export default ImmunoCompConsent;
