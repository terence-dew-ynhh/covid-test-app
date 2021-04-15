import { useState } from 'react';
import EmployeeQuestion from '../EmployeeQuestionComponent';
import SelectSymptoms from '../SelectSymptomsComponent';
import SevereSympStatement from '../SevereSympStatementComponent';
import RequireCovidTestingComponent from '../RequireCovidTestingComponent';
import OutOfWorkConsentComponent from '../OutOfWorkConsentComponent'
import PossibleFluConsent from '../PossibleFluConsentComponent'
import styles from './QuestionViewComponent.module.css'


const QuestionViewComponent = ({
  compName,
  nextPage,
  prevPage,
  schedulePush,
  updateLocation
}) => {
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [doneEnabled, setDoneEnabled] = useState(false);

  const isPrevEnabled = (isEnabled) => {
    setPrevEnabled(isEnabled);
  };


  const isDoneEnabled = (isEnabled) => {
    setDoneEnabled(isEnabled);    
  };     

  const setSchedulerURL = (location) => {updateLocation(location)};
  
  const components = {
    employee: EmployeeQuestion,
    needcovidtesting: RequireCovidTestingComponent,
    symptomssel: SelectSymptoms,
    sevsymptomsstatment: SevereSympStatement,
    symptomsstatment: OutOfWorkConsentComponent,
    consent:PossibleFluConsent
  };

  const ComponentName = components[compName || 'employee'];

  return (
    <div className={styles.questionContainer}>
      <div className={styles.questionContainer}>
      <ComponentName
        nextPage={nextPage}
        isPrevEnabled={isPrevEnabled}        
        isDoneEnabled={isDoneEnabled}
        setSchedulerURL={setSchedulerURL}
        schedulePush={schedulePush}
      />
      </div>
      <div className={styles.buttonContainer}>          
      <button className="button" hidden={!prevEnabled} onClick={prevPage}>
        {`< Back`}
      </button>
      <button className="button" hidden={!doneEnabled} onClick={schedulePush}>
        Schedule Appoinment
      </button>  
      </div>
    </div>
  );
};

export default QuestionViewComponent;