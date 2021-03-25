import { useState, useEffect } from 'react';
import styles from './ZipInputComponent.module.css';
import TextField from '@material-ui/core/TextField';
import ziText from './zipInput.json';


const PinInputComponent = ({
  nextPage,
  isPrevEnabled,
  isNextEnabled,
  isDoneEnabled,
  verifyPin,
  department,
  zipCodeInRange,
  isSpanish
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

  let ZIText = isSpanish ? ziText.sp : ziText.en;


  const onSubmit = async () => {
    let zipCodesList = {
      '06511': true,
      '06512': true,
      '06513': true,
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
            <label>{`${ZIText[0]}:`}</label>
            <br></br>
            <br></br>
            <TextField
              error={!isSuccess}
              label={ZIText[0]}
              onChange={(e) => setZipCode(e.target.value)}
              variant="outlined"
              autoFocus
            />
          </div>
          <button
            className={styles.button}
            onClick={onSubmit}
          >
            {ZIText[1]}
          </button>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default PinInputComponent;
