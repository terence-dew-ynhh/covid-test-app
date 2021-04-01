import { useState, useEffect } from 'react';
import styles from './HRSlotsFilledComponent.module.css';

const HRSlotsFilledComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateAnswerData,
  updateHeader
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
            <p>At this time, only appointments for individuals with medical conditions considered high risk with COVID infection are available. </p>
            <p> New appointments will open up based on the vaccine supply given to us by the state.</p>
            <a href="https://www.ynhhs.org/patient-care/covid-19/vaccine/comorbidities.aspx">Click here to view a list of high-risk conditions</a><br></br><br></br>

          </div>
        </div>
      </div>
      <style jsx>{`
      h2{
        color:red;
      }
      a{
        color: blue;
      }
      `}</style>
    </>
  );
};

export default HRSlotsFilledComponent;
