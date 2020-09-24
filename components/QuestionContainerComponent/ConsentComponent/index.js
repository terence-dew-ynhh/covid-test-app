import { useState, useEffect } from 'react';
import styles from './ConsentComponent.module.css'


 const Consent =({nextPage, isPrevEnabled, isDoneEnabled, schedulePush}) => {
  
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
          I understand that information regarding this vaccination will be copied from Epic into my occupational health record, for purposes of documenting compliance with YNHHS vaccination requirements, and I hereby consent to the disclosure of this information for such purposes.          </legend>
          <input
            id="mandated_test_check_yes"
            type="radio"
            name="mandated_test"
            onClick={() => {
              nextPage()
              setIsMandated(true);
            }}
          ></input>
          <label htmlFor="mandated_test_check_yes">I Agree</label>

          <input
            id="mandated_test_check_no"
            type="radio"
            name="mandated_test"
            onClick={() => {
              setIsMandated(false);
              schedulePush(true);
            }}
          ></input>
          <label htmlFor="mandated_test_check_no">Do Not Agree</label>
        </fieldset>        
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export default Consent;