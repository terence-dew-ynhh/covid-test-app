import { useState, useEffect } from 'react';
import styles from './FluShotComponent.module.css'


 const FluShot =({nextPage, isPrevEnabled, isDoneEnabled}) => {
  
  const [isContactTracing, setIsContactTracing] = useState(true);

  useEffect(() => {
    isPrevEnabled(true);
    isDoneEnabled(false);
  }, []);

    return (
    <>
      <div className={styles.question_row_item}>
      <p className="error" hidden={isContactTracing}>
        Please contact your supervisor and do not schedule a flu shot.
        </p>
        <fieldset className="radio_grp_set">
          <legend>
          Have you ever had a Flu shot before?          
          </legend>
          <input
            id="mandated_test_check_yes"
            type="radio"
            name="mandated_test"
            onClick={() => {
              
              setIsContactTracing(false);
            }}
          ></input>
          <label htmlFor="mandated_test_check_yes">Yes</label>

          <input
            id="mandated_test_check_no"
            type="radio"
            name="mandated_test"
            onClick={() => {
              nextPage();
              setIsContactTracing(true);
            }}
          ></input>
          <label htmlFor="mandated_test_check_no">No</label>
        </fieldset>        
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export default FluShot;