import { useState, useEffect } from 'react';
import styles from './BillingChangeComponent.module.css';

const BillingChangeComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateIsFiveOrBelow
}) => {
  const [isOver18, setIsOver18] = useState(true);
  const [isOver18andProxy, setIsOver18andProxy] = useState(true);
  useEffect(() => {
    isPrevEnabled(true);
    isDoneEnabled(false);
  }, []);

  return (
    <>
      <div className={styles.question_row_item}>
        <p className="error">
          <b>
            • Beginning June 15, 2022, federal funding is ending for COVID-19
            testing across all healthcare systems. Yale New Haven Health will
            continue to offer COVID-19 testing at our locations, but we are
            required to change how we bill for this test.
          </b>
          <br></br>
          <br></br>
          <b>
            To read our FAQ, visit
            <a
              href="https://www.ynhhs.org/patient-care/covid-19/testing/testing-locations"
              target="__blank"
            >
              http://ynh.care/6048zkaty
            </a>
          </b>
          <br></br>
          <br></br>
        </p>
        <fieldset className="radio_grp_set">
          <legend>
            By checking this box, I attest that I have read the FAQ (link
            located above) and I understand that I may receive a bill for my
            COVID-19 test from Yale-New Haven Health System.
          </legend>
          <input
            id="over_eighteen"
            type="radio"
            name="over_eighteeen_ques"
            onClick={() => {
              nextPage();
            }}
          ></input>
          <label id={styles.blocking_label} htmlFor="over_eighteen">
            Continue
          </label>
        </fieldset>
      </div>

      <style jsx>{``}</style>
    </>
  );
};

export default BillingChangeComponent;
