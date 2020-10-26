import styles from './SelectSymptomsComponent.module.css';
import { useState, useEffect } from 'react';

const SelectSymptoms = ({ nextPage, isPrevEnabled, isDoneEnabled }) => {
  const [hasSymptoms, setHasSymptoms] = useState('');
  const [hasSevereSymptoms, setHasSevereSymptoms] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  const handleChecked = (e, isSevere) => {

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
          // if(e.target.id.includes("fever") || e.target.id.includes("cough") || e.target.id.includes("body") ){
            nextPage(e,2);
          // }else{
            
          // }
          
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
    'Conjunctivitis',
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
            handleChecked(e, false);
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
