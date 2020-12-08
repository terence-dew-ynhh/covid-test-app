import { useState } from 'react';
const axios = require('axios');
import CovidTestResultComponent from './CovidTestResultComponent';
import HaveSymptomsComponent from './HaveSymptomsComponent';
import Less14DaysContactComponent from './Less14DaysContactComponent';
import RecentCovidTestComponent from './RecentCovidTestComponent';
import styles from './PathywayFourComponent.module.css';

const PathywayFourComponent = ({
  compName,
  nextPage,
  prevPage,
  schedulePush,
  updateLocation
}) => {
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [doneEnabled, setDoneEnabled] = useState(false);
  const components = [
    Less14DaysContactComponent,
    RecentCovidTestComponent,
    CovidTestResultComponent,
    HaveSymptomsComponent
  ];

  // TODO: #1 Yes: Next || No: Message
  // TODO: #2 Yes: Next || No: Message
  // TODO: #3 Positive: Switch to Path #1 || No: Next
  // TODO: #4 Yes: Switch to Path #2 || No: Statement Component

  const isPrevEnabled = (isEnabled) => {
    setPrevEnabled(isEnabled);
  };

  const isDoneEnabled = (isEnabled) => {
    setDoneEnabled(isEnabled);
  };

  const sendData = (agency) => {
    axios
      .post('/api/responses', { agency: agency })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const setSchedulerURL = (location) => {
    updateLocation(location);
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
