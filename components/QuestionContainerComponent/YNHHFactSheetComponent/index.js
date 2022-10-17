import { useState, useEffect } from 'react';
import styles from './YNHHFactSheetComponent.module.css';
import fsText from './ynhhfactsheet.json';

const YNHHFactSheetComponent = ({
  isPrevEnabled,
  isDoneEnabled,
  schedulePush,
}) => {
  const [isDiagnosed, setIsDiagnosed] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  let FSText = fsText.en;



  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
            <p className="error" hidden={!(isDiagnosed === 'No')}>
              {FSText[2]}
            </p>
            <fieldset>
              <legend>
                {FSText[0]}
                <br></br>
                <br></br>
                <a
                  target="__blank"
                  href="https://mychart.ynhhs.org/mychart-prd/en-US/PDF/YNHHCOVIDConsent.pdf"
                >
                  {FSText[3]}
                </a>{' '}
                <br></br>
                
              </legend>

              <div className="radio_row_item">
                <input
                  id="prev_covid_agree"
                  type="radio"
                  name="prev_covid"
                  onClick={(e) => {
                    schedulePush(e);
                  }}
                ></input>
                <label htmlFor="prev_covid_agree">{FSText[4]}</label>
              </div>
              <br></br>
              <br></br>
              <div className="radio_row_item">
                <input
                  id="prev_covid_later"
                  type="radio"
                  name="prev_covid_later"
                  onClick={(e) => {
                    schedulePush(e);
                  }}
                ></input>
                <label htmlFor="prev_covid_later">{FSText[5]}</label>
              </div>
              <br></br>
              <br></br>
              <div className="radio_row_item">
                <input
                  id="prev_covid_no"
                  type="radio"
                  value="No"
                  name="prev_covid"
                  onClick={(e) => {
                    setIsDiagnosed(e.target.value);
                  }}
                ></input>
                <label htmlFor="prev_covid_no">{FSText[6]}</label>
              </div>
            </fieldset>
          </div>
        </div>

      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default YNHHFactSheetComponent;
