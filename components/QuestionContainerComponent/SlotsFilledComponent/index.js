import { useEffect } from 'react';
import styles from './SlotsFilledComponent.module.css';

const SlotsFilledComponent = ({
  isPrevEnabled,
  isDoneEnabled,
}) => {
  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(false);
  }, []);

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
            <h2 color="red">Update on COVID Vaccines</h2>
            <p>At this time all vaccine appointments are full. </p>
            <p>
              {' '}
              Our scheduling system is being updated as we confirm vaccine
              availability
            </p>
            <a href="https://ynhh.co1.qualtrics.com/jfe/form/SV_6rK4bO0F4VaGw3s">
              Sign up for updates on appointment scheduling
            </a>
            <br></br>
            <br></br>
            <a href="https://portal.ct.gov/Coronavirus/COVID-19-Vaccinations">
              Learn about the State of Connecticut Phase 1b Guidelines
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        h2 {
          color: red;
        }
        a {
          color: blue;
        }
      `}</style>
    </>
  );
};

export default SlotsFilledComponent;
