import { useState, useEffect } from 'react';
import styles from './AgeQuestionComponent.module.css'


 const AgeQuestionComponent =({nextPage, isPrevEnabled, isNextEnabled, isDoneEnabled}) => {
  
  const [isEmployee, setIsEmployee] = useState(true);
  const [ageCount, setAgeCount] = useState(18);

  useEffect(() => {
    isPrevEnabled(false);
    isDoneEnabled(false);
    isNextEnabled(true);
  }, []);



  const ageChanged = (e) =>{
    if (e.target.value >= 0 && e.target.value <= 120 ) setAgeCount(e.target.value)
      
    
    if(e.target.value > 17) isNextEnabled(true,ageCount)
    else isNextEnabled(false,ageCount)
  }

    return (
    <>
      <div className={styles.question_row_item}>
      {/* <p className="error" hidden={isEmployee}>
        </p> */}
        <fieldset className="radio_grp_set">
          <legend>
          How old are you?
          </legend>
          <label htmlFor="employee_staff_check_yes">Age:</label>         
          <input
            id={styles.employee_staff_check_yes}
            type="number"
            min="1"
            max="120"
            value={ageCount}
            onChange={e=> ageChanged(e)}
            name="employee_staff"            
          ></input>
        </fieldset>        
      </div>
      <style jsx>{``}</style>
    </>
  );
}

export default AgeQuestionComponent;