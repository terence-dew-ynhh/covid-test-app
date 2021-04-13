import { useState, useEffect } from 'react';
import styles from './FactSheetComponent.module.css';
import fsText from './factsheet.json';


const FactSheetComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateField,
  schedulePush,
  isSpanish
}) => {
  const [isDiagnosed, setIsDiagnosed] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  let FSText = isSpanish ? fsText.sp : fsText.en


  const choiceSelected = (e) => {
    if (e.target.value === 'Yes') schedulePush(true);
    else nextPage(e.target.value);
    setIsDiagnosed(e.target.value);
  };

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
            <p className="error" hidden={!(isDiagnosed === 'No')}>
              {FSText[1]}
              <br></br>
              <br></br>
              {FSText[2]}
            </p>
            <fieldset>
              <legend>
              {FSText[0]}<br></br>
                <br></br>
                <a
                  target="__blank"
                  href="https://www.fda.gov/media/144638/download"
                >
                  Moderna Vaccination EUA
                </a>
                <br></br>
                <br></br>

                <a
                  target="__blank"
                  href="https://mychart.ynhhs.org/MyChart-PRD/en-US/PDF/ESPCOVIDModernaVaccineFactSheet.pdf"
                >
                  {FSText[4]}
                </a>
                <br></br>
                <br></br>
                <a
                  target="__blank"
                  href="https://www.fda.gov/media/144414/download"
                >
                  Pfizer Vaccination EUA
                </a>{' '}
                <br></br>
                <br></br>
                <a
                  target="__blank"
                  href="https://mychart.ynhhs.org/MyChart-PRD/en-US/PDF/ESPCOVIDPfizerVaccineFactSheet.pdf"
                >
                  {FSText[3]}
                </a>{' '}
                <br></br>
                <br></br>
                {/*
                <a
                  target="__blank"
                  href="https://mychart.ynhhs.org/mychart-prd/en-US/PDF/JJEUA.pdf"
                >
                  {FSText[9]}
                </a>{' '}
                <br></br>
                <br></br>
                <a
                  target="__blank"
                  href="https://mychart.ynhhs.org/mychart-prd/en-US/PDF/JJEUA_ESP.pdf"
                >
                  {FSText[10]}
                </a>{' '}
                */}
                <br></br>
              </legend>
              <div className="radio_row_item">
                <input
                  id="prev_covid_agree"
                  type="radio"
                  name="prev_covid"
                  onClick={(e) => {
                    nextPage(e);
                  }}
                ></input>
                <label htmlFor="prev_covid_agree">{FSText[6]}</label>
              </div>
              <br></br>
              <br></br>
              <div className="radio_row_item">
                <input
                  id="prev_covid_later"
                  type="radio"
                  name="prev_covid_later"
                  onClick={(e) => {
                    nextPage(e);
                  }}
                ></input>
                <label htmlFor="prev_covid_later">{FSText[7]}</label>
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
                <label htmlFor="prev_covid_no">{FSText[8]}</label>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default FactSheetComponent;
