import { useState, useEffect } from 'react';
import styles from './SevereSympStatementComponent.module.css'


 const SevereSympStatement =({nextPage, isPrevEnabled, isDoneEnabled}) => {
  
  const [isEmployee, setIsEmployee] = useState(true);

  useEffect(() => {
    isPrevEnabled(true);
    isDoneEnabled(false);
  }, []);

    return (
    <>
      <div className={styles.question_row_item}>
 
        <fieldset className="radio_grp_set">
          <legend>
          If you have the following symptoms, please proceed to Call 911
          </legend>

        </fieldset>        
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export default SevereSympStatement;