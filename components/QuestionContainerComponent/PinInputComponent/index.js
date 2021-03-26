import { useState, useEffect } from 'react';
import styles from './PinInputComponent.module.css';
import TextField from '@material-ui/core/TextField';

const PinInputComponent = ({
  nextPage,
  isPrevEnabled,
  isNextEnabled,
  isDoneEnabled,
  verifyPin,
  department
}) => {
  const [pin, setPin] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);
  const [isOverAttempts, setIsOverAttempts] = useState(false);
  const [attempts, setAttempts]= useState(5);

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(false);
    isNextEnabled(false);
  }, []);

  const onSubmit = async () => {
    let isValid;

    verifyPin(pin).then((data) => {
      console.log(data);

      isValid = data.isValid;
      setIsSuccess(isValid);

      if (isValid) nextPage();
    });
  };

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
            <p className="error" hidden={(attempts == 0) || isSuccess}>
              Invalid Pin Number
            </p>
            <p className="error" hidden={!isOverAttempts}>
              {`Sorry, ${department} doesn’t have any additional open slots available.`} 
            </p>
            <p className="error" hidden={!(attempts == 0)}>
              Number of Allowed Attempts Exceeded.
            </p>
            <label>Enter  Pin:</label>
            <br></br>
            <br></br>
            <TextField
              error={!isSuccess}
              label="Enter Pin"
              onChange={(e) => setPin(e.target.value)}
              variant="outlined"
              autoFocus
            />
          </div>
          <button className={styles.button} hidden={(attempts == 0)} onClick={onSubmit}>
          {`Submit`}
        </button>
        </div>
      </div>
      <style jsx>{`
      
      `}</style>
    </>
  );
};

export default PinInputComponent;
