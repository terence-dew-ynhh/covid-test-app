import styles from './SelectLocationComponent.module.css';
import { useEffect } from 'react';

const SelectLocation = ({
  isPrevEnabled,
  isDoneEnabled,
  setSchedulerURL,
}) => {
  const locations = [
    'BRIDGEPORT: 4699 Main Street, Bridgeport, CT 06606',
    'BRIDGEPORT: 267 Grant Street, Bridgeport, CT 06610',
    'FAIRFIELD: 425 Post Road, Fairfield, CT 06824',
    'GREENWICH: 77 Lafayette Place, Greenwich CT, 06830',
    'GROTON: 52 Hazelnut Hill Road, Groton, CT 06340-3268',
    'GUILFORD: Shoreline Medical Center,2nd Floor Suite 2500, 111 Goose La, Guilford, CT',
    'NEW HAVEN: Long Wharf, 150 Sargent Dr 1st Floor, New Haven, CT',
    'NEW HAVEN: North Pavilion 1st Floor Diag Radiology, 35 Park St, New Haven, CT',
    'NORTH HAVEN: Diagnostic Radiology 1st Floor, 6 Devine St, North Haven, CT ',
    'STRATFORD: 2909 Main Street, Stratford, CT 06614',
    'TRUMBULL: 5520 Park Avenue, Trumbull, CT, 06611'
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
