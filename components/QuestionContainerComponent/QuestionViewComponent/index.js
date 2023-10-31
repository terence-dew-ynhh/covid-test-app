import { useState } from 'react';

import ReceiveVaccinationConsent from '../ReceiveVaccinationConsent';

import EmployeeComponent from '../EmployeeComponent';


import styles from './QuestionViewComponent.module.css';

const QuestionViewComponent = ({
  compName,
  nextPage,
  prevPage,
  schedulePush,
  setDepartment,
  verifyPin,
  isPfizer,
  pfizerSelected,
  setReccDate,
  department,
  updateAnswerData,
  updateHeader,
  isSpanish,
  zipCodeInRange,
  overEighteen,
  isOver18,
  setRiskGroup,
  setJJApproved,
  isJassenapproved,
  setImmunocompromised,
  isImmunocomp,
  setBooster,
  isBooster
}) => {
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);
  const [doneEnabled, setDoneEnabled] = useState(false);
  const components = {
    employee: EmployeeComponent,
    receivebooster: ReceiveVaccinationConsent,

  };
  const ComponentName = components[compName || 'employee'];

  const isPrevEnabled = (isEnabled) => {
    setPrevEnabled(isEnabled);
  };

  const isNextEnabled = (isEnabled) => {
    setNextEnabled(isEnabled);
  };

  const isDoneEnabled = (isEnabled) => {
    setDoneEnabled(isEnabled);
  };

  const setSchedulerURL = (location) => {
    updateLocation(location);
  };

  return (
    <div className={styles.questionContainer}>
      <div className={styles.questionContainer}>
        <ComponentName
          nextPage={nextPage}
          isPrevEnabled={isPrevEnabled}
          isNextEnabled={isNextEnabled}
          isDoneEnabled={isDoneEnabled}
          setSchedulerURL={setSchedulerURL}
          schedulePush={schedulePush}
          setDepartment={setDepartment}
          verifyPin={verifyPin}
          isPfizer={isPfizer}
          pfizerSelected={pfizerSelected}
          setReccDate={setReccDate}
          department={department}
          updateAnswerData={updateAnswerData}
          updateHeader={updateHeader}
          isSpanish={isSpanish}
          zipCodeInRange={zipCodeInRange}
          isOver18={isOver18}
          overEighteen={overEighteen}
          setRiskGroup={setRiskGroup}
          setJJApproved={setJJApproved}
          isJassenapproved={isJassenapproved}
          setImmunocompromised={setImmunocompromised}
          isImmunocomp={isImmunocomp}
          setBooster={setBooster}
          isBooster={isBooster}
        />
      </div>
      <div className={styles.buttonContainer}>
        <button className="button" hidden={!prevEnabled} onClick={prevPage}>
          {isSpanish ? `< Atrás` : `< Back`}
        </button>
        <button className="button" hidden={!nextEnabled} onClick={nextPage}>
          {isSpanish ? `Próximo >` : `Next >`}
        </button>
        <button
          className="button"
          hidden={!doneEnabled}
          onClick={() => {
            schedulePush(false);
          }}
        >
          {isSpanish ? `Programar una Cita` : `Schedule Appointment`}
        </button>
      </div>
    </div>
  );
};

export default QuestionViewComponent;
