import { useState, useEffect } from 'react';
import styles from './ZipInputComponent.module.css';
import TextField from '@material-ui/core/TextField';
import zpText from './zipinput.json';


const currentAppState = async () => {

  return await fetch('/api/open')
  .then(res => res.json())
  .then(res => res.open)
  
};

const ZipInputComponent = ({
  nextPage,
  isPrevEnabled,
  isNextEnabled,
  isDoneEnabled,
  zipCodeInRange,
  isSpanish
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

  let ZPText = isSpanish ? zpText.sp : zpText.en


  const onSubmit = async (e) => {
    let zipCodesList = {
      '06513': true,
      '06512': true,
      '06511': true,
    };
    if (zipCodesList[zipCode]) {
      zipCodeInRange(true);
      nextPage(e,2);
    } else {
      zipCodeInRange(false);
      window.location.href = 'https://covidvaccine.ynhh.org/';
    }  
  };

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
            <label>{ZPText[0]}</label>
            <br></br>
            <br></br>
            <TextField
              error={!isSuccess}
              label={ZPText[0]}
              onChange={(e) => setZipCode(e.target.value)}
              variant="outlined"
              autoFocus
            />
          </div>
          <button className={styles.button} onClick={(e) => onSubmit(e)}>
          {ZPText[1]}
          </button>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default ZipInputComponent;
