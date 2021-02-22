import { useState, useEffect } from 'react';
import styles from './ZipInputComponent.module.css';
import TextField from '@material-ui/core/TextField';

const PinInputComponent = ({
  nextPage,
  isPrevEnabled,
  isNextEnabled,
  isDoneEnabled,
  verifyPin,
  department,
  zipCodeInRange
}) => {
  const [zipCode, setZipCode] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);
  const [isOverAttempts, setIsOverAttempts] = useState(false);
  const [attempts, setAttempts] = useState(5);

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
    isNextEnabled(false);
  }, []);

  const onSubmit = async () => {
    let zipCodesList = {
      '06513': true,
      '06512': true,
      '06511': true,
      '06519': true,
      '06516': true,
      '06514': true,
      '06515': true,
      '06405': true,
      '06517': true,
      '06473': true,
      '06492': true,
      '06450': true,
      '06451': true,
      '06437': true,
      '06510': true,
      '06518': true,
      '06418': true,
    };
    if(zipCodesList[zipCode]) zipCodeInRange(true)
    else zipCodeInRange(false)

    nextPage();
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
          <button
            className={styles.button}
            onClick={onSubmit}
          >
            {`Submit`}
          </button>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default PinInputComponent;
