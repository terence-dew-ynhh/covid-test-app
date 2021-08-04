import styles from './ConsentComponent.module.css';
import { useState, useEffect } from 'react';

const ConsentComponent = ({ nextPage, isPrevEnabled, isDoneEnabled }) => {
  const [hasConsent, setHasConsent] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  const handleChecked = (e) => {
    if (
      e.target.id === 'prev_covid_none_of_the_above' &&
      e.target.checked === true
    ) {
      checkboxesArray.forEach((element) => {
        if (!(element === 'None_of_the_Above')) {
          let symtomsChk = document.getElementById(
            `prev_covid_${element.toLowerCase()}`
          );
          symtomsChk.checked = false;
          symtomsChk.disabled = true;
        }
      });
      setHasConsent('No');
      isDoneEnabled(true);
    }

    // If any of the boxes are checked beside None of the Above

    if (!(e.target.id === 'prev_covid_none_of_the_above')) {
      let shouldDisable = false;

      checkboxesArray.forEach((element) => {
        let symptom = document.getElementById(
          `prev_covid_${element.toLowerCase()}`
        );

        if (symptom.checked === true) {
          shouldDisable = true;
        }
      });

      let noneChk = document.getElementById(`prev_covid_none_of_the_above`);
      if (shouldDisable) {
        noneChk.checked = false;
        noneChk.disabled = true;
        setHasConsent('Yes');
      } else {
        noneChk.disabled = false;
        setHasConsent('');
      }
    }
  };

  let checkboxesArray = ['None_of_the_Above'];

  const regex = /_/gi;

  let checkboxes = checkboxesArray.map((checkbox, idx) => (
    <div className={styles.chk_row_item}>
      <label className={styles.none_label_or}>
        {' '}
        <b>Signature:</b>
        <br></br>I certify that the information provided is correct to the best
        of my knowledge. I will not hold Yale New Haven Health, its health
        providers, or its employees responsible for any errors or omissions that
        I may have made in completing the information on this form. I hereby
        voluntarily consent to testing and release of information for my
        dependent or myself by Yale New Haven Health and authorize such testing
        (including, but not limited to the use of lab studies) which may have
        been ordered by its providers if I do not have an order already in hand.
      </label>
      <input
        id={`prev_covid_${checkbox.toLowerCase()}`}
        type="checkbox"
        key={checkbox.replace(regex, ' ')}
        value={checkbox.replace(regex, ' ')}
        name="Consent"
        onChange={(e) => {
          isDoneEnabled(true);
          handleChecked(e);
        }}
      ></input>
      <label
        className={styles.prev_none_label}
        htmlFor={`prev_covid_${checkbox.toLowerCase()}`}
      >
        {'By checking this box I agree to the above'}
      </label>
    </div>
  ));

  return (
    <>
      <div className={styles.question_row_item}>
        <div className={styles.question_row_item_sub}>
          <fieldset>
            <legend>
              This authorization is valid for 1 year from the date below for the
              purposes of releasing my COVID-19 test results to my
              University/employer. I understand that after I have signed this
              form, I may change my mind and cancel (revoke) this authorization
              at any time by contacting Yale New Haven Health, Health
              Information Management. Cancellation of the authorization will not
              apply to information that has already been released based on this
              authorization. I understand the information disclosed in response
              to this authorization may be subject to re-disclosure by
              recipient, and will no longer be protected under the terms of this
              authorization of by federal privacy regulations.
              <br></br>
              <br></br>I understand that this authorization is voluntary and my
              treatment by Yale New Haven Health is in no way conditioned on
              whether or not I sign this authorization and that I may refuse to
              sign it. If I do not sign this form authorizing the release of my
              COVID-19 testing results to my University/employer, I will not be
              tested for COVID-19 under the terms of the agreement between Yale
              New Haven Health and the CCSU. I understand that I may see and
              copy the information described on this form if I ask for it. There
              may a charge for copies in accordance with Connecticut law.
              <br></br>
              <br></br>
            </legend>
            <div className={styles.q1_grid}>{checkboxes}</div>
          </fieldset>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default ConsentComponent;
