import styles from './SelectSymptomsComponent.module.css';
import { useState, useEffect } from 'react';

const SelectSymptoms = ({ nextPage, isPrevEnabled, isDoneEnabled }) => {
  const [hasSymptoms, setHasSymptoms] = useState(false);
  const [hasSevereSymptoms, setHasSevereSymptoms] = useState(false);

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  const toggleCheckBoxes = (checkboxesArr, isDisabled) => {
    checkboxesArr.forEach((element) => {
        let symtomsChk = document.getElementById(
          `prev_covid_${element.toLowerCase()}`
        );
        if(isDisabled) symtomsChk.checked = false;
        symtomsChk.disabled = isDisabled;
    });

    
  };

  const handleChecked = (e) => {
    //None of the Above
    let noneChk = document.getElementById(`prev_covid_none_of_the_above`);

    if (
      e.target.id === 'prev_covid_none_of_the_above' &&
      e.target.checked === true
    ) {
      toggleCheckBoxes([...checkboxesArr, ...severeCheckboxesArr], true);
      setHasSymptoms(false);
      setHasSevereSymptoms(false);
      noneChk.checked = true;
      isDoneEnabled(true);
    } else {
      toggleCheckBoxes([...checkboxesArr, ...severeCheckboxesArr], false);
      noneChk.checked = false;
      isDoneEnabled(false);
    }

    // If any of the boxes are checked beside None of the Above

    if (!(e.target.id === 'prev_covid_none_of_the_above')) {
      let shouldDisableSymp = false;
      let shouldDisableSev = false;

      checkboxesArr.forEach((element) => {
        let symptom = document.getElementById(
          `prev_covid_${element.toLowerCase()}`
        );
        if (symptom.checked === true) {
          shouldDisableSev = true;
        }
      });

      severeCheckboxesArr.forEach((element) => {
        let symptom = document.getElementById(
          `prev_covid_${element.toLowerCase()}`
        );
        if (symptom.checked === true) {
          shouldDisableSymp = true;
        }
      });

      if (shouldDisableSymp || shouldDisableSev) {
        noneChk.checked = false;
        noneChk.disabled = true;

        if(shouldDisableSymp){
          toggleCheckBoxes(checkboxesArr, true)
          setHasSymptoms(false);
          setHasSevereSymptoms(true);
        }else if(!shouldDisableSymp){
          toggleCheckBoxes(checkboxesArr, false)
          setHasSevereSymptoms(false);
        }

        if(shouldDisableSev){
          toggleCheckBoxes(severeCheckboxesArr, true)
          setHasSymptoms(true);
          setHasSevereSymptoms(false);
          noneChk.disabled = true;
        }else if(!shouldDisableSev){
          toggleCheckBoxes(severeCheckboxesArr, false)
          setHasSymptoms(false);
        }
      }else{
        noneChk.disabled = false;
        setHasSymptoms(false);
        setHasSevereSymptoms(false);
        isDoneEnabled(false);
      }

    } else {
      noneChk.disabled = false;
    }
  };

  let severeCheckboxesArr = [
    'Trouble Breathing',
    'Persistent Pain/Pressure in the Chest',
    'Confusion',
    'Difficulty with Waking',
    'Bluish lips on the Face '
  ];
  let checkboxesArr = [
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
  let severeCheckboxes = severeCheckboxesArr.map((checkbox, idx) => (
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
  ));

  let checkboxes = checkboxesArr.map((checkbox, idx) =>
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
        <p className="error" hidden={!(hasSevereSymptoms)}>
          Your symptom(s) may indicate a Medical Emergency. Call 911.
        </p>
        <p
          className="error"
          hidden={!(hasSymptoms)}
        >
          Symptoms such as fever, cough or body aches may indicate another
          respiratory infection such as the flu. <br></br> <br></br>
          We recommend contacting your primary care provider for medical
          assessment and appropriate testing, especially if you are 65 years or
          older, have a chronic medical condition, and/or are pregnant.{' '}
          <br></br>
          <br></br>
          If you do not have a primary care provider and would like to be
          assessed for flu or other medical concerns, please <a target="__blank" href={"https://nam12.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.ynhhs.org%2Fmake-an-appointment%2Fschedule-a-walk-in.aspx&data=04%7C01%7Cchristian.pettker%40yale.edu%7C2acb03a2800749d558c808d97269fa4b%7Cdd8cbebb21394df8b4114e3e87abeb5c%7C0%7C0%7C637666621751848956%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=uj3yqRbnXAsqwBXkmkNdi6n45afwH6wpCkPZO6RXO%2B0%3D&reserved=0"}>CLICK HERE</a> to make
          a walk-in or video visit with one of our providers.
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
