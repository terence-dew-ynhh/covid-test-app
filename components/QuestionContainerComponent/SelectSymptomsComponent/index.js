import styles from './SelectSymptomsComponent.module.css'
import { useState, useEffect } from 'react';


 const SelectSymptoms = ({isNextEnabled, isPrevEnabled, isDoneEnabled}) => {

  const[hasSymptoms, setHasSymptoms] = useState('');

  useEffect(() => {
    isNextEnabled(false);
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
      setHasSymptoms('No');
      isNextEnabled(true);
    } else {
      checkboxesArray.forEach((element) => {
        let symtomsChk = document.getElementById(
          `prev_covid_${element.toLowerCase()}`
        );
        symtomsChk.disabled = false;
      });
      setHasSymptoms('');
      isNextEnabled(false);
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
      } else {
        noneChk.disabled = false;
        setHasSymptoms('');
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
        <label className={styles.none_label_or}> Or if you currently experience no symptoms :</label>
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
        <label className={styles.prev_none_label} htmlFor={`prev_covid_${checkbox.toLowerCase()}`}>
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
                <p className="error" hidden={!(hasSymptoms === 'Yes')}>
                  If you are at work, notify your manager and leave work. If you
                  are home, stay home. Please call Occupational Health to be
                  screened and tested today at the COVID-19 Call Center at
                  203-688-1700. Please select a language then option 2 to speak
                  with occupational health.
                </p>
                  <fieldset>
                    <legend>
                      <b>Required Question: </b>Select any of the following
                      symptoms that you are currently experiencing.
                    </legend>
                    <div className={styles.q1_grid}>{checkboxes}</div>
                  </fieldset>
                </div>
                
              </div>
      <style jsx>{``}</style>
    </>
  );
}

export default SelectSymptoms;