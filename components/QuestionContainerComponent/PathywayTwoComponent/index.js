import { useState } from 'react';
const axios = require('axios');
import COVIDNegResultSympComponent from './COVIDNegResultSympComponent';
import styles from './PathywayTwoComponent.module.css'


const PathywayTwoComponent = ({
  compName,
  nextPage,
  prevPage,
  schedulePush,
  updateLocation,
}) => {
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [doneEnabled, setDoneEnabled] = useState(false);
  const [viewIdx, setviewIdx] = useState(0);
  const components = [COVIDNegResultSympComponent];
  const isPrevEnabled = (isEnabled) => {
    setPrevEnabled(isEnabled);
  };

    // TODO: Click Consent in COVIDNegResultSympComponent route to the data collection page


  const isDoneEnabled = (isEnabled) => {
    setDoneEnabled(isEnabled);    
  }; 

  // const schedulePush = () => {
  //   router.push(`/scheduling`, '/scheduling');
  // };
  
  
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
        nextPage={nextPage}
        isPrevEnabled={isPrevEnabled}        
        isDoneEnabled={isDoneEnabled}
        setSchedulerURL={setSchedulerURL}
        schedulePush={schedulePush}
        sendData={sendData}
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


export default PathywayTwoComponent;
