import { useState, useEffect } from 'react';
import styles from './HealthCenterComponent.module.css';

const HealthCenterComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  schedulePush,
  isNextEnabled
}) => {
  const [hasSpokenToClinician, setHasSpokenToClinician] = useState('');

  useEffect(() => {
    isPrevEnabled(true);
    isDoneEnabled(false);
    isNextEnabled(false)
  }, []);

  return (
    <>
      <div className={styles.question_row_item}>
        <p className="error" hidden={!(hasSpokenToClinician == 'Yes')}>
          Please do not come down unless you have a scheduled appointment and
          spoken with student health services and had a visit with the nurse
          practitioner. • proceed to consent,, gather insurance info/mychart and
          schedule.
        </p>
        <p className="error" hidden={!(hasSpokenToClinician == 'No')}>
          Please call the student health center to schedule a consultation at
          203 932-7079
        </p>
        <fieldset className="radio_grp_set">
          <legend>
            Have you spoken directly with a clinician at the UNH student health
            center? This should be completed PRIOR TO scheduling a symptomatic
            test to review protocols.
          </legend>
          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={() => {
              isDoneEnabled(true);
              setHasSpokenToClinician('Yes');
            }}
          ></input>
          <label htmlFor="employee_staff_check_yes">Yes</label>

          <input
            id="employee_staff_check_no"
            type="radio"
            name="employee_staff"
            onClick={() => {
              setHasSpokenToClinician('No');
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">No</label>
        </fieldset>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default HealthCenterComponent;
