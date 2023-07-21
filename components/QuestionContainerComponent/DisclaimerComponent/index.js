import { useState, useEffect } from 'react';
import styles from './DisclaimerComponent.module.css';

const DisclaimerComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateLanguage
}) => {
  const [isOver18, setIsOver18] = useState(true);
  const [isOver18andProxy, setIsOver18andProxy] = useState(true);
  useEffect(() => {
    isPrevEnabled(false);
    isDoneEnabled(false);
  }, []);

  return (
    <>
      <div className={styles.question_row_item}>
       
        <fieldset className="radio_grp_set">
          <legend>Which language would you prefer to have the webinar in?</legend>
          <input
            id="english"
            type="radio"
            name="preflanguage"
            onClick={() => {
              updateLanguage('English')
              isDoneEnabled(true);
            }}
          ></input>
          <label id={styles.blocking_label} htmlFor="english">
            English
          </label>
          <input
            id="spanish"
            type="radio"
            name="preflanguage"
            onClick={() => {
              updateLanguage('Spanish')
              isDoneEnabled(true);
            }}
          ></input>
          <label id={styles.blocking_label} htmlFor="spanish">
          Spanish
          </label>
        </fieldset>
      </div>

      <style jsx>{``}</style>
    </>
  );
};

export default DisclaimerComponent;
