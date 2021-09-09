import styles from './SelectLocationComponent.module.css';
import { useEffect } from 'react';

const SelectLocation = ({ isPrevEnabled, isDoneEnabled, setSchedulerURL }) => {
  const locations = [
    'Bridgeport Hospital Testing Tent',
    'Connecticut Mental Health Center',
    'Connecticut Valley Hospital',
    'New Haven Judicial District',
    'Bridgeport Judiciary',
    'Capital Region Mental Health Center',
    'Southeast Mental Health Authority',
    'Western CT Mental Health Network',
    'Bridgeport Corrections and Parole',
    'New Haven Corrections and Parole'
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
            <legend>What is your preferred collection location?</legend>

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
