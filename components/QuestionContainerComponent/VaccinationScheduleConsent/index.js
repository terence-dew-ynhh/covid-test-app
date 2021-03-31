import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './VaccinationScheduleConsent.module.css';
import Tooltip from '@material-ui/core/Tooltip';
import InfoIcon from '@material-ui/icons/Info';
import vsText from './vaccineschedule.json';
import Link from 'next/link';

const useStyles = makeStyles(() => ({
  tooltip: {
    fontSize: 25
  }
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

  let VSText = isSpanish ? vsText.sp : vsText.en;

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
        {VSText[3]}
      </label>
    </div>
  ));

  return (
    <>
      <div className={styles.question_row_item}>
        <div className={styles.question_row_item_sub}>
          <p className="message">{VSText[2]}</p>
          <fieldset>
            <legend>
              <br></br>
              <br></br>
              {VSText[0]}
              <br></br>
              <br></br>
              <div className="imgcontainer">
                <p className="versiontxt">v6 3.31.21</p>
                <a href="/info" target="_blank" rel="noreferrer">
                  <img
                    src="/Schedule.PNG"
                    passHref
                  ></img>
                </a>
                <p>
                  {VSText[1]}
                </p>
              </div>
            </legend>
            <div className={styles.q1_grid}>{checkboxes}</div>
          </fieldset>
        </div>
      </div>
      <style jsx>{`
        img:hover {
          border: 2px solid rgba(255, 166, 0, 0.856);
        }
        img {
          margin: 0;
          height: 100vh;
        }
        .versiontxt {
          font-size: 0.7em;
          text-align: center;
          margin: 1px;
        }
        .imgcontainer {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default VaccinationScheduleConsent;
