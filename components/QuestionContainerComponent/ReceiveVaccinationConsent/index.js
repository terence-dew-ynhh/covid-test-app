import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './ReceiveVaccinationConsent.module.css';
import veText from './vaccineelidgibility.json';
import { TramRounded } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  tooltip: {
    fontSize: 25
  }
}));

const ReceiveBoosterConsent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  isSpanish,
  isPediatric
}) => {
  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(TramRounded);
  }, []);

  const handleChecked = (e) => {
    if (isPediatric) nextPage(e, 8);
    else nextPage(e);
  };

  let VEText = isSpanish ? veText.sp : veText.en;

  let checkboxesArray = ['None_of_the_Above'];

  const regex = /_/gi;

  let checkboxes = checkboxesArray.map((checkbox, idx) => (
    <div className={styles.chk_row_item}>
      <label className={styles.none_label_or}> {VEText[7]}</label>
      <br></br>
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
      <label htmlFor={`prev_covid_${checkbox.toLowerCase()}`}>
        {VEText[8]}
      </label>
    </div>
  ));

  return (
    <>
      <div className={styles.question_row_item}>
        <div className={styles.question_row_item_sub}>
          {/* <p className="message">
            Please note that boosters are not yet recommended for HCW, first
            responders, etc. unless they meet one or more of the below criteria
            placing them at risk for severe COVID.
          </p> */}
          <fieldset>
            <legend>
              {isPediatric ? VEText[18] : VEText[0]}
              <br></br>
              <br></br>
              {VEText[5]}
              <br></br>
              <br></br>
              <b>{VEText[6]}</b>
              <br></br>
              <br></br>
              <b>{isPediatric ? VEText[16] : VEText[9]}</b>
              <b className="redText">{isPediatric ? VEText[17] : VEText[0]}</b>
            </legend>
            <div className={styles.q1_grid}>{checkboxes}</div>
          </fieldset>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default ReceiveBoosterConsent;
