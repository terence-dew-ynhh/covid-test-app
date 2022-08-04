import styles from './SelectSymptomsComponent.module.css';
import { useState, useEffect } from 'react';

const SelectSymptoms = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  hasSymptoms,
  updateSelectionCode,
  setCondition
}) => {
  const [hasSymptomsChk, setHasSymptomsChk] = useState(false);
  const [hasSevereSymptoms, setHasSevereSymptoms] = useState(false);

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);



  let conditionLookup = {
    "BodyAches": "bodyaches",

    "PinkEye/RunnyEye(Conjunctivitis)": "conjunctivitis",

    "Cough": "cough",

    "Diarrhea": "diarrhea",

    "Fever": "fever",

    "Newlossoftasteorsmell": "losstastesmell",

    "Nausea": "nausea",

    "NewHeadaches": "newheadaches",

    "ProfoundFatigue": "profoundfatigue",

    "RunnyNose(Rhinorrhea)": "runnynose",

    "ShortnessofBreath": "shortbreath",

    "SinusCongestion": "sinuscongestion",

    'Sorethroat': "sorethroat",

    "Vomiting": "vomiting",

  }
  const toggleCheckBoxes = (checkboxesArr, isDisabled) => {
    checkboxesArr.forEach((element) => {
      let symtomsChk = document.getElementById(
        `prev_covid_${element.toLowerCase()}`
      );
      if (isDisabled) symtomsChk.checked = false;
      symtomsChk.disabled = isDisabled;
    });
  };

  const handleChecked = (e) => {
    //None of the Above
    let noneChkTravel = document.getElementById(`prev_covid_no_symp_travel`);
    let noneChkMandate = document.getElementById(`prev_covid_no_symp_mandate`);
    let noneChkExp = document.getElementById(`prev_covid_no_symp_exp`);


    // If any of the boxes are checked beside None of the Above

    if (
      !(
        e.target.id === 'prev_covid_no_symp_exp' ||
        e.target.id === 'prev_covid_no_symp_mandate' ||
        e.target.id === 'prev_covid_no_symp_travel'
      )
    ) {
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
        noneChkTravel.checked = false;
        noneChkTravel.disabled = true;

        noneChkMandate.checked = false;
        noneChkMandate.disabled = true;

        noneChkExp.checked = false;
        noneChkExp.disabled = true;

        if (shouldDisableSymp) {
          toggleCheckBoxes(checkboxesArr, true);
          setHasSymptomsChk(false);
          hasSymptoms(false);
          setHasSevereSymptoms(true);
        } else if (!shouldDisableSymp) {
          toggleCheckBoxes(checkboxesArr, false);
          setHasSevereSymptoms(false);
        }

        if (shouldDisableSev) {
          setHasSymptomsChk(true);
          setHasSevereSymptoms(false);
          hasSymptoms(true);
          let condition = e.target.value
          setCondition(conditionLookup[condition.split(' ').join('')])
          nextPage(e, 3);
          noneChkMandate.disabled = true;
          noneChkTravel.disabled = true;
          noneChkExp.disabled = true;
        } else if (!shouldDisableSev) {
          toggleCheckBoxes(severeCheckboxesArr, false);
          setHasSymptomsChk(false);
          hasSymptoms(false);
        }
      } else {
        noneChkMandate.disabled = false;
        noneChkTravel.disabled = false;
        noneChkExp.disabled = false;
        setHasSymptomsChk(false);
        hasSymptoms(false);
        setHasSevereSymptoms(false);
        isDoneEnabled(false);
      }
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
    'Shortness of Breath',
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
    'Diarrhea'
  ];

  const regex = /_/gi;
  let severeCheckboxes = severeCheckboxesArr.map((checkbox, idx) => (
    <div className="chk_row_item">
      <input
        id={`prev_covid_${checkbox.toLowerCase()}`}
        key={idx}
        type="checkbox"
        value={checkbox}
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

  let checkboxes = checkboxesArr.map((checkbox, idx) => (
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

  return (
    <>
      <div className={styles.question_row_item}>
        <p className="error" hidden={!hasSevereSymptoms}>
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
                  setHasSymptomsChk(false);
                  setHasSevereSymptoms(false);
                  updateSelectionCode('exposure');
                  nextPage(e, 2);
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
                id={`prev_covid_no_symp_mandate`}
                type="checkbox"
                key={`prev_covid_no_symp_mandate`}
                value={`prev_covid_no_symp_mandate`}
                name="symptoms"
                onChange={(e) => {
                  setHasSymptomsChk(false);
                  setHasSevereSymptoms(false);
                  updateSelectionCode('mandate');
                  nextPage(e, 2);
                }}
              ></input>
              <label
                className={styles.prev_none_label}
                htmlFor={`prev_covid_no_symp_mandate`}
              >
                I am not experiencing any symptoms and I am mandated to test by
                my employer or school
              </label>
              <br></br>
              <br></br>
              <input
                id={`prev_covid_no_symp_travel`}
                type="checkbox"
                key={`prev_covid_no_symp_travel`}
                value={`prev_covid_no_symp_travel`}
                name="symptoms"
                onChange={(e) => {
                  setHasSymptomsChk(false);
                  setHasSevereSymptoms(false);
                  updateSelectionCode('travel');
                  nextPage(e, 2);
                }}
              ></input>
              <label
                className={styles.prev_none_label}
                htmlFor={`prev_covid_no_symp_travel`}
              >
                I am not experiencing any symptoms and I am being tested for
                travel, recreational or other reasons
              </label>
            </div>
          </fieldset>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default SelectSymptoms;
