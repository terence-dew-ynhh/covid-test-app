import styles from './SelectSymptomsComponent.module.css';
import { useState, useEffect } from 'react';

const SelectSymptoms = ({ nextPage, isPrevEnabled, isDoneEnabled }) => {
  const [hasSymptoms, setHasSymptoms] = useState('');
  const [hasSevereSymptoms, setHasSevereSymptoms] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  const handleChecked = (e, isSevere, idx = 0) => {

    if (
      e.target.id === 'prev_covid_none_of_the_above' &&
      e.target.checked === true
    ) {
      checkboxesArray.forEach((element) => {
        if (!(element === 'None_of_the_Above')) {
          let symtomsChk = document.getElementById(
            `prev_covid_${element.toLowerCase()}`
          );
          symtomsChk.checked = false;
          symtomsChk.disabled = true;
        }
      });
      setHasSymptoms('No');
      setHasSevereSymptoms('No');
    } else {
      checkboxesArray.forEach((element) => {
        let symtomsChk = document.getElementById(
          `prev_covid_${element.toLowerCase()}`
        );
        symtomsChk.disabled = false;
      });
      setHasSymptoms('');
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

      severeCheckboxesArr.forEach((element) => {
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
        if(isSevere){
          nextPage(e);
        }else{
          if(idx >= 0 ){
            nextPage(e,9);
          }
        }
      } else {
        noneChk.disabled = false;
        setHasSymptoms('');
        if(isSevere){
          setHasSevereSymptoms('');
        }
      }
    }
  };

  let severeCheckboxesArr =[
    'Trouble Breathing',
    'Persistent Pain/Pressure in the Chest',
    'Confusion',
    'Difficulty with Waking',
    'Bluish lips on the Face ',
  ]
  let checkboxesArray = [
    
    'Fever',
    'Cough',    
    'Shortness_of_Breath',
    'Body Aches',
    'Profound Fatigue',
    'New Headaches',
    'Sore throat',
    'New loss of taste or smell',
    'Sinus Congestion',
    'Rhinorrhea', 
    'Conjunctivitis',
    'Nausea',
    'Vomiting',
    'Diarrhea',
    'None_of_the_Above'
  ];

  const regex = /_/gi;
  let severeCheckboxes = severeCheckboxesArr.map((checkbox, idx) => 

    (
      <div className="chk_row_item">
        <input
          id={`prev_covid_${checkbox.toLowerCase()}`}
          key={idx}
          type="checkbox"
          value={checkbox.replace(regex, ' ')}
          name="symptoms"
          onChange={(e) => {
            handleChecked(e, true);
          }}
        ></input>
        <label htmlFor={`prev_covid_${checkbox.toLowerCase()}`}>
          {checkbox.replace(regex, ' ')}
        </label>
      </div>
    )
  );

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
          key={idx}
          value={checkbox.replace(regex, ' ')}
          name="symptoms"
          onChange={(e) => {
            handleChecked(e, false);
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
          key={idx}
          type="checkbox"
          value={checkbox.replace(regex, ' ')}
          name="symptoms"
          onChange={(e) => {
            handleChecked(e, false, idx);
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
        <p className="error" hidden={!(hasSymptoms === 'No' && hasSevereSymptoms === 'No')}>
        If you have other symptoms, please contact your Primary care doctor to discuss your concerns.
        </p>
        <div className={styles.question_row_item_sub}>
          <fieldset>
            <legend>
              <b>Required Question: </b>Do you have the following symptoms:
            </legend>
            <div className={styles.q2_grid}>{severeCheckboxes}</div>
            <div className={styles.q1_grid}>{checkboxes}</div>
          </fieldset>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default SelectSymptoms;
