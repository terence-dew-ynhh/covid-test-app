import { useState } from 'react';
import ReceiveVaccinationConsent from '../ReceiveVaccinationConsent';
import EmployeeConsent from '../EmployeeConsent';
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
  isBooster,
  pediatric,
  isPediatric
}) => {
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);
  const [doneEnabled, setDoneEnabled] = useState(false);
  const components = {
    employeeconsent: EmployeeConsent,
    recvaccineconsent: ReceiveVaccinationConsent
  };
  const ComponentName = components[compName || 'pininput'];

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
