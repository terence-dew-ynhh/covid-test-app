import fetch from 'isomorphic-unfetch'
import { useState } from 'react';
import AgeQuestionComponent from '../AgeQuestionComponent';
import GenderComponent from '../GenderComponent';
import HepatitisComponent from '../HepatitisComponent';
import PregnantComponent from '../PregnantComponent';
import CancerComponent from '../CancerComponent';
import HistoryComponent from '../HistoryComponent';
import TreatmentReceivedComponent from '../TreatmentReceivedComponent';
import styles from './QuestionViewComponent.module.css'


const QuestionViewComponent = ({
  compName,
  nextPage,
  prevPage,
  schedulePush,
  updateLocation,
  uuid
}) => {
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);
  const [doneEnabled, setDoneEnabled] = useState(false);
  const [pageProgress, setPageProgress] = useState(1);
  const [patientAge, setPatientAge] = useState(18);

  const isPrevEnabled = (isEnabled) => {
    setPrevEnabled(isEnabled);
  };

  const isNextEnabled = (isEnabled,age) => {
    setNextEnabled(isEnabled);
    setPatientAge(age);
  };

  const isDoneEnabled = (isEnabled) => {
    setDoneEnabled(isEnabled);    
  }; 
  
  const hasSubQuestion = () =>{
    setPageProgress(2)
  }

  
  const updateField = async (propName,propValue) => {
    const res = await fetch('http://localhost:3011/api/response', {
      method: 'post',
      body: JSON.stringify({uuid:uuid, [propName]:propValue})
    })
  }

  const setSchedulerURL = (location) => {updateLocation(location)};
  
  const components = {
    age: AgeQuestionComponent,
    treatment: TreatmentReceivedComponent,
    gender: GenderComponent,
    pregnancy: PregnantComponent,
    hepatitis: HepatitisComponent,
    cancer: CancerComponent,
    history: HistoryComponent
  };

  const ComponentName = components[compName || 'age'];

  return (
    <div className={styles.questionContainer}>
      <div className={styles.questionContainer}>
      <ComponentName
        nextPage={nextPage}
        isPrevEnabled={isPrevEnabled}
        isNextEnabled={isNextEnabled}        
        isDoneEnabled={isDoneEnabled}
        hasSubQuestion={hasSubQuestion}
        setSchedulerURL={setSchedulerURL}
        updateField={updateField}
      />
      </div>
      <div className={styles.buttonContainer}>              
      <button className="button" hidden={!prevEnabled} onClick={ e => compName === 'hepatitis' ? prevPage(e,2) : prevPage(e) }>
        {`< Back`}
      </button>
      <button className="button" hidden={!nextEnabled} onClick={() => {nextPage; updateField('age',patientAge)}}>
        {`Next >`}
      </button>  
      <button className="button" hidden={!doneEnabled} onClick={schedulePush}>
        Schedule Appoinment
      </button>  
      </div>
    </div>
  );
};

export default QuestionViewComponent;

