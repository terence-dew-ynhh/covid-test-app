import { useState } from 'react';
import COVIDNegResultSympComponent from './COVIDNegResultSympComponent';
import styles from './PathywayTwoComponent.module.css'


const PathywayTwoComponent = ({
  selectPathway
}) => {
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [doneEnabled, setDoneEnabled] = useState(false);
  const [viewIdx, setviewIdx] = useState(0);
  const components = [COVIDNegResultSympComponent];
  const isPrevEnabled = (isEnabled) => {
    setPrevEnabled(isEnabled);
  };

    // TODO: Click Consent in COVIDNegResultSympComponent route to the data collection page

  const ComponentName = components[0];

  return (
    <div className={styles.questionContainer}>
      <div className={styles.questionContainer}>
      <ComponentName
        selectPathway={selectPathway}
      />
      </div>
      <div className={styles.buttonContainer}>          

      </div>
    </div>
  );
};


export default PathywayTwoComponent;
