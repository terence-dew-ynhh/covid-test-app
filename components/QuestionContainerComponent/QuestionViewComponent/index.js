import { useState } from 'react';
import PriorTest from '../PriorTestQuestionComponent';
import OverEighteen from '../Over18Component';
import ConsentComponent from '../ConsentComponent';
import SelectSymptoms from '../SelectSymptomsComponent';
import SelectLocationComponent from '../SelectLocationComponent';
import styles from './QuestionViewComponent.module.css'


const QuestionViewComponent = ({
  compName,
  nextPage,
  prevPage,
  schedulePush,
  updateLocation,
  hasSymptoms
}) => {
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);
  const [doneEnabled, setDoneEnabled] = useState(false);

  const isPrevEnabled = (isEnabled) => {
    setPrevEnabled(isEnabled);
  };

  const isNextEnabled = (isEnabled) => {
    setNextEnabled(isEnabled);
  };

  const isDoneEnabled = (isEnabled) => {
    setDoneEnabled(isEnabled);    
  };     
  
  const components = {
    location: SelectLocationComponent,
    symptomssel: SelectSymptoms,
    eighteen: OverEighteen,
    consent: ConsentComponent,
    priortest: PriorTest    
  };

  const ComponentName = components[compName || 'employee'];

  return (
    <div className={styles.questionContainer}>
      <div className={styles.questionContainer}>
      <ComponentName
        nextPage={nextPage}
        isPrevEnabled={isPrevEnabled}        
        isDoneEnabled={isDoneEnabled}
        isNextEnabled={isNextEnabled}
        hasSymptoms={hasSymptoms}
        updateLocation={updateLocation}
      />
      </div>
      <div className={styles.buttonContainer}>
      <button className="button" hidden={!nextEnabled} onClick={nextPage}>
        {`Next >`}
      </button>            
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
