import { useState, useEffect } from 'react';
import styles from './ResidentQuestionComponent.module.css'


 const ResidentQuestion =({nextPage, isPrevEnabled, isDoneEnabled}) => {
  
  const [isEmployee, setIsEmployee] = useState(true);

  useEffect(() => {
    isPrevEnabled(false);
    isDoneEnabled(false);
  }, []);

  let hrefLink = "https://secure-web.cisco.com/1F1pclAK9-tvBoixpxGncgH_A-38J1EZwgNMl94oK_MQ-FA0d9LQiJFxq39I9O6QHxlpVTdrBE0LGh5LmSrjr1ZfmXik9TA-HERESMY9jOF0Hfpjy9Ba17L8UcLIUB_1Dbs39byuGvb5wgMApAUyqZIK591EX2C9yfletUs1PrDp7qcXjVsOTOW9-oHWBaHvJKwsM0zfe0z9WvjBgHZGii3BntjFFbxSArsYPOtoHUCVVzoh_lgQyqtqogdzkjXsShfc6S1Bu2xlpbT5BZdOvSPjPLHID8bd1Q_2QPrZko6_GaDMcXz7cdAFux6wowZF_3ql3vmGIsfqD6kDIXnreYf8lqzMhL_vwShGWoBOqDOqrGS8Td9e53Ffw0wCl8ro50ydpcG1qkM8afSbzVYVnvQ/https%3A%2F%2Fmycharger.newhaven.edu%2Fweb%2Fmycharger%2Fcovid-19-testing-information"

    return (
    <>
      <div className={styles.question_row_item}>
      <p className="error" hidden={isEmployee}>
      Testing is only available to residential students of the CCSU. Commuter students are required to test weekly in the Beckerman Recreation Center. Schedule your appointment <a href={hrefLink}>here</a>
        </p>
        <fieldset className="radio_grp_set">
          <legend>
          Are you an active, residential student at the CCSU?
          </legend>
          <input
            id="employee_staff_check_yes"
            type="radio"
            name="employee_staff"
            onClick={() => {
              nextPage()
              setIsEmployee(true);
            }}
          ></input>
          <label htmlFor="employee_staff_check_yes">Yes</label>

          <input
            id="employee_staff_check_no"
            type="radio"
            name="employee_staff"
            onClick={() => {
              setIsEmployee(false);
            }}
          ></input>
          <label htmlFor="employee_staff_check_no">No</label>
        </fieldset>        
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export default ResidentQuestion;