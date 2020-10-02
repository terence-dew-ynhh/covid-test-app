import styles from './SelectLocationComponent.module.css';
import { useEffect } from 'react';

const SelectLocation = ({
  isPrevEnabled,
  isDoneEnabled,
  setSchedulerURL,
}) => {
  const locations = [
    'Bridgeport Hospital',
    'Bridgeport Hospital - MC',
    'Greenwich Hospital',
    'Lawrence - Memorial Hospital',
    'Westerly Hospital',
    'Yale New Haven Hospital - SRC',
    'Yale New Haven Hospital - YSC',
    'Additional Employee Testing Sites'
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
        <p className="disclaimer">
        *For <b>EP 4-6 Contact Tracing</b> please choose <b>Yale New Haven Hospital – YSC</b> in the drop down as your preferred location
          </p>
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
