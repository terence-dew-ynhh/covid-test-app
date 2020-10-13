import styles from './SelectSymptomsComponent.module.css';
import { useState, useEffect } from 'react';

const SelectSymptoms = ({ nextPage, isPrevEnabled, isDoneEnabled, appointmentType }) => {
  const [hasSymptoms, setHasSymptoms] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  const handleChecked = (e) => {
    if (
      e.target.id === 'prev_covid_none_of_the_above' &&
      e.target.checked === true
    ) {
      checkboxesArray.forEach((element) => {
        if (!(element === 'None_of_the_Above')) {
          let symptomsChk = document.getElementById(
            `prev_covid_${element.toLowerCase()}`
          );
          symptomsChk.checked = false;
          symptomsChk.disabled = true;
        }
      });
      setHasSymptoms('No');
      isDoneEnabled(true);
      appointmentType(false);
    } else {
      checkboxesArray.forEach((element) => {
        let symptomsChk = document.getElementById(
          `prev_covid_${element.toLowerCase()}`
        );
        symptomsChk.disabled = false;
      });
      setHasSymptoms('');
      isDoneEnabled(false);
    }

    // If any of the boxes are checked beside None of the Above

    if (!(e.target.id === 'prev_covid_none_of_the_above')) {
      let shouldDisable = false;

      checkboxesArray.forEach((element) => {
        let symptom = document.getElementById(
          `prev_covid_${element.toLowerCase()}`
        );
        if (symptom.checked === true) {
          shouldDisable = true;
        }
      });

      let noneChk = document.getElementById(`prev_covid_none_of_the_above`);
      if (shouldDisable) {
        noneChk.checked = false;
        noneChk.disabled = true;
        setHasSymptoms('Yes');
        isDoneEnabled(true);
        appointmentType(true);
      } else {
        noneChk.disabled = false;
        setHasSymptoms('');
        isDoneEnabled(false);
      }
    }
  };

  let checkboxesArray = [
    'Fever',
    'Vomiting',
    'Diarrhea',
    'Cough',
    'Shortness_of_Breath',
    'Body_Aches',
    'Fatigue',
    'Nausea',
    'Headaches',
    'Sore_throat',
    'New loss of taste or smell',
    'Congestion or runny nose',
    'None_of_the_Above'
  ];

  const regex = /_/gi;
  let checkboxes = checkboxesArray.map((checkbox, idx) =>
    checkbox === 'None_of_the_Above' ? (
      <div className={styles.chk_row_item}>
        <label className={styles.none_label_or}>
          {' '}
          Or if you currently experience no symptoms :
        </label>
        <input
          id={`prev_covid_${checkbox.toLowerCase()}`}
          type="checkbox"
          key={checkbox.replace(regex, ' ')}
          value={checkbox.replace(regex, ' ')}
          name="symptoms"
          onChange={(e) => {
            handleChecked(e);
          }}
        ></input>
        <label
          className={styles.prev_none_label}
          htmlFor={`prev_covid_${checkbox.toLowerCase()}`}
        >
          {checkbox.replace(regex, ' ')}
        </label>
      </div>
    ) : (
      <div className="chk_row_item">
        <input
          id={`prev_covid_${checkbox.toLowerCase()}`}
          key={checkbox.replace(regex, ' ')}
          type="checkbox"
          value={checkbox.replace(regex, ' ')}
          name="symptoms"
          onChange={(e) => {
            handleChecked(e);
          }}
        ></input>
        <label htmlFor={`prev_covid_${checkbox.toLowerCase()}`}>
          {checkbox.replace(regex, ' ')}
        </label>
      </div>
    )
  );

  return (
    <>
      <div className={styles.question_row_item}>
        <div className={styles.question_row_item_sub}>
          <fieldset>
            <legend>
              <b>Required Question: </b>Select any of the following symptoms
              that you are currently experiencing.
            </legend>
            <div className={styles.q1_grid}>{checkboxes}</div>
          </fieldset>
        </div>
        <p className="error">If you are experiencing symptoms, we recommend contacting your medical provider directly or call the YNHHS COVID Call Center at 1-833-ASK-YNHH for a clinical assessment.</p>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default SelectSymptoms;
