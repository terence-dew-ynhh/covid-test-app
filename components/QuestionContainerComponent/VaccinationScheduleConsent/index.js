import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './VaccinationScheduleConsent.module.css';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';
import veText from './vaccineelidgibility.json';
import Link from 'next/link';

const useStyles = makeStyles(() => ({
  tooltip: {
    fontSize: 25,
  },
}));

const VaccinationScheduleConsent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateField,
  schedulePush,
  isSpanish
}) => {

  const classes = useStyles();

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  const handleChecked = (e) => {
    schedulePush(e);
  };

  let VEText = isSpanish ? veText.sp : veText.en;

  let checkboxesArray = ['Acknowledge'];

  const regex = /_/gi;

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
        {'Acknowledge'}
      </label>
    </div>
  ));

  return (
    <>
      <div className={styles.question_row_item}>
        <div className={styles.question_row_item_sub}>
        <p className="message">
              {VEText[3]}
            </p>
          <fieldset>
            <legend>
              {VEText[0]}
              <br></br>
              <br></br>
              {VEText[1]}
              <br></br>
              <br></br>
              {VEText[2]}
              <br></br>
              <br></br>
              <Link href='/info'><img style={{height: '50%' }} src="Schedule.PNG"></img></Link>            
            </legend>
            <div className={styles.q1_grid}>{checkboxes}</div>
          </fieldset>
        </div>
      </div>
      <style jsx>{`
      img:hover{
        border: 2px solid rgba(255, 166, 0, 0.856)
      }
      `}</style>
    </>
  );
};

export default VaccinationScheduleConsent;
