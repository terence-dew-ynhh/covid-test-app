import styles from './SelectSymptomsComponent.module.css';
import { useState, useEffect } from 'react';

const SelectSymptoms = ({ nextPage, isPrevEnabled, isDoneEnabled, hasSymptoms }) => {
  const [hasSymptomsChk, setHasSymptomsChk] = useState(false);
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
    let noneChk = document.getElementById(`prev_covid_no_symp`);
    let noneChkExp = document.getElementById(`prev_covid_no_symp_exp`);
    if (
      (e.target.value === 'prev_covid_no_symp_exp')  &&
      e.target.checked === true
    ) {
      toggleCheckBoxes([...checkboxesArr, ...severeCheckboxesArr, `no_symp` ], true);
      setHasSymptomsChk(false);
      setHasSevereSymptoms(false);
      noneChkExp.checked = true;
      nextPage(e);
    } 
    else if (
      (e.target.value === 'prev_covid_no_symp')  &&
      e.target.checked === true
    ) {
      toggleCheckBoxes([...checkboxesArr, ...severeCheckboxesArr, 'no_symp_exp'], true);
      setHasSymptomsChk(false);
      setHasSevereSymptoms(false);
      noneChk.checked = true;
      nextPage(e);
    }
    else {
      toggleCheckBoxes([...checkboxesArr, ...severeCheckboxesArr, 'no_symp_exp', 'no_symp' ], false);
      noneChk.checked = false;
      isDoneEnabled(false);
    }

    // If any of the boxes are checked beside None of the Above

    if (!( e.target.id === 'prev_covid_no_symp_exp' ||
    e.target.id === 'prev_covid_no_symp')) {
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

        noneChkExp.checked = false;
        noneChkExp.disabled = true;
        

        if(shouldDisableSymp){
          toggleCheckBoxes(checkboxesArr, true)
          setHasSymptomsChk(false);
          hasSymptoms(false)
          setHasSevereSymptoms(true);
        }else if(!shouldDisableSymp){
          toggleCheckBoxes(checkboxesArr, false)
          setHasSevereSymptoms(false);
        }

        if(shouldDisableSev){
          toggleCheckBoxes(severeCheckboxesArr, true)
          setHasSymptomsChk(true);
          setHasSevereSymptoms(false);
          isDoneEnabled(true);
          hasSymptoms(true)
          noneChk.disabled = true;
          noneChkExp.disabled = true;
        }else if(!shouldDisableSev){
          toggleCheckBoxes(severeCheckboxesArr, false)
          setHasSymptomsChk(false);
          hasSymptoms(false);
        }
      }else{
        noneChk.disabled = false;
        noneChkExp.disabled = false;
        setHasSymptomsChk(false);
        hasSymptoms(false)
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
    'Runny Nose (Rhinorrhea)',
    'Pink Eye/Runny Eye (Conjunctivitis)',
    'Nausea',
    'Vomiting',
    'Diarrhea',
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
          handleChecked(e);
        }}
      ></input>
      <label htmlFor={`prev_covid_${checkbox.toLowerCase()}`}>
        {checkbox.replace(regex, ' ')}
      </label>
    </div>
  ));

  let checkboxes = checkboxesArr.map((checkbox, idx) =>
    
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
  );

  return (
    <>
      <div className={styles.question_row_item}>
        <p className="error" hidden={!(hasSevereSymptoms)}>
          Your symptom(s) may indicate a Medical Emergency. Call 911.
        </p>

        <div className={styles.question_row_item_sub}>
          <fieldset>
            <legend>
              <b>Required Question: </b>Do you have the following symptoms:
            </legend>
            <div className={styles.q2_grid}>{severeCheckboxes}</div>
            <div className={styles.q1_grid}>{checkboxes}</div>
            <br></br>
              <br></br>
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
        <p
          className="error"
          hidden={!(hasSymptomsChk)}
        >
          
          If you do not have a primary care provider and would like to be assessed for flu or other medical concerns, please call the YNHHS Call Center at 833-ASK-YNHH (833-275-9644) or <a target="__blank" href={"https://www.ynhhs.org/make-an-appointment/schedule-a-walk-in.aspx?utm_source=covidtesting2&utm_medium=link"}>CLICK HERE </a>
            to make a walk-in or video visit with one of our clinicians.
        </p>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default SelectSymptoms;
