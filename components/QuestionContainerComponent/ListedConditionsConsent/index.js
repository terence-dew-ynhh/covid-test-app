import { useState, useEffect } from 'react';
import styles from './ListedConditionsConsent.module.css';

const ListedConditionsConsent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateField,
  schedulePush
}) => {

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  const handleChecked = (e) => {
    nextPage(e);
  };

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
      <label
        // className={styles.prev_none_label}
        htmlFor={`prev_covid_${checkbox.toLowerCase()}`}
      >
        {'Acknowledge'}
      </label>
    </div>
  ));

  return (
    <>
      <div className={styles.question_row_item}>
        <div className={styles.question_row_item_sub}>
          <fieldset>
            <legend>
              Listed below are some conditions/situations where you may want to
              have a discussion with a care provider prior to receiving the
              Covid-19 Vaccine. You are eligible for the vaccine, even if these
              apply to you, so you will be able to continue on to schedule an
              appointment. If you would like to wait to schedule your vaccine
              appointment until you speak to a provider, that is up to you.
              <br></br>
              <br></br>- You are or could be currently pregnant, or planning to
              be pregnant in the next 3 months. (Person receiving vaccination
              should speak with: Obstetrician/Midwife)
              <br></br>
              <br></br>- You are currently breastfeeding (Person receiving
              vaccination should speak with: Obstetrician/Midwife/Pediatrician)
              <br></br>
              <br></br>- You had an anaphylactic or other severe reaction to any
              type of vaccine, injectable drug, or food in the past. (Person
              receiving vaccination should speak with: Primary Care/Allergist)
              <br></br>
              <br></br>- You have a severe allergy requiriing you to carry an
              Epi-Pen. (Person receiving vaccination should speak with: Primary
              Care Provider/ Allergist)
              <br></br>
              <br></br>- You have a serious bleeding disorder (such as
              hemophilia), very low platelets (less than 50,000) or are on an
              anti-coagulant ("blood thinner")?
              <br></br>
              <br></br>
              <b>
                Please note: Immunocompromised persons may not be adequately
                develop an immune response to the vaccine but will be offered
                it.
              </b>
            </legend>
            <div className={styles.q1_grid}>{checkboxes}</div>
          </fieldset>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default ListedConditionsConsent;
