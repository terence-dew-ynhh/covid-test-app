import styles from './NotOfferedComponent.module.css';
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


  let checkboxesArray = [
    'None_of_the_Above'
  ];

  const regex = /_/gi;

  let checkboxes = checkboxesArray.map((checkbox, idx) =>
  (<div className={styles.chk_row_item}>
    <label className={styles.none_label_or}>
      {' '}
      <b>Signature:</b><br></br>
      By checking this box, I attest that I am making this appointment because I am mandated to test by my employer or school or I am testing for travel or recreational purposes. I am not making this appointment because I am symptomatic or have had a confirmed exposure to COVID-19. I agree to be responsible for and to pay the total charges for this COVID-19 Test. The cost of this test will be $75.  A bill will be sent once testing is complete. <br></br><br></br>
      If the patient is a minor or under the supervision of a legal guardian, as the parent or legal guardian I will be responsible for paying for this service.
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
  </div>));


  return (
    <>
      <div className={styles.question_row_item}>

        <div className={styles.question_row_item_sub}>
          <fieldset>
            <div className={styles.q1_grid}>{checkboxes}</div>
          </fieldset>
          <p>
            To set up payment arrangements you may contact the Yale New Haven Health billing office at 1-855-547-4584.
            <br></br><br></br>If you are an employer or school and would like to contract with Yale-New Haven Health System for mandated testing requirements, please contact Veronica Fraser, Executive Director, Laboratory Services at <a href="mailto:veronica.fraser@ynhh.org" target={"_blank"}>veronica.fraser@ynhh.org</a>.
            <br></br><br></br>Below is a list of other options to consider if you need this type of testing:<br></br><br></br>

            Connecticut: <br></br>
            <a href="https://portal.ct.gov/Coronavirus/TestingSiteListings" target={"_blank"}>TestingSiteListings(ct.gov)</a>
            <a href="https://portal.ct.gov/Coronavirus/Covid-19-Knowledge-Base/State-Supported-COVID-Testing-Sites" target={"_blank"}>Free of Cost COVID Testing Sites (ct.gov)</a>
            <br></br><br></br>
            New York: <br></br>
            <a href="https://coronavirus.health.ny.gov/find-test-site-near-you" target={"_blank"}>Find a Test Site Near You | Department of Health (ny.gov)</a>
            <br></br><br></br>
            Rhode Island: <br></br>
            <a href="https://covid.ri.gov/testing" target={"_blank"}>COVID-19 Testing in Rhode Island | RI COVID-19 Information Portal</a>
            <br></br><br></br>
          </p>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default ConsentComponent;
