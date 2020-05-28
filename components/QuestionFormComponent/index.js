import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { logInfo } from './actions';
import styles from './QuestionFormComponent.module.css';

const QuestionFormComponent = () => {
  const [isCovidPositive, setIsCovidPositive] = useState(false);
  const [hasSymptoms, setHasSymptoms] = useState('');
  const [schedulerEndpoint, setSchedulerEndpoint] = useState(
    'Bridgeport Hospital'
  );
  const [patientData, setPatientData] = useState({
    prev_pos_test: '',
    location: ''
  });
  const router = useRouter();

  function submitLog(evt) {
    evt.preventDefault();

    router.push(
      `/scheduling?endpoint=${schedulerEndpoint}`,
      '/scheduling-testing'
    );
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

  const locationMapping = [
    'Bridgeport Hospital',
    'Bridgeport Hospital - MC',
    'Greenwich Hospital',
    'Lawrence - Memorial Hospital',
    'Westerly Hospital',
    'Yale New Haven Hospital - SRC',
    'Yale New Haven Hospital - YSC'
  ];

  const locationOptions = locationMapping.map((option, idx) => (
    <option key={idx} value={option}>
      {option}
    </option>
  ));

  const handleChange = (e) => {
    let value = patientData[e.target.name] === 'Yes' ? '' : e.target.value;

    setPatientData({ ...patientData, [e.target.name]: value });
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
    'None_of_the_Above'
  ];
  const regex = /_/gi;
  let checkboxes = checkboxesArray.map((checkbox, idx) =>
    checkbox === 'None_of_the_Above' ? (
      <div className="chk_row_item">
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
        <label htmlFor={`prev_covid_${checkbox.toLowerCase()}`}>
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
                  <fieldset>
                    <legend>
                      Have you previously tested Positive for COVID?:
                    </legend>

                    <div className="radio_row_item">
                      <input
                        id="prev_covid_yes"
                        type="radio"
                        value="Yes"
                        name="prev_covid"
                        onClick={(e) => {
                          handleChange(e);
                          setIsCovidPositive(true);
                        }}
                      ></input>
                      <label htmlFor="prev_covid_yes">Yes</label>
                      <div className="radio_row_item">
                        <input
                          defaultChecked
                          id="prev_covid_no"
                          type="radio"
                          value=""
                          name="prev_covid"
                          onClick={(e) => {
                            handleChange(e);
                            setIsCovidPositive(false);
                          }}
                        ></input>
                        <label htmlFor="prev_covid_no">No</label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <p className="error" hidden={!isCovidPositive}>
                  Those that have previously tested positive are currently not
                  eligible for COVID-19 screening.
                </p>
              </div>
              <div className={styles.question_row_item}>
                <div className={styles.question_row_item_sub}>
                  <fieldset>
                    <legend>
                      Select any of the following symptoms that you are
                      currently experiencing
                    </legend>
                    <div className={styles.q1_grid}>{checkboxes}</div>
                  </fieldset>
                </div>
                <p className="error" hidden={!(hasSymptoms === 'Yes')}>
                  If you are at work, notify your manager and leave work. If you
                  are home, stay home. Please call Occupational Health to be
                  screened and tested today at the COVID-19 Call Center at
                  203-688-1700. Please select a language then option 2 to speak
                  with occupational health.
                </p>
              </div>
            </div>
            <span className={styles.divider}></span>
            <div className={styles.question_row_item}>
              <div className={styles.question_row_item_sub}>
                <fieldset>
                  <legend>What is your preferred collection location?</legend>

                  <div className="select-wrapper">
                    <select
                      onChange={(e) => setSchedulerEndpoint(e.target.value)}
                      disabled={isCovidPositive}
                      className="select"
                    >
                      {locationOptions}
                    </select>
                  </div>
                </fieldset>
              </div>
            </div>
            <div className={styles.question_row_item}>
              <div className={styles.question_row_item_sub}>
                <button
                  hidden={!(isCovidPositive === false && hasSymptoms === 'No')}
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
