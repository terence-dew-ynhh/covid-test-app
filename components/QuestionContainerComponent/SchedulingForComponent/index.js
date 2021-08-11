import { useState, useEffect } from 'react';
import styles from './SchedulingForComponent.module.css';

const SchedulingForComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateIsFiveOrBelow
}) => {
  const [isOver18, setIsOver18] = useState(true);
  const [isOver18andProxy, setIsOver18andProxy] = useState(true);
  useEffect(() => {
    isPrevEnabled(true);
    isDoneEnabled(false);
  }, []);

  return (
    <>
      <div className={styles.question_row_item}>
        <fieldset className="radio_grp_set">
          <legend>I am scheduling for:</legend>
          <input
            id="over_eighteen_proxy"
            type="radio"
            name="over_eighteeen_ques"
            onClick={() => {
              nextPage();
            }}
          ></input>
          <label id={styles.blocking_label} htmlFor="over_eighteen_proxy">
            Myself or someone over the age of 18
          </label>
          <input
            id="over_five_proxy"
            type="radio"
            name="over_eighteeen_ques"
            onClick={() => {
              nextPage();
            }}
          ></input>
          <label id={styles.blocking_label} htmlFor="over_five_proxy">
            Someone between the ages of 6-17 
          </label>
          <input
            id="under_five_proxy"
            type="radio"
            name="over_eighteeen_ques"
            onClick={() => {
              updateIsFiveOrBelow(true);
              nextPage();
            }}
          ></input>
          <label id={styles.blocking_label} htmlFor="under_five_proxy">
            Someone 5 years of age or
            younger
          </label>
 
        </fieldset>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default SchedulingForComponent;
