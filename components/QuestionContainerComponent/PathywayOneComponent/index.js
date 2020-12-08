import { useState } from 'react';
const axios = require('axios');
import COVIDPosResultSympComponent from './COVIDPosResultSympComponent';
import styles from './PathywayOneComponent.module.css'


const PathywayOneComponent = ({selectPathway}) => {
  const router = useRouter();
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [doneEnabled, setDoneEnabled] = useState(false);
  const components = [COVIDPosResultSympComponent];
  const isPrevEnabled = (isEnabled) => {
    setPrevEnabled(isEnabled);
  };


  const isDoneEnabled = (isEnabled) => {
    setDoneEnabled(isEnabled);    
  }; 

  // TODO: If Yes route to the data collection page || If No Show popup statement
  
  const schedulePush = () => {
    router.push(`/scheduling`, '/scheduling');
  };
  
  const ComponentName = components[0];

  return (
    <div className={styles.questionContainer}>
      <div className={styles.questionContainer}>
      <ComponentName
        isPrevEnabled={isPrevEnabled}        
        isDoneEnabled={isDoneEnabled}
        selectPathway={selectPathway}
        schedulePush={schedulePush}
      />
      </div>
      <div className={styles.buttonContainer}>          
      {/* <button className="button" hidden={!prevEnabled} onClick={prevPage}>
        {`< Back`}
      </button> */}
      <button className="button" hidden={!doneEnabled} onClick={schedulePush}>
        Schedule Appoinment
      </button>  
      </div>
    </div>
  );
};

export default PathywayOneComponent;
