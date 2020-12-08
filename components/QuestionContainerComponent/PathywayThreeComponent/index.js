import { useState } from 'react';
const axios = require('axios');
import NoCovidTestComponent from './NoCovidTestComponent';
import styles from './PathywayThreeComponent.module.css'
import { useRouter } from 'next/router';


const PathywayThreeComponent = ({}) => {

  const [prevEnabled, setPrevEnabled] = useState(false);
  const [doneEnabled, setDoneEnabled] = useState(false);
  const [viewIdx, setviewIdx] = useState(0);
  const components = [NoCovidTestComponent];
  const isPrevEnabled = (isEnabled) => {
    setPrevEnabled(isEnabled);
  };

  // TODO: Yes: route to Testing website: https://ocucovidtesting.ynhhs.org/ || No: Symptom Recovery Questions


  const isDoneEnabled = (isEnabled) => {
    setDoneEnabled(isEnabled);    
  }; 

  // const nextPage = () => {
  //   let index = viewIdx <= 2 ? viewIdx + 1 : viewIdx;
  //   setviewIdx(index);
  // };

  // const prevPage = () => {
  //   let index = viewIdx > 0 ? viewIdx - 1 : viewIdx;
  //   setviewIdx(index);
  // };

  const schedulePush = () => {
    router.push('https://ocucovidtesting.ynhhs.org/');
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
        isPrevEnabled={isPrevEnabled}        
        isDoneEnabled={isDoneEnabled}
        schedulePush={schedulePush}
      />
      </div>
      <div className={styles.buttonContainer}>          
      {/* <button className="button" hidden={!prevEnabled} onClick={prevPage}>
        {`< Back`}
      </button> */}
      {/* <button className="button" hidden={!doneEnabled} onClick={schedulePush}>
        Schedule Appoinment
      </button>   */}
      </div>
    </div>
  );
};

export default PathywayThreeComponent;
