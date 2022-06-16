import { useState, useEffect } from 'react';
import styles from './Over18Component.module.css'


 const Over18Component =({nextPage, isPrevEnabled, isDoneEnabled, updateIsFiveOrBelow}) => {
  
  const [isOver18, setIsOver18] = useState(true);
  useEffect(() => {
    isPrevEnabled(true);
    isDoneEnabled(false);
  }, []);

    return (
    <>
      <div className={styles.question_row_item}>
      <p className="error" hidden={isOver18}>
      If you are under the age of 18, a parent or guardian is required to schedule this appointment.
        </p>
        
        <fieldset className="radio_grp_set">
          <legend>
          Are you over the age of 18? 
          </legend>
          <input
            id="over_eighteen"
            type="radio"
            name="over_eighteeen_ques"
            onClick={() => {
              nextPage()
            }}
          ></input>
          <label id={styles.blocking_label} htmlFor="over_eighteen">I am 18 years of age or over</label>
          <input
            id="under_eighteen"
            type="radio"
            name="over_eighteeen_ques"
            onClick={() => {
              setIsOver18(false);
            }}
          ></input>
          <label id={styles.blocking_label} htmlFor="under_eighteen">I am under the age of 18</label>
         
        </fieldset>        
      </div>
      <style jsx>{``}    
      </style>
    </>
  );
}

export default Over18Component;