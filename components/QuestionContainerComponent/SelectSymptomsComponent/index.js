import styles from './SelectSymptomsComponent.module.css';
import { useState, useEffect } from 'react';

const SelectSymptoms = ({ nextPage, isPrevEnabled, isDoneEnabled, setRiskGroup }) => {
  const [hasSymptoms, setHasSymptoms] = useState('');
  const [hasSevereSymptoms, setHasSevereSymptoms] = useState('');

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
          let symtomsChk = document.getElementById(
            `prev_covid_${element.toLowerCase()}`
          );
          symtomsChk.checked = false;
          symtomsChk.disabled = true;
        }
      });
      setRiskGroup(false);
      nextPage();
      // setHasSymptoms('No');
      // setHasSevereSymptoms('No');
    } else {
      checkboxesArray.forEach((element) => {
        let symtomsChk = document.getElementById(
          `prev_covid_${element.toLowerCase()}`
        );
        symtomsChk.disabled = false;
      });
      
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
        setRiskGroup(true);
        nextPage();
      } else {
        noneChk.disabled = false;
        setHasSymptoms('');
      }
    }
  };

  let checkboxesArray = [
    'Sickle_Cell_Disease',
    'Downs_Syndrome',
    'End_Stage_Kidney_Disease_on_Dialysis ',
    'Active_Cancer_Treatment',
    'Solid_Organ_Transplant',
    'Patient_of_Yale_New_Haven_Children\'s_Hospital',
    'None_of_the_Above',
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
          key={idx}
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
          key={idx}
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
        <p className="error" hidden={!(hasSymptoms === 'No' && hasSevereSymptoms === 'No')}>
        If you have other symptoms, please contact your Primary care doctor to discuss your concerns.
        </p>
        <div className={styles.question_row_item_sub}>
          <fieldset>
            <legend>
              <b>Required Question: </b>Do you have the following symptoms:
            </legend>
            <div className={styles.q1_grid}>{checkboxes}</div>
          </fieldset>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default SelectSymptoms;
