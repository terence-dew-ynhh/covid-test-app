import styles from './SelectSymptomsComponent.module.css';
import { useState, useEffect } from 'react';

const SelectSymptoms = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  hasSymptoms
}) => {
  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

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
    'Congestion or runny nose'
  ];

  const regex = /_/gi;
  let checkboxes = checkboxesArray.map((checkbox, idx) => (
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
  ));

  const disableCheckboxes = (e) => {
    let noSympChk;
    checkboxesArray.forEach((element) => {
      let symptomsChk = document.getElementById(
        `prev_covid_${element.toLowerCase()}`
      );
      symptomsChk.checked = false;
      symptomsChk.disabled = true;
    });
    if (e.target.id === 'prev_covid_no_symp') {
      noSympChk = document.getElementById(`prev_covid_no_symp_exp`);
    } else {
      noSympChk = document.getElementById(`prev_covid_no_symp`);
    }
    noSympChk.disabled = true;
  };

  const enableCheckboxes = (e) => {
    let noSympChk;
    checkboxesArray.forEach((element) => {
      let symptomsChk = document.getElementById(
        `prev_covid_${element.toLowerCase()}`
      );
      symptomsChk.disabled = false;
    });
    if (e.target.id === 'prev_covid_no_symp') {
      noSympChk = document.getElementById(`prev_covid_no_symp_exp`);
      noSympChk.disabled = false;
    } else {
      noSympChk = document.getElementById(`prev_covid_no_symp`);
      noSympChk.disabled = false;
    }
  };

  const handleChecked = (e) => {
    if (e.target.id === 'prev_covid_no_symp_exp' && e.target.checked === true) {
      disableCheckboxes(e);
      isDoneEnabled(true);
      hasSymptoms(false, true);
    }
    else if (e.target.id === 'prev_covid_no_symp' && e.target.checked === true) {
      disableCheckboxes(e);
      isDoneEnabled(true);
      hasSymptoms(false, false);
    } else {
      enableCheckboxes(e);
      isDoneEnabled(false);
    }

    // If any of the boxes are checked beside None of the Above

    if (
      !(
        e.target.id === 'prev_covid_no_symp_exp' ||
        e.target.id === 'prev_covid_no_symp'
      )
    ) {
      let shouldDisable = false;

      checkboxesArray.forEach((element) => {
        let symptom = document.getElementById(
          `prev_covid_${element.toLowerCase()}`
        );
        if (symptom.checked === true) {
          shouldDisable = true;
        }
      });

      let noSymptomsExposure = document.getElementById(
        `prev_covid_no_symp_exp`
      );
      let noSymptoms = document.getElementById(`prev_covid_no_symp`);
      if (shouldDisable) {
        noSymptomsExposure.checked = false;
        noSymptomsExposure.disabled = true;
        noSymptoms.checked = false;
        noSymptoms.disabled = true;
        hasSymptoms(true);
        isDoneEnabled(true);
      } else {
        noSymptomsExposure.disabled = false;
        noSymptoms.disabled = false;
        isDoneEnabled(false);
      }
    }
  };

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
            <div className={styles.chk_row_item}>
              <label className={styles.none_label_or}></label>
              <input
                id={`prev_covid_no_symp_exp`}
                type="checkbox"
                key={'prev_covid_no_symp_exp'}
                value={'prev_covid_no_symp_exp'}
                name="symptoms"
                onChange={(e) => {
                  handleChecked(e);
                }}
              ></input>
              <label
                className={styles.prev_none_label}
                htmlFor={`prev_covid_no_symp_exp`}
              >
                I am not experiencing any symptoms but I have had a close
                contact with someone with a confirmed case of COVID-19.
              </label>
              <br></br>
              <br></br>
              <input
                id={`prev_covid_no_symp`}
                type="checkbox"
                key={`prev_covid_no_symp`}
                value={`prev_covid_no_symp`}
                name="symptoms"
                onChange={(e) => {
                  handleChecked(e);
                }}
              ></input>
              <label
                className={styles.prev_none_label}
                htmlFor={`prev_covid_no_symp`}
              >
                I am not experiencing any symptoms
              </label>
            </div>
          </fieldset>
        </div>
        <p className="error">
          If you are experiencing symptoms, we recommend contacting your medical
          provider directly or call the YNHHS COVID Call Center at
          1-833-ASK-YNHH for a clinical assessment.
        </p>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default SelectSymptoms;
