import React, { useState } from 'react';
import styles from './QuestionFormComponent.module.css';

const QuestionFormComponent = () => {
  const [schedulerEndpoint, setSchedulerEndpoint] = useState(
    'Bridgeport Hospital'
  );
  const [patientData, setPatientData] = useState({
    prev_pos_test: '',
    location: ''
  });

  function submitLog(evt) {
    evt.preventDefault();

  }

    

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
        setHasSymptoms('Yes');
      } else {
        noneChk.disabled = false;
        setHasSymptoms('');
      }
    }
  };

  

  const handleChange = (e) => {
    let value = patientData[e.target.name] === 'Yes' ? '' : e.target.value;

    setPatientData({ ...patientData, [e.target.name]: value });
  };

  

  return (
    <>
      <h1 className="title">We need to collect some more information.</h1>

      <p className="description">
        Details will be confirmed on site at your visit.
      </p>
      <div className={styles.questionContainer}>
        <form
          onSubmit={(e) => submitLog(e)}
          id="patient-form"
          name="patient-form"
        >
          <div className="question-set-container">
            <div className="question-set-container-conditions">

             
            
            <div className={styles.question_row_item}>
              <div className={styles.question_row_item_sub}>
                <button
                  hidden={!(isCovidPositive === "No" && hasSymptoms === 'No')}
                  type="submit"
                  form="patient-form"
                  className="button"
                >
                  Select Date and Time
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default QuestionFormComponent;
