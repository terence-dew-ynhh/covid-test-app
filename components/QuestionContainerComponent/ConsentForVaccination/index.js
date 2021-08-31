import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './ConsentForVaccination.module.css';
import veText from './vaccineelidgibility.json';
import { TramRounded } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  tooltip: {
    fontSize: 25
  }
}));

const ReceiveVaccinationConsent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  isSpanish
}) => {
  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(TramRounded);
  }, []);

  const handleChecked = (e) => {
    isDoneEnabled(true);
  };

  let VEText = isSpanish ? veText.sp : veText.en;

  let checkboxesArray = ['None_of_the_Above'];

  const regex = /_/gi;

  let checkboxes = checkboxesArray.map((checkbox, idx) => (
    <div className={styles.chk_row_item}>
      <label className={styles.none_label_or}></label>
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
        {VEText[1]}
      </label>
    </div>
  ));

  return (
    <>
      <div className={styles.question_row_item}>
        <div className={styles.question_row_item_sub}>
          <fieldset>
            <legend>
              {VEText[0]}        
              <br></br><br></br>
              <a target="_blank" href="https://www.cdc.gov/vaccines/hcp/vis/vis-statements/flu.pdf">Vaccine Information Statement</a>
            </legend>
            <div className={styles.q1_grid}>{checkboxes}</div>
          </fieldset>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default ReceiveVaccinationConsent;
