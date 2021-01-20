import { useState } from 'react';
import EmployeeQuestion from '../EmployeeQuestionComponent';
import ConsentComponent from '../ConsentComponent';
import SelectSymptoms from '../SelectSymptomsComponent';
import Over18Component from '../Over18Component';
import HealthCenterComponent from '../HealthCenterComponent';
import styles from './QuestionViewComponent.module.css'


const QuestionViewComponent = ({
  compName,
  nextPage,
  prevPage,
  schedulePush,
  updateSymptoms
}) => {
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [doneEnabled, setDoneEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);

  const isPrevEnabled = (isEnabled) => {
    setPrevEnabled(isEnabled);
  };


  const isDoneEnabled = (isEnabled) => {
    setDoneEnabled(isEnabled);    
  };    
  
  const isNextEnabled = (isEnabled) => {
    setNextEnabled(isEnabled);    
  };   


  const components = {
    employee: EmployeeQuestion,
    overeighteen: Over18Component,
    symptomssel: SelectSymptoms,
    consent: ConsentComponent,  
    healthcare: HealthCenterComponent  
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
        updateSymptoms={updateSymptoms}
        
      />
      </div>
      <div className={styles.buttonContainer}>          
      <button className="button" hidden={!prevEnabled} onClick={prevPage}>
        {`< Back`}
      </button>
      <button className="button" hidden={!doneEnabled} onClick={schedulePush}>
        Schedule Appoinment
      </button>  
      <button className="button" hidden={!nextEnabled} onClick={nextPage}>
        {`Next >`}
      </button>
      </div>
    </div>
  );
};

export default QuestionViewComponent;
