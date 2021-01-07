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

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
    isNextEnabled(false);
  }, []);

  const onSubmit = async () => {
    let isValid;

    verifyPin(pin).then((data) => {
      console.log(data);

      if(!data.overCount){
      isValid = data.isValid;
      setIsSuccess(isValid);
      }else{
        setIsOverAttempts(true);
      }

      if (isValid) nextPage(null);
    });
  };

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
            <p className="error" hidden={isSuccess}>
              Invalid Pin Number
            </p>
            <p className="error" hidden={!isOverAttempts}>
              {`Sorry, ${department} doesn’t have any additional open slots available.`} 
            </p>
            <label>Enter Employer Pin:</label>
            <br></br>
            <br></br>
            <TextField
              error={!isSuccess}
              label="Enter Your Department Pin"
              onChange={(e) => setPin(e.target.value)}
              variant="outlined"
            />
          </div>
          <button className={styles.button} onClick={onSubmit}>
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
