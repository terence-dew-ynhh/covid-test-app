import styles from './SelectLocationComponent.module.css';
import { useEffect } from 'react';

const SelectLocation = ({ isPrevEnabled, isDoneEnabled, setSchedulerURL }) => {
  const locations = [
    'BH FLU FAIR CLINIC',
    'GH FLU FAIR CLINIC',
    'LM FLU FAIR CLINIC',
    'WH FLU FAIR CLINIC',
    'YNHH - SRC FLU FAIR CLINIC',
    'YNHH - YSC FLU FAIR CLINIC',
    'YNHH OFF SITE FLU FAIR CLINIC',
    "YALE PHYSICIAN'S BUILDING FLU FAIR CLINIC",
    'NE PRACTICES: BRIDGEPORT FLU FAIR CLINIC',
    'NE PRACTICES: NEW HAVEN FLU FAIR CLINIC',
    'NE PRACTICES: GREENWICH FLU FAIR CLINIC ',
    'NE PRACTICES: NEW LONDON FLU FAIR CLINIC',
    'LM OFFSITE FLU FAIR CLINIC'
  ];

  useEffect(() => {
    isPrevEnabled(true);
    isDoneEnabled(true);
  }, []);

  const locationOptions = locations.map((option, idx) => (
    <option key={option} value={option}>
      {option}
    </option>
  ));

  return (
    <>
      <div className={styles.question_row_item}>
        <div className={styles.question_row_item_sub}>
          <fieldset>
            <legend>What is your preferred vaccination location?</legend>

            <div className="select-wrapper">
              <select
                onChange={(e) => setSchedulerURL(e.target.value)}
                className="select"
              >
                {locationOptions}
              </select>
            </div>
          </fieldset>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default SelectLocation;
