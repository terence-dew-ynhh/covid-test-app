import { useState } from 'react';
import CovidTestResultComponent from './CovidTestResultComponent';
import HaveSymptomsComponent from './HaveSymptomsComponent';
import Less14DaysContactComponent from './Less14DaysContactComponent';
import RecentCovidTestComponent from './RecentCovidTestComponent';
import styles from './PathywayFourComponent.module.css';

const PathywayFourComponent = ({ selectPathway, schedulePush }) => {
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [doneEnabled, setDoneEnabled] = useState(false);
  const [viewIdx, setviewIdx] = useState(0);
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

  const nextPage = (jump = 1) => {
    let index = viewIdx + jump;
    console.log(jump)
    setviewIdx(index);
  };

  const prevPage = () => {
    let index = viewIdx - 1;
    setviewIdx(index);
  };

  const setSchedulerURL = (location) => {
    updateLocation(location);
  };

  const ComponentName = components[viewIdx || 0];

  return (
    <div className={styles.questionContainer}>
      <div className={styles.questionContainer}>
        <ComponentName
          nextPage={nextPage}
          isPrevEnabled={isPrevEnabled}
          isDoneEnabled={isDoneEnabled}
          setSchedulerURL={setSchedulerURL}
          selectPathway={selectPathway}
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

export default PathywayFourComponent;
