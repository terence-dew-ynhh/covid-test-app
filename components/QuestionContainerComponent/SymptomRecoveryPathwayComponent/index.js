import { useState } from 'react';
import WithinDaySelectSymptomsComponent from './WithinDaySelectSymptomsComponent';
import CurrentSelectSymptomsComponent from './CurrentSelectSymptomsComponent';
import SympImprovingOrMildComponent from './SympImprovingOrMildComponent';
import styles from './SymptomRecoveryPathwayComponent.module.css'
import {useRouter} from 'next/router'


const SymptomRecoveryPathwayComponent = ({
  schedulePush,
  pathway
}) => {
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [doneEnabled, setDoneEnabled] = useState(false);
  const [viewIdx, setviewIdx] = useState(0);
  const components = [WithinDaySelectSymptomsComponent,CurrentSelectSymptomsComponent,SympImprovingOrMildComponent];
  
  // TODO: Click Consent in COVIDNegResultSympComponent route to the data collection page

  
  const isPrevEnabled = (isEnabled) => {
    setPrevEnabled(isEnabled);
  };

  const isDoneEnabled = (isEnabled) => {
    setDoneEnabled(isEnabled);    
  }; 

  const nextPage = () => {
    let index = viewIdx + 1;
    setviewIdx(index);
  };

  const prevPage = () => {
    let index = viewIdx - 1;
    setviewIdx(index);
  };

  const pushTocontactSubmission = () => {
    const router = useRouter ();
    router.push('/submissionform');
  }

  
  const ComponentName = components[viewIdx || 0];

  return (
    <div className={styles.questionContainer}>
      <div className={styles.questionContainer}>
      <ComponentName
        nextPage={nextPage}
        prevPage={prevPage}
        isPrevEnabled={isPrevEnabled}        
        isDoneEnabled={isDoneEnabled}
        schedulePush={schedulePush}
        pushTocontactSubmission={pushTocontactSubmission}
      />
      </div>
      <div className={styles.buttonContainer}>          
      <button className="button" hidden={!prevEnabled} onClick={prevPage}>
        {`< Back`}
      </button>
      <button className="button" hidden={!doneEnabled} onClick={schedulePush}>
        Submit
      </button>  
      </div>
    </div>
  );
};


export default SymptomRecoveryPathwayComponent;
