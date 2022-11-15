import { useState, useEffect } from 'react';
import styles from './ProviderOrderComponentComponent.module.css'


const ProviderOrderComponent = ({ nextPage, isPrevEnabled, isNextEnabled }) => {

  const [isEmployee, setIsEmployee] = useState(true);

  useEffect(() => {
    isPrevEnabled(true);
    isNextEnabled(false);
  }, []);

  return (
    <>
      <div className={styles.question_row_item}>
        <p className="error" hidden={isEmployee}>
          You are not able to schedule an appointment for this test using this website. If you have MyChart, please check your e-mail for a link to schedule this test.  You may also log into your MyChart page by clicking <a href="https://mychart.ynhhs.org/MyChart-PRD/Authentication/Login?">here</a> or call the YNHHS Call Center at 833-ASK-YNHH (833-275-9644) to schedule.
        </p>
        <fieldset className="radio_grp_set">
          <legend>
            Do you have an order from your provider for COVID, COVID/Flu or COVID/Flu/RSV that you are trying to schedule?
          </legend>
          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={() => {
              setIsEmployee(false);
            }}
          ></input>
          <label htmlFor="employee_staff_check_yes">Yes</label>

          <input
            id="employee_staff_check_no"
            type="radio"
            name="employee_staff"
            onClick={() => {
              nextPage()
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">No</label>
        </fieldset>
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export default ProviderOrderComponent;