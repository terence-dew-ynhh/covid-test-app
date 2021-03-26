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
          <fieldset>
            <legend>

              <div className="imgcontainer">
                <p>
                  Yale New Haven Health is pleased to offer the following
                  clinics for the Connecticut Department of Developmental
                  Services (DDS). All sites will offer the Pfizer vaccine.{' '}
                </p>
                <ul>
                  <li>
                    Floyd Little Fieldhouse, New Haven, CT <br></br> Accessible
                    entrance: <br></br> Main entrance: <br></br> Tuesday and
                    Wednesday, April 6, 7, 13 and 14
                  </li>
                  <li>
                    Mitchell College, New London, CT<br></br> Tuesday April
                    6 and 13
                  </li>
                </ul>

                <p>{VSText[1]}</p>
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
