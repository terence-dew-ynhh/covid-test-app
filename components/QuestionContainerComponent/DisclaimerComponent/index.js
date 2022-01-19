import { useState, useEffect } from 'react';
import styles from './DisclaimerComponent.module.css'


 const DisclaimerComponent =({nextPage, isPrevEnabled, isDoneEnabled, updateIsFiveOrBelow}) => {
  
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
        <b>• Appointment required at all locations. </b><br></br><br></br>
        <b>• Hospital Emergency Departments do not provide COVID screening tests. If you need a COVID screening test, please schedule through one of our sites.</b><br></br><br></br>
        <b>• Due to current demands for testing, results are typically available within 2 days.</b><br></br><br></br>
        <b>• Results may not be available for travel documentation.</b><br></br><br></br>
        </p>
        <fieldset className="radio_grp_set">
          <legend>
          I have read the above and wish to proceed: 
          </legend>
          <input
            id="over_eighteen"
            type="radio"
            name="over_eighteeen_ques"
            onClick={() => {
              nextPage()
            }}
          ></input>
          <label id={styles.blocking_label} htmlFor="over_eighteen">Continue</label>

          </fieldset>
      </div>

      <style jsx>{``}    
      </style>
    </>
  );
}

export default DisclaimerComponent;