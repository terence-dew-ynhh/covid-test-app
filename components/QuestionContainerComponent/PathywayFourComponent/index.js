import { useState } from 'react';
const axios = require('axios');
import SelectDepartment from '../SelectDepartmentComponent';
import ConsentComponent from '../ConsentComponent';
import NeedCovidTest from '../NeedCovidTestComponent';
import styles from './PathywayFourComponent.module.css'


const PathywayFourComponent = ({
  compName,
  nextPage,
  prevPage,
  schedulePush,
  updateLocation,
}) => {
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [doneEnabled, setDoneEnabled] = useState(false);

  const isPrevEnabled = (isEnabled) => {
    setPrevEnabled(isEnabled);
  };


  const isDoneEnabled = (isEnabled) => {
    setDoneEnabled(isEnabled);    
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
  
  const components = {
    seldept: SelectDepartment,
    needcovid: NeedCovidTest,
    consent: ConsentComponent,    
  };

  const ComponentName = components[compName || 'seldept'];

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

export default PathywayFourComponent;
