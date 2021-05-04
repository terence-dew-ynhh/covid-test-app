import { useEffect } from 'react';
import styles from './VaccinationScheduleConsent.module.css';
import vsText from './vaccineschedule.json';

const VaccinationScheduleConsent = ({
  isPrevEnabled,
  isDoneEnabled,
  schedulePush,
  isSpanish,
  isPfizer
}) => {
  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  const handleChecked = (e) => {
    schedulePush(e);
  };

  const regex = /_/gi;

  let VSText = isSpanish ? vsText.sp : vsText.en;

  let checkboxesArray = ['Acknowledge'];

  let checkboxes = checkboxesArray.map((checkbox, idx) => (
    <div className={styles.chk_row_item}>
      <label className={styles.none_label_or}> {''}</label>
      <input
        id={`prev_covid_${checkbox.toLowerCase()}`}
        type="checkbox"
        key={checkbox.replace(regex, ' ')}
        value={checkbox.replace(regex, ' ')}
        name="Consent"
        onChange={(e) => {
          handleChecked(e);
        }}
      ></input>
      <label
        className={styles.none_label_or}
        htmlFor={`prev_covid_${checkbox.toLowerCase()}`}
      >
        {VSText[3]}
      </label>
    </div>
  ));

  return (
    <>
      <div className={styles.question_row_item}>
        <div className={styles.question_row_item_sub}>
        {/* {isPfizer !== null ? null : <p className="message">{VSText[2]}</p>} */}
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>
            {/* {isPfizer !== null ? null :
              (<>
              <br></br>
              <br></br>
              {VSText[0]}
              <br></br>
              <br></br>
              <p className="versiontxt">v8 5.8.21</p>
              <a href="/info" target="_blank" rel="noreferrer">
              <img src="/Schedule.PNG" passHref></img>
              </a> </>)} */}
            </legend>
            <p className="fin-statment">{VSText[1]}</p>

            <div className={styles.q1_grid}>{checkboxes}</div>
          </fieldset>
        </div>
      </div>
      <style jsx>{`
        img:hover {
          border: 2px solid rgba(255, 166, 0, 0.856);
        }
        a,img {
          margin: 0;
          height: 100vh;
          width: 100%;
        }
        .versiontxt {
          font-size: 0.7em;
          text-align: center;
          margin: 1px;
        }
        .fin-statment {
          width: 100%;
        }
        .message{
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default VaccinationScheduleConsent;
