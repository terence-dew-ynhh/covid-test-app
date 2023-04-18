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
    isPrevEnabled(false);
    isDoneEnabled(false);
  }, []);

  return (
    <>
      <div className={styles.question_row_item}>
        <p className="error">
          <b>
            •The Public Health Emergency is ending on May 11.  Due to this, we are no longer able to offer “self-scheduling” through this website as of April 28, 2023.
          </b>
          <br></br>
          <br></br>
          <b>
            • If you are in need of testing for COVID-19, please call 833-ASK-YNHH (833-275-9644) for symptom assessment and for a COVID-19 test order to be placed if needed.
          </b>
          <br></br>
          <br></br>
          <b>
            • Most of our drive-through testing sites will be closing by the end of April.  We are still offering testing for COVID-19 at many of our community draw station locations.  If you have an order from your provider or from our call center, you may schedule an appointment by logging into your MyChart and selecting “Schedule an Appointment” or call 833-ASK-YNHH for assistance in scheduling.
          </b>
          <br></br>
          <br></br>
          <b>
            • If you do not have a primary care provider and would like testing for other respiratory viruses such as Flu or RSV, please <a
              target="__blank"
              href="https://www.ynhhs.org/get-care-now"
            >
              {' '}CLICK HERE{' '}
            </a>
            to make a walk-in or video visit with one of our clinicians.
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
