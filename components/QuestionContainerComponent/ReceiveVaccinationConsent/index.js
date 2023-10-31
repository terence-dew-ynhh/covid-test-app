import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styles from './ReceiveVaccinationConsent.module.css';
import veText from './vaccineelidgibility.json';
import { TramRounded } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
  tooltip: {
    fontSize: 25
  }
}));

const ReceiveVaccinationConsent = ({
  schedulePush,
  isPrevEnabled,
  isDoneEnabled,
  isSpanish
}) => {
  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(TramRounded);
  }, []);

  const handleChecked = (e) => {
    schedulePush();
  };

  let VEText = isSpanish ? veText.sp : veText.en;

  let checkboxesArray = ['None_of_the_Above'];

  const regex = /_/gi;

  let checkboxes = checkboxesArray.map((checkbox, idx) => (
    <div className={styles.chk_row_item}>
      <label className={styles.none_label_or}> {VEText[7]}</label>
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
        {VEText[8]}
      </label>
    </div>
  ));

  return (
    <>
      <div className={styles.question_row_item}>
        <div className={styles.question_row_item_sub}>
          {/* <p className="message">{VEText[10]}</p> */}
          <fieldset>
            <legend>
              YALE NEW HAVEN HEALTH CONSENT FOR COVID-19 VACCINATION
              <br></br>
              <br></br>

              I have read or someone has read to me the 2023-2024 Vaccine Fact Sheet for the 2023-2024 mRNA Moderna Covid-19 vaccine. I understand the risks and benefits of the vaccine and I voluntarily assume responsibility for any reactions that may result from receipt of the vaccine. I have had an opportunity to ask questions regarding the vaccine and all of my questions have been answered to my satisfaction. I consent to the administration of the vaccine on behalf of myself or the person named below for whom I am the parent or legal guardian (“Ward”). I, for myself or on behalf of my Ward, and each of our respective heirs, executors, personal representatives and assigns, hereby release Yale New Haven Health, its affiliates, subsidiaries, divisions, directors, contractors, agents and employees (collectively “Released Parties”), from any and all claims arising out of, in connection with or, in any way related to my receipt and the receipt of my Ward of this or these vaccines(s). Neither the provisioning vaccination center nor any of the Released Parties shall, at any time or to any extent whatsoever, be liable, responsible, or in any way accountable for any loss, injury, death or damage suffered or sustained by any person at any time in connection with or as a result of this vaccine program or the administration of the vaccine(s) described above. My medical record may be shared with my physician or other healthcare provider and the medical record of my Ward may be shared with his/her physician or other healthcare provider.
              <br></br><br></br>
              Yale New Haven Health may use and disclose the personal and health information of myself or my Ward in order to provide treatment, receive payment for the care provided or for other healthcare operations. I acknowledge that I have received a copy of the Yale New Haven Health Notice of Privacy Practices.
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
