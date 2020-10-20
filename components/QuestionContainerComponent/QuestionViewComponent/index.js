import { useState } from 'react';
import EmployeeQuestion from '../EmployeeQuestionComponent';
import SelectSymptoms from '../SelectSymptomsComponent';
import OutOfWorkConsentComponent from '../OutOfWorkConsentComponent';
import NegResultConsentComponent from '../NegResultConsentComponent';
import RequireCovidTestingComponent from '../RequireCovidTestingComponent';
import ReturnedFromHighRiskComponent from '../ReturnedFromHighRiskComponent';
import TravelTestingComponent from '../TravelTestingComponent';
import SelectLocation from '../SelectLocationComponent';
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
    symptomssel: SelectSymptoms,
    outworkconsent: OutOfWorkConsentComponent,
    negconsent: NegResultConsentComponent,
    needcovidtesting: RequireCovidTestingComponent,
    traveltesting: TravelTestingComponent,
    returnfromhighrisk: ReturnedFromHighRiskComponent,
    location: SelectLocation
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
