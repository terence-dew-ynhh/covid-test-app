import { useState, useEffect } from 'react';
import styles from './RecentCovidTestComponent.module.css';

const RecentCovidTestComponent = ({ nextPage, isPrevEnabled, isDoneEnabled }) => {

  const [viewIdx, setviewIdx] = useState(0);
  const components = [COVIDPosResultSympComponent];


  // const isPrevEnabled = (isEnabled) => {
  //   setPrevEnabled(isEnabled);
  // };


  // const isDoneEnabled = (isEnabled) => {
  //   setDoneEnabled(isEnabled);    
  // }; 

  // const nextPage = () => {
  //   let index = viewIdx <= 2 ? viewIdx + 1 : viewIdx;
  //   setviewIdx(index);
  // };

  // const prevPage = () => {
  //   let index = viewIdx > 0 ? viewIdx - 1 : viewIdx;
  //   setviewIdx(index);
  // };

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

export default RecentCovidTestComponent;
