import styles from './CurrentSelectSymptomsComponent.module.css';
import { useState, useEffect } from 'react';

const CurrentSelectSymptomsComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  setRtwStatus
}) => {
  const [hasSymptoms, setHasSymptoms] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
    setRtwStatus(true);
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
      setHasSymptoms('No');
      isDoneEnabled(true);
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

      let noneChk = document.getElementById(`prev_covid_none_of_the_above`);
      if (shouldDisable) {
        noneChk.checked = false;
        noneChk.disabled = true;
        nextPage();
      } else {
        noneChk.disabled = false;
        setHasSymptoms('');
      }
    }
  };

  let checkboxesArray = [
    'Cough',
    'Shortness_of_Breath',
    'Body_Aches',
    'Fatigue',
    'Nausea',
    'Headaches',
    'Sore_throat',
    'Sinus Congestion',
    'Rhinorrhea (Runny Nose)',
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
        <p className="error" hidden={!(hasSymptoms === 'No')}>
          Occupational Health will review your responses. If approved, a return
          to work letter will be sent to you ONLY via My-Chart. You may share
          the letter with your manager if requested. <br></br>
          <br></br>
          Your manager will be able to see your updated return to work clearance
          date in ESS.
        </p>
        <div className={styles.question_row_item_sub}>
          <fieldset>
            <legend>
              Please select any of the following symptoms that you have
              experienced within the last 24 hours:
            </legend>
            <div className={styles.q1_grid}>{checkboxes}</div>
          </fieldset>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default CurrentSelectSymptomsComponent;
