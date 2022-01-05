import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './ReceiveVaccinationConsent.module.css';
import { TramRounded } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  tooltip: {
    fontSize: 25
  }
}));

const ReceiveBoosterConsent = ({
  nextPage,
  isPrevEnabled,
  schedulePush
}) => {
  useEffect(() => {
    isPrevEnabled(true);
  }, []);

  const handleChecked = (e) => {
    schedulePush();
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
          I confirm that I am an employee of the City of New Haven and I have the appropriate approvals to make this appointment.
              <br></br>
              <br></br>
              This testing is being performed because I have a COVID-19 vaccine exemption and I am required to have weekly COVID-19 testing.
            </legend>
            <div className={styles.q1_grid}>{checkboxes}</div>
          </fieldset>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default ReceiveBoosterConsent;
