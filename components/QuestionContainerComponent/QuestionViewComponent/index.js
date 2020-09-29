import { useState } from 'react';
import AllergicEggs from '../AllergicEggsComponent';
import Antibiotic from '../AntibioticComponent';
import Chemo from '../ChemoComponent';
import Fever from '../FeverComponent';
import FluShot from '../FluShotComponent';
import GuillainBarre from '../GuillainBarreComponent';
import Consent from '../ConsentComponent';
import Pregnant from '../PregnantComponent';
import SeriousReaction from '../SeriousReactionComponent';
import styles from './QuestionViewComponent.module.css';

const QuestionViewComponent = ({
  compName,
  nextPage,
  prevPage,
  schedulePush,
  updateLocation
}) => {
  const [prevEnabled, setPrevEnabled] = useState(false);
  const [doneEnabled, setDoneEnabled] = useState(false);

  const isPrevEnabled = (isEnabled) => {
    setPrevEnabled(isEnabled);
  };

  const isDoneEnabled = (isEnabled) => {
    setDoneEnabled(isEnabled);
  };

  const setSchedulerURL = (location) => {
    updateLocation(location);
  };

  const components = {
    consent: Consent,
    allergiceggs: AllergicEggs,
    antibiotic: Antibiotic,
    chemotherapy: Chemo,
    fever: Fever,
    flushot: FluShot,
    guillainbarre: GuillainBarre,
    pregnant: Pregnant,
    seriousreaction: SeriousReaction
  };

  const ComponentName = components[compName || 'flushot'];

  return (
    <div className={styles.questionContainer}>
      <div className={styles.questionContainer}>
        <ComponentName
          nextPage={nextPage}
          isPrevEnabled={isPrevEnabled}
          isDoneEnabled={isDoneEnabled}
          setSchedulerURL={setSchedulerURL}
        />
      </div>
      <div className={styles.buttonContainer}>
        <button className="button" hidden={!prevEnabled} onClick={prevPage}>
          {`< Back`}
        </button>
        <button
          className="button choice-button"
          hidden={!doneEnabled}
          onClick={schedulePush}
        >
          Schedule Appoinment
        </button>
      </div>
    </div>
  );
};

export default QuestionViewComponent;
