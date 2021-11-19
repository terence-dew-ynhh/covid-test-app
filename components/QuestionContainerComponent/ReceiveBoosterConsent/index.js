import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './ReceiveBoosterConsent.module.css';
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
      <input
        id={`prev_covid_${checkbox.toLowerCase()}`}
        type="checkbox"
        key={`chk-${idx}`}
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
          <p className="banner">
            This site is only for employees and affiliates of YNHHS. Please go
            to{' '}
            <a href="covidvaccine.ynhh.org">
              <span style={{color: "#fff", textDecoration: "underline"}}>covidvaccine.ynhh.org</span>
            </a>{' '}
            to schedule your vaccination if you are not an employee or affiliate
            of YNHHS.
          </p>
          <br></br>
          <br></br>
          <fieldset>
            <legend>
              <b>Current Eligibility Criteria for Booster:</b>
              <br></br>
              <br></br>
              {VEText[0]}
              <br></br>
              <br></br>
              {VEText[1]}{' '}
              <a
                href="https://mychart.ynhhs.org/mychart-prd/en-US/PDF/ChronicConditions.pdf"
                target="_blank"
                rel="noreferrer"
              >
                - Click to view high risk conditions
              </a>
              <br></br>
              <br></br>
              {VEText[2]}
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
