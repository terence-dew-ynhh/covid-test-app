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
      '06010': true,
      '06051': true,
      '06053': true,
      '06066': true,
      '06106': true,
      '06108': true,
      '06111': true,
      '06114': true,
      '06320': true,
      '06340': true,
      '06360': true,
      '06401': true,
      '06403': true,
      '06405': true,
      '06410': true,
      '06413': true,
      '06418': true,
      '06437': true,
      '06443': true,
      '06450': true,
      '06451': true,
      '06457': true,
      '06460': true,
      '06461': true,
      '06468': true,
      '06471': true,
      '06472': true,
      '06473': true,
      '06477': true,
      '06478': true,
      '06483': true,
      '06484': true,
      '06488': true,
      '06489': true,
      '06492': true,
      '06498': true,
      '06510': true,
      '06511': true,
      '06512': true,
      '06513': true,
      '06514': true,
      '06515': true,
      '06516': true,
      '06517': true,
      '06518': true,
      '06519': true,
      '06520': true,
      '06524': true,
      '06525': true,
      '06530': true,
      '06532': true,
      '06604': true,
      '06605': true,
      '06606': true,
      '06607': true,
      '06608': true,
      '06610': true,
      '06611': true,
      '06614': true,
      '06615': true,
      '06702': true,
      '06704': true,
      '06705': true,
      '06706': true,
      '06708': true,
      '06710': true,
      '06712': true,
      '06716': true,
      '06770': true,
      '06790': true,
      '06795': true,
      '06810': true,
      '06824': true,
      '06825': true,
      '06851': true,
      '06854': true,
      '06902': true
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
