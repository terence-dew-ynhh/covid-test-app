import styles from './SelectDepartmentComponent.module.css';
import { useEffect, useState } from 'react';

const SelectLocation = ({
  isPrevEnabled,
  isDoneEnabled,
  nextPage,
  sendData
}) => {
  const [deptName, setDeptName] = useState('');

  useEffect(() => {
    isPrevEnabled(false);
    isDoneEnabled(false);
  }, []);

  const locations = [
    'Allied Universal Security Services (Medtronic)',
    'American Medical Response of CT New Haven',
    'Bethany Volunteer Fire Department Ambulance Corps',
    'Branford Fire Department',
    'New Haven Police Department',
    'Columbus House Respite Program',
    'East Haven Fire Department',
    'Guilford Fire Department',
    'Hamden Fire Department',
    'Madison Emergency Medical Services',
    'Madison Hose CompanyNo.1',
    'Madison Police Department',
    'Masonicare Front Line Worker',
    'Nelson Ambulance Service',
    'New Haven Fire Department ',
    'North Branford Police Department ',
    'North Branford Volunteer Fire Department',
    'North Haven Fire Department ',
    'North Madison Volunteer Fire Company',
    'Orange Fire Department ',
    'Orange Police Department',
    'Quinnipiac Student EMS',
    'University of New Haven Student EMS',
    'West Haven Fire Department',
    'West Haven Fire Department - Allingtown',
    'West Shore Fire Department',
    'Woodbridge Police Department',
    'Woodbridge Volunteer Fire Department',
    'Yale New Haven Sponsor Hospital Area Response Physician (SHARP) Team',
    'Yale Student EMS'
  ];

  const locationOptions = locations.map((option, idx) => (
    <option key={idx} value={option}>
      {option}
    </option>
  ));

  return (
    <>
      <div className={styles.question_row_item}>
        <div className={styles.question_row_item_sub}>
          <fieldset>
            <legend>Please select the agency that you are a part of</legend>

            <div className="select-wrapper">
              <select
                onChange={(e) => {
                  sendData(e.target.value);
                  nextPage();
                }}
                className="select"
              >
                {locationOptions}
              </select>
            </div>
            <br></br>
            <br></br>
            <div className="other-txt">
              <label>Other:</label>
              <input
                id="other"
                type="text"
                className={styles.form_input}
                name="other"
                value={deptName}
                pattern="[A-Za-z]"
                onChange={(e) => {
                  setDeptName(e.target.value.replace(/[0-9]/g, ""));
                }}              
              />
              <button
              className="button"
                onClick={(e) => {
                  sendData(deptName);
                  nextPage();
                }}
              >
                Submit
              </button>
            </div>
            <div className={styles.chk_row_item}>
              <label className={styles.none_label_or}>
                {' '}
                I am not a part of any of these agencies:
              </label>
              <input
                id="no_department_sel"
                type="checkbox"
                value={1}
                name="no_department_sel"
                onChange={(e) => {
                  var win = window.open(
                    'https://www.ynhhs.org/patient-care/covid-19/testing/testing-locations.aspx',
                    '_blank'
                  );
                  win.focus();
                }}
              ></input>
              <label
                className={styles.prev_none_label}
                htmlFor="no_department_sel"
              >
                Click here
              </label>
            </div>
          </fieldset>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default SelectLocation;
