import { useState, useEffect } from 'react';
import styles from './AntibioticComponent.module.css'


 const Antibiotic =({nextPage, isPrevEnabled, isDoneEnabled}) => {
  
  const [isMandated, setIsMandated] = useState(true);

  useEffect(() => {
    isPrevEnabled(false);
    isDoneEnabled(false);
  }, []);

    return (
    <>
      <div className={styles.question_row_item}>
      <p className="error" hidden={isMandated}>
          Sorry, please navigate to a public testing website to schedule your
          test.
        </p>
        <fieldset className="radio_grp_set">
          <legend>
          Are you currently taking an antibiotic for infection?
          </legend>
          <input
            id="mandated_test_check_yes"
            type="radio"
            name="mandated_test"
            onClick={() => {
              setIsMandated(false);
            }}            
          ></input>
          <label htmlFor="mandated_test_check_yes">Yes</label>

          <input
            id="mandated_test_check_no"
            type="radio"
            name="mandated_test"
            onClick={() => {
              nextPage()
              setIsMandated(true);
            }}
          ></input>
          <label htmlFor="mandated_test_check_no">No</label>
        </fieldset>        
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export default Antibiotic;