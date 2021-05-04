import { useState, useEffect } from 'react';
import styles from './ZipInputComponent.module.css';
import TextField from '@material-ui/core/TextField';
import ziText from './zipInput.json';


const PinInputComponent = ({
  nextPage,
  isPrevEnabled,
  isNextEnabled,
  isDoneEnabled,
  zipCodeInRange,
  isSpanish
}) => {
  const [zipCode, setZipCode] = useState('');
  const [isSuccess, setIsSuccess] = useState(true);

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(false);
    isNextEnabled(false);
  }, []);

  const onSubmit = async () => {
    let zipCodesList = {
      '06510': true,
      '06511': true,
      '06513': true,
      '06515': true,
      '06516': true,
      '06519': true,
    };
    if(zipCodesList[zipCode]) zipCodeInRange(true)
    else zipCodeInRange(false)

    nextPage();
  };

  let ZIText = isSpanish ? ziText.sp : ziText.en;

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
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
