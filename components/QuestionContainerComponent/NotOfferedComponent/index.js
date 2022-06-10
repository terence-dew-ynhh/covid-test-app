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
    isDoneEnabled(false);
  }, []);

  return (
    <>
      <div className={styles.question_row_item}>
        <p className="error">
          <b>
            • Beginning June 15, 2022, federal funding is ending for COVID-19
            testing across all healthcare systems. Yale New Haven Health is not
            able to offer COVID-19 testing for the reason that you have
            indicated at this time. Please check back later for additional
            updates.
          </b>
          <br></br>
          <br></br>
        </p>
        <p>
          <b>
            {' '}
            Below is a list of other options to consider if you need this type
            of testing:
          </b>
          <br></br>
          <br></br>
          <b> Connecticut:</b>
          <br></br>
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
          <b> New York:</b>
          <br></br>
          <br></br>
          <b>
            {' '}
            <a href="https://coronavirus.health.ny.gov/find-test-site-near-you">
              Find a Test Site Near You | Department of Health (ny.gov)
            </a>
          </b>
          <br></br>
          <b> Rhode Island:</b>
          <br></br>
          <b>
            {' '}
            <a href="https://covid.ri.gov/testing">
              COVID-19 Testing in Rhode Island | RI COVID-19 Information Portal
            </a>
          </b>
          <br></br>
          <br></br>
          <b>
            {' '}
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
        </p>
      </div>

      <style jsx>{``}</style>
    </>
  );
};

export default NotOfferedComponent;
