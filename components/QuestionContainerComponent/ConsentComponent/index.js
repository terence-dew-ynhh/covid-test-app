import { useState, useEffect } from 'react';
import styles from './ConsentComponent.module.css'


const Consent = ({ nextPage, isPrevEnabled, isDoneEnabled, schedulePush }) => {

  const [isMandated, setIsMandated] = useState(true);

  useEffect(() => {
    isPrevEnabled(true);
    isDoneEnabled(false);
  }, []);

  return (
    <>
      <div className={styles.question_row_item}>
        <p className="error" hidden={isMandated}>
          Sorry, please navigate to a public testing website to schedule your
          vaccination.
        </p>
        <fieldset className="radio_grp_set">
          <legend>
          I understand that I am scheduling an appointment to receive the Flu shot at a YNHHS site. As such, I consent to my immunization records being shared with and retained in my Occupational Health records and, if applicable, my Epic electronic health records at YNHHS. Upon consenting, this immunization record will be available to my health care providers, and I hereby consent to the disclosure of this information.</legend>
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