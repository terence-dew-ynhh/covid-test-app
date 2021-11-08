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
      nextPage();
    }    
};


  let checkboxesArray = [
    'None_of_the_Above'
  ];

  const regex = /_/gi;

  let checkboxes = checkboxesArray.map((checkbox, idx) =>
      (<div className={styles.chk_row_item}>
        <label className={styles.none_label_or}>
          {' '}
          <b>Confirm:</b><br></br>
          </label> 
        <input
          id={`prev_covid_${checkbox.toLowerCase()}`}
          type="checkbox"
          key={checkbox.replace(regex, ' ')}
          value={checkbox.replace(regex, ' ')}
          name="Consent"
          onChange={(e) => {
            handleChecked(e);
          }}
        ></input>
        <label
          className={styles.prev_none_label}
          htmlFor={`prev_covid_${checkbox.toLowerCase()}`}
        >
          {'By checking this box I agree to the above'}
        </label>
        </div>) );


  return (
    <>
      <div className={styles.question_row_item}>

        <div className={styles.question_row_item_sub}>
          <fieldset>
            <legend>   
            I confirm that I am a member of the Mohegan Tribal Health Department and I have the appropriate approvals to make this appointment.   
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
