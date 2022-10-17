import { useEffect } from 'react';
import styles from './ReceiveBoosterConsent.module.css';
import veText from './vaccineelidgibility.json';

const ReceiveBoosterConsent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  isSpanish
}) => {
  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(false);
  }, []);

  const handleChecked = (e) => {
    nextPage(e, 1);
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
        key={`chk-${idx}`}
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
          <p className="banner">
            This site is only for employees and affiliates of YNHHS. 
          </p>
          <br></br>
          <br></br>
          <fieldset>
            <legend>
              <b>Current Eligibility Criteria for the 2022 Covid-19 bivalent (Omicron) booster:</b>
              <br></br>
              <br></br>
              -You are eligible to receive your Covid-19 2022 bivalent (Omicron) booster if you are at least two (2) months post your initial vaccine series or your last booster
              <br></br>
              <br></br>
              -The Pfizer booster is for people ages 12 years and older, and the Moderna booster for people ages 18 years and older. 
              <br></br>
              <br></br>
              <b>You should not get the booster if you had a severe allergic reaction after a previous dose of any COVID-19 booster or to vaccine ingredients below:</b>
              <br></br>
              <br></br>
                -The <b>Moderna</b> Omicron booster contains the following ingredients: messenger ribonucleic acid (mRNA), lipids (SM-102, polyethylene glycol [PEG] 2000 dimyristoyl glycerol [DMG], cholesterol, and 1,2-distearoyl-sn-glycero-3-phosphocholine [DSPC]), tromethamine, tromethamine hydrochloride, acetic acid, sodium acetate trihydrate, and sucrose. 
              <br></br>
              <br></br>
                -The <b>Pfizer</b> Omicron booster contains the following ingredients: messenger ribonucleic acid (mRNA), lipids (((4-hydroxybutyl)azanediyl)bis(hexane-6,1-diyl)bis(2hexyldecanoate), 2 [(polyethylene glycol)-2000]-N,N-ditetradecylacetamide,1,2-Distearoyl-sn-glycero-3-phosphocholine and cholesterol), tromethamine hydrochloride, and sucrose.  

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
