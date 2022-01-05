import { useState } from 'react';
import ReceiveVaccinationConsent from '../ReceiveVaccinationConsent';
import EmployeeConsent from '../EmployeeConsent';
import styles from './QuestionViewComponent.module.css';

const QuestionViewComponent = ({
  compName,
  nextPage,
  prevPage,
  schedulePush
}) => {
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);
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
          setSchedulerURL={setSchedulerURL}
          schedulePush={schedulePush}
        />
      </div>
      <div className={styles.buttonContainer}>
        <button className="button" hidden={!prevEnabled} onClick={prevPage}>
          {`< Back`}
        </button>
        <button className="button" hidden={!nextEnabled} onClick={nextPage}>
          {`Next >`}
        </button>
      </div>
    </div>
  );
};

export default QuestionViewComponent;
