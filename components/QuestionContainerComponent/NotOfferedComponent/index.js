import { useState, useEffect } from 'react';
import styles from './NotOfferedComponent.module.css';

const NotOfferedComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateIsFiveOrBelow
}) => {
  const [isOver18, setIsOver18] = useState(true);
  const [isOver18andProxy, setIsOver18andProxy] = useState(true);
  useEffect(() => {
    isPrevEnabled(false)
    isDoneEnabled(false);
  }, []);

  let checkboxes = ["None"].map((checkbox, idx) =>
  (<div className={styles.chk_row_item}>
    <label className={styles.none_label_or}>
      {' '}
      <b>Signature:</b><br></br>
      By checking this box, I attest that I am making this appointment because I am mandated to test by my employer or school or I am testing for travel or recreational purposes. I am not making this appointment because I am symptomatic or have had a confirmed exposure to COVID-19. I agree to be responsible for and to pay the total charges for this COVID-19 Test. The cost of this test will be $75.  A bill will be sent once testing is complete.
    </label>
    <input
      id={`prev_covid_${checkbox.toLowerCase()}`}
      type="checkbox"
      key={checkbox.replace(/_/gi, ' ')}
      value={checkbox.replace(/_/gi, ' ')}
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
        <p className="error">
          <b>
          Yale-New Haven Health System is able to offer non-emergency/elective testing for this reason.  You are requesting this service.
          </b>
          <br></br>
          <br></br>
        </p>
        <p>
          <fieldset>
            <div className={styles.q1_grid}>{checkboxes}</div>
          </fieldset>
          <b>
            {' '}
            To set up payment arrangements you may contact the Yale New Haven Health billing office at 1-855-547-4584. <br></br><br></br>
            If you are an employer or school and would like to contract with
            Yale-New Haven Health System for mandated testing requirements,
            please contact Veronica Fraser, Executive Director, Laboratory
            Services at{' '}
            <a href="mailto:veronica.fraser@ynhh.org">
              veronica.fraser@ynhh.org
            </a>
            .
          </b>
          <br></br>
          <br></br>
          <b>
            {' '}
            Below is a list of other options to consider if you need this type
            of testing:
          </b>

          <br></br>
          <br></br>
          <b> Connecticut:</b>
          <br></br>
          <b>
            {' '}
            <a href="https://portal.ct.gov/Coronavirus/TestingSiteListings">
              TestingSiteListings(ct.gov)
            </a>
          </b>
          <br></br>
          <b>
            {' '}
            <a href="https://portal.ct.gov/Coronavirus/Covid-19-Knowledge-Base/State-Supported-COVID-Testing-Sites">
              Free of Cost COVID Testing Sites (ct.gov)
            </a>
          </b>
          <br></br>
          <br></br>
          <b> New York:</b>
          <br></br>
          <b>
            {' '}
            <a href="https://coronavirus.health.ny.gov/find-test-site-near-you">
              Find a Test Site Near You | Department of Health (ny.gov)
            </a>
          </b>
          <br></br>
          <br></br>
          <b> Rhode Island:</b>
          <br></br>
          <b>
            {' '}
            <a href="https://covid.ri.gov/testing">
              COVID-19 Testing in Rhode Island | RI COVID-19 Information Portal
            </a>
          </b>
        </p>
      </div>

      <style jsx>{``}</style>
    </>
  );
};

export default NotOfferedComponent;
