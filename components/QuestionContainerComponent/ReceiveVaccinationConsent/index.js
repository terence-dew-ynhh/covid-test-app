import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './ReceiveVaccinationConsent.module.css';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';
import veText from './vaccineelidgibility.json';

const useStyles = makeStyles(() => ({
  tooltip: {
    fontSize: 25,
  },
}));

const ReceiveVaccinationConsent = ({
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
    nextPage(e);
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
        key={checkbox.replace(regex, ' ')}
        value={checkbox.replace(regex, ' ')}
        name="Consent"
        onChange={(e) => {
          handleChecked(e);
        }}
      ></input>
      <label
        // className={styles.prev_none_label}
        htmlFor={`prev_covid_${checkbox.toLowerCase()}`}
      >
        {VEText[8]}
      </label>
    </div>
  ));

  return (
    <>
      <div className={styles.question_row_item}>
        <div className={styles.question_row_item_sub}>
        <p className="message">
              {VEText[10]}
            </p>
          <fieldset>
            <legend>
              {VEText[0]}
              <br></br>
              <br></br>
              {VEText[11]}
              <br></br>
              <br></br>
              {VEText[2]}
              <br></br>
              <br></br>
              {VEText[3]}
              <br></br>
              <br></br>
              {VEText[4]}
              <br></br>
              <br></br>
              {VEText[12]}
              <Tooltip title={<p style={{ fontSize: "16px", lineHeight: "20px"}}>{VEText[13]}<br></br><br></br>{VEText[14]}</p>} placement="top-end" className={classes.tooltip}>
                <InfoIcon fontSize="small"></InfoIcon>
              </Tooltip>
              <br></br>              
              <br></br>
              {VEText[9]}
              {/* <br></br>
              <br></br>-I am a resident of CT or regularly receive clinical care
              in CT */}
              <br></br>
              <br></br>
              {VEText[5]}
              <br></br>
              <br></br>
              <b>{VEText[6]}</b>
            </legend>
            <div className={styles.q1_grid}>{checkboxes}</div>
          </fieldset>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default ReceiveVaccinationConsent;
