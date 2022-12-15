import { useState, useEffect } from 'react';
import styles from './DisclaimerComponent.module.css';

const DisclaimerComponent = ({
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
        <p className="info">
          <b>
            •This website can be used for scheduling COVID-19 testing only.
          </b>
          <br></br>
          <br></br>
          <b>
            • If you are scheduling an appointment for a test that your provider has already placed an order for, please do not use this site to schedule. Check your e-mail or log into your MyChart and select “Schedule an Appointment”.  You may also call 833-ASK-YNHH (833-275-9644) for assistance.
          </b>
          <br></br>
          <br></br>
          <b>
            • Signs and symptoms of Covid, Flu and RSV can overlap. Please contact your primary care provider to discuss your symptoms.
          </b>
          <br></br>
          <br></br>
          <b>
            • If you do not have a primary care provider and would like testing for other respiratory viruses such as Flu or RSV, please call the YNHHS Call Center at 833-ASK-YNHH (833-275-9644) for assessment or 
            <a
              target="__blank"
              href="https://www.ynhhs.org/get-care-now"
            >
            {' '}CLICK HERE{' '}
            </a>
            to make a walk-in or video visit with one of our clinicians.  You may be able to obtain this test through our YNHHS testing sites.  The call center is open 7 days a week from 7am-7pm.
          </b>
          <br></br>
          <br></br>
          <b>
            • Hospital Emergency Departments are not able to provide COVID, Flu or RSV testing.
          </b>
          <br></br>
          <br></br>
        </p>
        <fieldset className="radio_grp_set">
          <legend>I have read the above and wish to proceed:</legend>
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

export default DisclaimerComponent;
