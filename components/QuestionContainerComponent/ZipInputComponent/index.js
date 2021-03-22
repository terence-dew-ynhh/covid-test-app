import { useState, useEffect } from 'react';
import styles from './ZipInputComponent.module.css';
import TextField from '@material-ui/core/TextField';

const currentAppState = async () => {

  return await fetch('/api/appstate')
  .then(res => res.json())
  .then(res => res.open)
  
};

const ZipInputComponent = ({
  nextPage,
  isPrevEnabled,
  isNextEnabled,
  isDoneEnabled,
  verifyPin,
  department,
  zipCodeInRange
}) => {
  const [zipCode, setZipCode] = useState('');
  const [applicationOn, setApplicationOn] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
    isNextEnabled(false);
    currentAppState().then(appFlag => setApplicationOn(appFlag));
  }, [currentAppState, setApplicationOn]);

  const onSubmit = async (e) => {
    let zipCodesList = {
      '06513': true,
      '06512': true,
      '06511': true,
      '06519': true,
      '06516': true,
      '06515': true,
      '06405': true,
      '06510': true
    };
    if (zipCodesList[zipCode]) {
      zipCodeInRange(true);
      nextPage(e,2);
    } else {
      zipCodeInRange(false);
      if(applicationOn) nextPage(e,2);
      else nextPage();
    }

    
  };

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
            {/* <p className="error" hidden={(attempts == 0) || isSuccess}>
              Invalid Pin Number
            </p>
            <p className="error" hidden={!isOverAttempts}>
              {`Sorry, ${department} doesn’t have any additional open slots available.`} 
            </p>
            <p className="error" hidden={!(attempts == 0)}>
              Number of Allowed Attempts Exceeded.
            </p> */}
            <label>Enter Your Zip Code:</label>
            <br></br>
            <br></br>
            <TextField
              error={!isSuccess}
              label="Enter Your Zip Code:"
              onChange={(e) => setZipCode(e.target.value)}
              variant="outlined"
              autoFocus
            />
          </div>
          <button className={styles.button} onClick={(e) => onSubmit(e)}>
            {`Submit`}
          </button>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default ZipInputComponent;
