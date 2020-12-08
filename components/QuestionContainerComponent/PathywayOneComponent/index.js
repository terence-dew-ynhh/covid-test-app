import { useState } from 'react';
const axios = require('axios');
import COVIDPosResultSympComponent from './COVIDPosResultSympComponent';
import styles from './PathywayOneComponent.module.css'


const PathywayOneComponent = ({}) => {
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [doneEnabled, setDoneEnabled] = useState(false);
  const [viewIdx, setviewIdx] = useState(0);
  const components = [COVIDPosResultSympComponent];
  const isPrevEnabled = (isEnabled) => {
    setPrevEnabled(isEnabled);
  };


  const isDoneEnabled = (isEnabled) => {
    setDoneEnabled(isEnabled);    
  }; 

  // TODO: If Yes route to the data collection page || If No Show popup statement
  

  // const nextPage = () => {
  //   let index = viewIdx <= 2 ? viewIdx + 1 : viewIdx;
  //   setviewIdx(index);
  // };

  // const prevPage = () => {
  //   let index = viewIdx > 0 ? viewIdx - 1 : viewIdx;
  //   setviewIdx(index);
  // };

  const schedulePush = () => {
    router.push(`/scheduling`, '/scheduling');
  };
  
  
  const sendData = (agency) => {

    axios.post('/api/responses', { agency: agency })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
   };

  const setSchedulerURL = (location) => {updateLocation(location)};
  
  const ComponentName = components[0];

  return (
    <div className={styles.questionContainer}>
      <div className={styles.questionContainer}>
      <ComponentName
        // nextPage={nextPage}
        isPrevEnabled={isPrevEnabled}        
        isDoneEnabled={isDoneEnabled}
        // setSchedulerURL={setSchedulerURL}
        schedulePush={schedulePush}
        // sendData={sendData}
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
