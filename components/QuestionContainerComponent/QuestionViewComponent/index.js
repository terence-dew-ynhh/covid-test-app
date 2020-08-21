import { useState, useEffect } from 'react';
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
  const [age, setAge] = useState(0);
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [nextEnabled, setNextEnabled] = useState(false);
  const [doneEnabled, setDoneEnabled] = useState(false);

  useEffect(() => {
    setAge(18);
  }, []);

  const isPrevEnabled = (isEnabled) => {
    setPrevEnabled(isEnabled);
  };

  const isNextEnabled = (isEnabled,age) => {
    setAge(age);
    setNextEnabled(isEnabled);
  };

  const isDoneEnabled = (isEnabled) => {
    setDoneEnabled(isEnabled);    
  }; 
  
  const setSchedulerURL = (location) => {updateLocation(location)};

  const updateField = async (field, fieldVal) => {
    console.log(fieldVal)
    const action = 'post';
    const res = await fetch('/api/responses', {
      method: action,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({'uuid':uuid, 'field':field, 'fieldVal': fieldVal})
    })
  }

  const updateAndProgress = (e) => {
    const patientAgeData = age;
    updateField('age', patientAgeData);
    
    if(patientAgeData > 17 && patientAgeData <= 85){ nextPage();}
    else {schedulePush(true);}
  }
  
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
        setSchedulerURL={setSchedulerURL}
        uuid={uuid}
        updateField={updateField}
        schedulePush ={schedulePush}  
      />
      </div>
      <div className={styles.buttonContainer}>              
      <button className="button" hidden={!prevEnabled} onClick={ e => compName === 'hepatitis' ? prevPage(e,2) : prevPage(e) }>
        {`< Back`}
      </button>
      <button className="button" hidden={!nextEnabled} onClick={(e) => updateAndProgress(e)}>
      {/* <button className="button" hidden={!nextEnabled} onClick={nextPage}> */}

        {`Next >`}
      </button>  
      <button className="button" hidden={!doneEnabled} onClick={() => schedulePush(false)}>
        Schedule Appoinment
      </button>  
      </div>
    </div>
  );
};

export default QuestionViewComponent;

