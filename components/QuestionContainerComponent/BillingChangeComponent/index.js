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

  
  let checkboxesArray = [
    'None_of_the_Above'
  ];
  const regex = /_/gi;

  let checkboxes = checkboxesArray.map((checkbox, idx) =>
  (<div className={styles.chk_row_item}>
    <label className={styles.none_label_or}>
      {' '}
      <b>Signature:</b><br></br>
      By checking this box, I attest that I have read the FAQ (link
            located above) and I understand that I may receive a bill for my
            COVID-19 test from Yale-New Haven Health System.
    </label>
    <input
      id={`prev_covid_${checkbox.toLowerCase()}`}
      type="checkbox"
      key={checkbox.replace(regex, ' ')}
      value={checkbox.replace(regex, ' ')}
      name="Consent"
      onChange={(e) => {
        nextPage(e)
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
        <div className={styles.q1_grid}>{checkboxes}</div>

        
      </div>

      <style jsx>{``}</style>
    </>
  );
};

export default BillingChangeComponent;
