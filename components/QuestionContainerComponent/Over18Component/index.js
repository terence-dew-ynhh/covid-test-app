import { useState, useEffect } from 'react';
import styles from './Over18Component.module.css'


 const Over18Component =({nextPage, isPrevEnabled, isDoneEnabled, updateIsFiveOrBelow}) => {
  
  const [isOver18, setIsOver18] = useState(true);
  const [isOver18andProxy, setIsOver18andProxy] = useState(true);
  useEffect(() => {
    isPrevEnabled(true);
    isDoneEnabled(false);
  }, []);

    return (
    <>
      <div className={styles.question_row_item}>
      <p className="error" hidden={isOver18}>
      If you are under the age of 18, a parent or guardian is required to schedule this appointment. We recommend contacting your medical provider directly or call the YNHHS COVID Call Center at 1-888-ASK-YNHH for a clinical assessment.
        </p>
        <p className="advisement" hidden={isOver18andProxy}>
        For any patient under the age of 18, a parent, legal guardian or designated adult is required to be present at the time of the test.        
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
          <label id={styles.blocking_label} htmlFor="over_eighteen">I am over the age of 18</label>
          <input
            id="under_eighteen"
            type="radio"
            name="over_eighteeen_ques"
            onClick={() => {
              setIsOver18(false);
            }}
          ></input>
          <label id={styles.blocking_label} htmlFor="under_eighteen">I am under the age of 18</label>
          <input
            id="over_five_proxy"
            type="radio"
            name="over_eighteeen_ques"
            onClick={() => {
              nextPage();

            }}
          ></input>
          <label id={styles.blocking_label} htmlFor="over_five_proxy">I am over the age of 18 and scheduling for someone 6 years of age and older</label>
          <input
            id="under_five_proxy"
            type="radio"
            name="over_eighteeen_ques"
            onClick={() => {
              updateIsFiveOrBelow(true)
              nextPage();
            }}
          ></input>
          <label id={styles.blocking_label} htmlFor="under_five_proxy">I am over the age of 18 and scheduling for someone 5 years of age or younger</label>

        </fieldset>        
      </div>
      <style jsx>{``}    
      </style>
    </>
  );
}

export default Over18Component;