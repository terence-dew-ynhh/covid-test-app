import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { logInfo } from './actions';
import styles from './QuestionFormComponent.module.css';

const QuestionFormComponent = () => {
  const [isCovidPositive, setIsCovidPositive] = useState('');
  const [hasSymptoms, setHasSymptoms] = useState('');
  const [schedulerEndpoint, setSchedulerEndpoint] = useState(
    'Bridgeport Hospital'
  );
  const [patientData, setPatientData] = useState({
    prev_pos_test: '',
    location: ''
  });

  function submitLog(evt) {
    evt.preventDefault();

    const locationMapping = [
      {
        name: 'Bridgeport Hospital',
        link:
          'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78810&vt=2102&dept=103010111&view=plain&public=1'
      },
      {
        name: 'Bridgeport Hospital - MC',
        link:
          'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78405,78870&vt=2102&dept=103700024&view=plain&public=1'
      },
      {
        name: 'Greenwich Hospital',
        link:
          'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78403,78920,79171&vt=2102&dept=104010088&view=plain&public=1'
      },
      {
        name: 'Lawrence - Memorial Hospital',
        link:
          'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78406,79102&vt=2102&dept=108010095&view=plain&public=1'
      },
      {
        name: 'Westerly Hospital',
        link:
          'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78407&vt=2102&dept=108710069&view=plain&public=1'
      },
      {
        name: 'Yale New Haven Hospital - SRC',
        link:
          'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78402,78676,79062&vt=2102&dept=102010091&view=plain&public=1'
      },
      {
        name: 'Yale New Haven Hospital - YSC',
        link:
          'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78061,78102,78419,79061&vt=2102&dept=101010165&view=plain&public=1'
      },
      {
        name: 'Additional Employee Testing Sites',
        link:
          'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78866,79098,79099,79104,79110,79116,79159,79255&vt=2102&dept=100001318&view=plain&public=1'
      }
    ];

    locationMapping.forEach((element) => {
      if (schedulerEndpoint === element.name) {
        window.location.href = element.link;
      }
    });
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
    'Yale New Haven Hospital - YSC',
    'Additional Employee Testing Sites'
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
    'New loss of taste or smell',
    'Congestion or runny nose',
    'None_of_the_Above'
  ];
  const regex = /_/gi;
  let checkboxes = checkboxesArray.map((checkbox, idx) =>
    checkbox === 'None_of_the_Above' ? (
      <div className={styles.chk_row_item}>
        <label className={styles.none_label_or}>Or :</label>
        <input
          id={`prev_covid_${checkbox.toLowerCase()}`}
          type="checkbox"
          key={checkbox.replace(regex, ' ')}
          value={checkbox.replace(regex, ' ')}
          disabled={!(isCovidPositive === "No")}
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
          disabled={!(isCovidPositive === "No")}
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
                          setIsCovidPositive(e.target.value);
                        }}
                      ></input>
                      <label htmlFor="prev_covid_yes">Yes</label>
                      <div className="radio_row_item">
                        <input
                          id="prev_covid_no"
                          type="radio"
                          value="No"
                          name="prev_covid"
                          onClick={(e) => {
                            handleChange(e);
                            setIsCovidPositive(e.target.value);
                          }}
                        ></input>
                        <label htmlFor="prev_covid_no">No</label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <p className="error" hidden={!(isCovidPositive === "Yes")}>
                  Those that have previously tested positive are currently not
                  eligible for COVID-19 screening.
                </p>
              </div>
              <div hidden={!(isCovidPositive === "No")} className={styles.question_row_item}>
                <div className={styles.question_row_item_sub}>
                  <fieldset>
                    <legend>
                      <b>Required Question: </b>Select any of the following
                      symptoms that you are currently experiencing.
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
            <div hidden={!(hasSymptoms === "No") || !(isCovidPositive === "No") } className={styles.question_row_item}>
              <div className={styles.question_row_item_sub}>
                <fieldset>
                  <legend>What is your preferred collection location?</legend>

                  <div className="select-wrapper">
                    <select
                      onChange={(e) => setSchedulerEndpoint(e.target.value)}
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
