import styles from './SelectLocationComponent.module.css';
import { useEffect } from 'react';

const SelectLocation = ({
  isNextEnabled,
  updateLocation,
}) => {
  const locations = [
    'Bridgeport | Milford Area',
    'Central CT',
    // 'Greenwich Hospital',
    'Lawrence and Memorial Area',
    'Lower Fairfield County | NY',
    'New Haven Area',
    'Shoreline Area',
    'Westerly Area'
  ];

  useEffect(() => {
    isNextEnabled(true);

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
            <legend>What is your preferred location?</legend>

            <div className="select-wrapper">
              <select
                onChange={(e) => updateLocation(e.target.value)}
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
