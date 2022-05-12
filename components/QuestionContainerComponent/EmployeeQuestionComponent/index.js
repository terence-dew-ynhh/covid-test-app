import { useState, useEffect } from 'react';
import styles from './EmployeeQuestionComponent.module.css';

const EmployeeQuestion = ({ nextPage, isPrevEnabled, isDoneEnabled }) => {
  const [isEmployee, setIsEmployee] = useState(true);

  useEffect(() => {
    isPrevEnabled(false);
    isDoneEnabled(false);
  }, []);

  return (
    <>
      <div className={styles.question_row_item}>
        <p className="error" hidden={isEmployee}>
          Thank you for your interest in Easy Care, you are not eligible for
          this service at this time. If you need assistance finding care please
          call 833-ASK-YNHH (833-275-9644) or visit{' '}
          <a href="https://www.ynhhs.org/get-care-now" target={'_blank'}>
            Get Care Now (ynhhs.org)
          </a>
          .
        </p>
        <fieldset className="radio_grp_set">
          <legend><b>
            Check your eligibility for Easy Care, please select one of the
            following:</b>
          </legend>
          <br></br>
          <br></br>
          <input
            id="employee_staff_check_ec"
            type="radio"
            name="employee_staff"
            onClick={() => {
              nextPage();
              setIsEmployee(true);
            }}
          ></input>
          <label htmlFor="employee_staff_check_ec">
            I am Yale-New Haven Health System employee seeking care at EASY
            CARE, Monday – Friday from 8am-4pm
          </label>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <input
            id="employee_staff_check_empvirt"
            type="radio"
            name="employee_staff"
            onClick={() => {
              location.href = "https://www.ynhhs.org/OnDemand"
            }}
          ></input>
          <label htmlFor="employee_staff_check_empvirt">
            I am a Yale-New Haven Health System employee or non-employee
            seeking VIRTUAL care Monday – Friday from 4pm-8pm, or
            Saturday-Sunday 8am-8pm
          </label>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <input
            id="employee_staff_check_empip"
            type="radio"
            name="employee_staff"
            onClick={() => {
              location.href = "https://www.ynhhs.org/locations/appointment?id=33F4FE81BFEB4F459632C0499E54AF8A&dep=204440001&dt=2022-05-09"
            }}
          ></input>
          <label htmlFor="employee_staff_check_empip">
            I am a Yale-New Haven Health System employee or non-employee
            seeking IN PERSON care Monday – Friday from 4pm-7:30pm, or Saturday
            7:30am-4pm
          </label>
        </fieldset>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default EmployeeQuestion;
