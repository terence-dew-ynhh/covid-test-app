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
  isSpanish
}) => {
  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(TramRounded);
  }, []);

  const handleChecked = (e) => {
    nextPage(e, 2);
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
              <b>Current Eligibility Criteria for Booster:</b>
              <br></br>
              <br></br>
              {VEText[0]}
              <br></br>
              {VEText[1]} <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/booster-shot.html#long-term-care" target="_blank" rel="noreferrer">long-term care settings</a>
              <br></br>
              <br></br>
              {VEText[2]} <a href="https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-with-medical-conditions.html" target="_blank" rel="noreferrer">underlying medical conditions</a>
              <br></br>
              <br></br>
              {VEText[3]} <a href="https://www.cdc.gov/coronavirus/2019-ncov/vaccines/booster-shot.html#HighRisk" target="_blank" rel="noreferrer">high-risk settings</a>
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