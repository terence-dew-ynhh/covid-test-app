import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './EmployeeConsent.module.css';
import { TramRounded } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  tooltip: {
    fontSize: 25
  }
}));

const EmployeeConsent = ({ nextPage, isPrevEnabled }) => {
  useEffect(() => {
    isPrevEnabled(false);
  }, []);

  const handleChecked = (e) => {
    nextPage(e);
  };

  let checkboxesArray = ['None_of_the_Above'];

  const regex = /_/gi;

  let checkboxes = checkboxesArray.map((checkbox, idx) => (
    <div className={styles.chk_row_item}>
      <label className={styles.none_label_or}> Confirm: By clicking this box I agree to the above</label>
      <input
        id={`prev_covid_${checkbox.toLowerCase()}`}
        type="checkbox"
        key={checkbox.replace(regex, ' ')}
        value={checkbox.replace(regex, ' ')}
        name="Consent"
        onChange={(e) => {
          handleChecked(e);
        }}
      ></input>
      <label htmlFor={`prev_covid_${checkbox.toLowerCase()}`}>
        Confirm
      </label>
    </div>
  ));

  return (
    <>
      <div className={styles.question_row_item}>
        <div className={styles.question_row_item_sub}>
          <fieldset>
            <legend>
              I understand that by scheduling this test I will need to register
              for a MyChart account in order to get my results. Negative results
              will be available only through MyChart. I will only receive a call
              if my results are positive or invalid. You can also get your
              results by calling the COVID Call Center at 833-ASK-YNHH.
              <br></br>
              <br></br>
            </legend>
            <div className={styles.q1_grid}>{checkboxes}</div>
          </fieldset>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default EmployeeConsent;
