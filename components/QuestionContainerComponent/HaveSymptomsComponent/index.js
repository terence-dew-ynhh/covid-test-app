import { useState, useEffect } from 'react';
import styles from './HaveSymptomsComponent.module.css';
import oeText from './havesymptoms.json';

const HaveSymptomsComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  overEighteen,
  isSpanish,
  setRiskGroup
}) => {
  const [isOver18, setIsOver18] = useState(true);

  useEffect(() => {
    isPrevEnabled(true);
    isDoneEnabled(false);
  }, []);

  let OEText = isSpanish ? oeText.sp : oeText.en;

  let checkboxesArray = [
    'Sickle Cell Disease',
    'Down Syndrome',
    'End Stage Kidney Disease on Dialysis ',
    'Active Cancer Treatment',
    'Solid Organ Transplant',
    "16 or 17 year old pediatric patient with high risk conditions",
  ];

  let checkboxesArrayEsp = [
    'Enfermedad de células falciformes',
    'Síndrome de Down',
    'Insuficiencia renal terminal en diálisis',
    'Tratamiento activo del cáncer',
    'Trasplante de órganos sólidos',
    "Paciente pediátrico de 16 o 17 años con condiciones de alto riesgo",
  ];

  let determinedLanguageText = isSpanish ? checkboxesArrayEsp : checkboxesArray
  let conditions = determinedLanguageText.map((checkbox, idx) => (
    <>
      <b>
        <p>- {checkbox}</p>
      </b>{' '}
    </>
  ));

  return (
    <>
      <div className={styles.question_row_item}>
        {/* <p className="banner" >
      The following questions should be answered on behalf of the individual being scheduled for vaccination. 
        </p> */}
        <br></br>
        <br></br>
        <fieldset className="radio_grp_set">
        
          <input
            id="employee_staff_check_no"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              nextPage();
              setRiskGroup(false);
            }}
          ></input>
          <label htmlFor="employee_staff_check_no"> I or the person I am scheduling on behalf of <b style={{color: "red"}}><u>DO NOT</u></b> have any of the high risk conditions listed below.</label>
          <br></br>
          <br></br>
          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={(e) => {
              nextPage(e,2);
              setRiskGroup(true);
            }}
          ></input>
          <label htmlFor="employee_staff_check_yes"> I or the person I am scheduling on behalf of <b style={{color: "red"}}><u>DO</u></b> have one or more of the high risk conditions listed below.</label>
          <br></br>
          <br></br>
          </fieldset>
          <br></br>
          <br></br>
          <fieldset>
          <legend>
            {/* {OEText[2]} */}
            {conditions}
            <a target="__blank" href="https://www.ynhhs.org/patient-care/covid-19/vaccine/kids-and-the-vaccine.aspx#conditions"><p><b>-</b> Click here for more information on pediatric high risk conditions</p></a>
            <br></br>
          </legend>
        </fieldset>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default HaveSymptomsComponent;
