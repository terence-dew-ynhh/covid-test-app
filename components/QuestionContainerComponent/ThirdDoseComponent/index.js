import { useState, useEffect } from 'react';
import styles from './ThirdDoseComponent.module.css';
import oeText from './thirddose.json';

const ThirdDoseComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  isSpanish,
  setImmunocompromised,
  isImmunocomp
}) => {
  useEffect(() => {
    isPrevEnabled(true);
    isDoneEnabled(false);
  }, []);

  const [meetsCriteria, setMeetsCriteria] = useState(true)
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
            <br></br>- Receiving treatment for a blood cancer (for example,
            leukemia, lymphoma, myeloma, myelodysplastic syndrome)<br></br>
            <br></br>- Receiving treatment for a solid tumor with chemotherapy
            or immunotherapy (currently or within the last six months)<br></br>
            <br></br>- Received a stem cell transplant within the last two years
            or requiring immune-suppressing medication<br></br>
            <br></br>- Received a solid organ transplant (such as a kidney or
            liver transplant) and are taking immune-suppressing medication
            <br></br>
            <br></br>- Moderate or severe primary immunodeficiency (such as
            DiGeorge or Wiskott-Aldrich syndrome)
            <br></br>
            <br></br>- Advanced or untreated HIV disease <br></br>
            <br></br>- Taking high-dose corticosteroids (equal to at least 20 mg
            of prednisone daily) or any of the other medications{' '}
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
              nextPage();
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
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default ThirdDoseComponent;