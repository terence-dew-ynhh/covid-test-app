import { useState, useEffect } from 'react';
import styles from './PedThirdDoseComponent.module.css';
import oeText from './thirddose.json';

const PedThirdDoseComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  isSpanish,
  setImmunocompromised,
  isOver18
}) => {
  useEffect(() => {
    isPrevEnabled(true);
    isDoneEnabled(false);
  }, []);

  const [meetsCriteria, setMeetsCriteria] = useState(true);
  let OEText = isSpanish ? oeText.sp : oeText.en;

  return (
    <>
      <div className={styles.question_row_item}>
        <br></br>
        <br></br>
        <p className="error" hidden={meetsCriteria}>
          Yale New Haven Health is following State of Connecticut and Centers
          for Disease Control and Prevention (CDC) guidance that allows for
          certain individuals with compromised immune systems to receive a third
          dose of either the Moderna or Pfizer COVID-19 vaccines.
          <br></br>
          <br></br>
          We will continue to update our website, ynhhs.org, regarding
          eligibility and additional guidance. Please do not contact your
          doctor’s office to request a booster if you are not currently
          eligible.
        </p>
        <fieldset className="radio_grp_set">
          <legend>
          <b>
              I attest to having one or more of the following immune
              compromising conditions:
            </b>
            <br></br>
            <br></br>- Have received cancer therapy (including chemotherapy,
            hormonal therapy, immunotherapy, surgery, and/or radiation therapy)
            for a solid tumor within one year of my initial mRNA COVID-19
            vaccine series<br></br>
            <br></br>- Have a newly diagnosed cancer or recurrent cancer with a
            treatment plan that will include chemotherapy, immunotherapy, and/or
            radiation therapy<br></br>
            <br></br>- Have a blood cancer diagnosis (for example, leukemia,
            lymphoma, myeloma, myelodysplastic syndrome, chronic
            myeloproliferative condition)<br></br>
            <br></br>- Have received a stem cell transplant or CAR T-cell
            therapy
            <br></br>
            <br></br>- Have received a solid organ transplant (such as a
            kidney or liver transplant) and am taking immune-suppressing
            medication
            <br></br>
            <br></br>- Have a moderate or severe primary immunodeficiency
            (such as DiGeorge or Wiskott-Aldrich syndrome)
            <br></br>
            <br></br>- Have a Advanced or untreated HIV disease <br></br>
            <br></br>- I am taking (or was taking at the time of my initial mRNA
            COVID-19 vaccine series) high-dose corticosteroids (at least 20 mg
            of prednisone daily) or any of the other medications on this list
            that suppress the immune system
            {' '}
            <a
              target="__blank"
              href="https://mychart.ynhhs.org/mychart-prd/en-US/PDF/CDCMedImmunoBoosterDose.pdf"
            >
               on this list
            </a>{' '}
            that suppress the immune system.<br></br>
          </legend>
          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              setImmunocompromised(true);
              if (isOver18) nextPage();
              else nextPage(e, 4);
            }}
          ></input>
          <label htmlFor="employee_staff_check_yes">{OEText[0]}</label>
          <br></br>
          <br></br>
          <input
            id="employee_staff_check_no"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              setImmunocompromised(false);
              setMeetsCriteria(false);
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">{OEText[1]}</label>
        </fieldset>
        <br></br>
        <br></br>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default PedThirdDoseComponent;
