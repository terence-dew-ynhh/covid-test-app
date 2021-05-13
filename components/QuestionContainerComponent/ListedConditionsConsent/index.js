import { useEffect } from 'react';
import styles from './ListedConditionsConsent.module.css';
import lcText from './listedconditions.json';

const ListedConditionsConsent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  isSpanish,
  isOver18,
  isPfizer
}) => {
  const handleChecked = (e) => {
    if(isOver18 & isPfizer === null)
    nextPage(e);
    else
    nextPage(e, 2);
  };
  const regex = /_/gi;

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  let checkboxesArray = ['None_of_the_Above'];

  let LCText = isSpanish ? lcText.sp : lcText.en;

  let checkboxes = checkboxesArray.map((checkbox, idx) => (
    <div className={styles.chk_row_item}>
      <label className={styles.none_label_or}> {LCText[8]}</label>
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
        htmlFor={`prev_covid_${checkbox.toLowerCase()}`}
      >
        {LCText[9]}
      </label>
    </div>
  ));

  return (
    <>
      <div className={styles.question_row_item}>
        <div className={styles.question_row_item_sub}>
          <fieldset>
            <legend>
              {LCText[0]}
              <br></br>
              <br></br>
              {LCText[2]}
              <br></br>
              <br></br>
              {LCText[3]}
              <br></br>
              <br></br>
              {LCText[4]}
              <br></br>
              <br></br>
              {LCText[5]}
              <br></br>
              <br></br>
              {LCText[6]}<b className="redText">{LCText[7]}</b>
              <br></br>
              <br></br>
            </legend>
            <div className={styles.q1_grid}>{checkboxes}</div>
          </fieldset>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default ListedConditionsConsent;