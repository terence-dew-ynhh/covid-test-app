import { useState } from 'react';
import MandatedTest from '../MandatedTestComponent';
import EmployeeQuestionComponent from '../EmployeeQuestionComponent';
import PreviousSymptomsComponent from '../PreviousSymptomsComponent';
import SelectSymptomsComponent from '../SelectSymptomsComponent';
import SelectLocationComponent from '../SelectLocationComponent';
// TODO: import Component 
import styles from './QuestionViewComponent.module.css'


const QuestionViewComponent = ({
  compName,
  nextPage,
  prevPage,
  viewPush,
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
    employee: EmployeeQuestionComponent,
    mandated: MandatedTest,
    previoussymptoms: PreviousSymptomsComponent,
    selsymptoms:SelectSymptomsComponent,
    location: SelectLocationComponent
// TODO: add key and Component value to this object
  };

  const ComponentName = components[compName || 'mandated'];

  return (
    <div className={styles.questionContainer}>
      <div className={styles.questionContainer}>
      <ComponentName
        nextPage={nextPage}
        isPrevEnabled={isPrevEnabled}        
        isDoneEnabled={isDoneEnabled}
        setSchedulerURL={setSchedulerURL}
        viewPush={viewPush}
      />
      </div>
      <div className={styles.buttonContainer}>          
      <button className="button" hidden={!prevEnabled} onClick={prevPage}>
        {`< Back`}
      </button>
      <button className="button choice-button" hidden={!doneEnabled} onClick={viewPush}>
        Schedule Appoinment
      </button>  
      </div>
    </div>
  );
};

export default QuestionViewComponent;
