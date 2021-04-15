import { useState, useEffect } from 'react';
import styles from './SevereSympStatementComponent.module.css';

const SevereSympStatement = ({ nextPage, isPrevEnabled, isDoneEnabled }) => {
  const [isEmployee, setIsEmployee] = useState(true);

  useEffect(() => {
    isPrevEnabled(true);
    isDoneEnabled(false);
  }, []);

  return (
    <>
      <div className={styles.question_row_item}>
        <p className="error">
          You Have an Emergencny Symptom. Call 911 instead.
        </p>
        <fieldset className="radio_grp_set">
          <legend></legend>
        </fieldset>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default SevereSympStatement;
