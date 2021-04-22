import styles from './SelectLocationComponent.module.css';
import { useEffect } from 'react';

const SelectLocation = ({
  isPrevEnabled,
  isDoneEnabled,
  setSchedulerURL,
  nextPage
}) => {
  const locations = [
    'Please Select Option Below',
    'Approved Travel for Mohegan Sun Employees',
    'Public Health Official - Appt Scheduling'
  ];

  useEffect(() => {
    isPrevEnabled(true);
    isDoneEnabled(false);
  }, []);

  const locationOptions = locations.map((option, idx) => (
    <option key={idx} value={idx}>
      {option}
    </option>
  ));

  const optionSelected = (e) => {
    console.log(e.target.value);

    if (e.target.value == 1) {
      setSchedulerURL(e.target.value);
      isDoneEnabled(true);
    } else if (e.target.value == 2) {
      nextPage();
    } else {
      isDoneEnabled(false);
    }
  };

  return (
    <>
      <div className={styles.question_row_item}>
        <div className={styles.question_row_item_sub}>
          <fieldset>
            <legend>Who is scheduling this test?</legend>

            <div className="select-wrapper">
              <select onChange={(e) => optionSelected(e)} className="select">
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
