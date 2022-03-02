import { useState, useEffect } from 'react';
import { Button, Modal, Paper, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import styles from './IsImmunoCompComponent.module.css';
import qText from './isimmunocomp.json';

const useStyles = makeStyles((theme) => ({
  paper: {
    flexGrow: 1,
    padding: theme.spacing(5),
    backgroundColor: theme.palette.background.paper,
    position: 'absolute',
    top: '10%',
    left: '30%'
  }
}));

const IsImmunoCompComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateAnswerData,
  schedulePush,
  isSpanish,
  isOver65,
  isPediatric,
  is1217,
  setImmunocompromised,
  setBooster
}) => {
  const [isDiagnosed, setIsDiagnosed] = useState('');
  const [modal, setModal] = useState('');

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  let QText = isSpanish ? qText.sp : qText.en;
  const classes = useStyles();

  return (
    <>
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Paper
          style={{ width: '40%', height: '75%' }}
          className={classes.paper}
        >
          <b>{!isOver65 ? 'Has your child ' : 'Have you '}:</b>
          <br></br>
          <br></br>- Received cancer therapy (including chemotherapy, hormonal
          therapy, immunotherapy, surgery, and/or radiation therapy) for a solid
          tumor within one year of my initial mRNA COVID-19 vaccine series
          <br></br>
          <br></br>- Had a newly diagnosed cancer or recurrent cancer with a
          treatment plan that will include chemotherapy, immunotherapy, and/or
          radiation therapy<br></br>
          <br></br>- Had a blood cancer diagnosis (for example, leukemia,
          lymphoma, myeloma, myelodysplastic syndrome, chronic
          myeloproliferative condition)<br></br>
          <br></br>- Received a stem cell transplant or CAR T-cell therapy
          <br></br>
          <br></br>- Received a solid organ transplant (such as a kidney or
          liver transplant) and am taking immune-suppressing medication
          <br></br>
          <br></br>- Had a moderate or severe primary immunodeficiency (such as
          DiGeorge or Wiskott-Aldrich syndrome)
          <br></br>
          <br></br>- Had a Advanced or untreated HIV disease <br></br>
          <br></br>- Taken (or was taking at the time of my initial mRNA
          COVID-19 vaccine series) high-dose corticosteroids (at least 20 mg of
          prednisone daily) or any of the other medications on this list that
          suppress the immune system
          <br></br>
          <br></br>- People should talk to their healthcare provider about
          COVID-19 vaccinations and boosters if they have a medical condition to
          help determine if they may be immunocompromised.
        </Paper>
      </Modal>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
            <fieldset>
              <legend>
                Which statement best describes{' '}
                {isPediatric || is1217 ? 'your child?' : 'you?'}
              </legend>

              <Button variant="outlined" onClick={() => setModal(true)}>
                Click here for list of immunocompromised conditions
              </Button>
              <br></br>
              <br></br>
              <br></br>
              <div className="radio_row_item">
                <input
                  id="prev_covid_no"
                  type="radio"
                  value="Yes"
                  name="prev_covid"
                  onClick={(e) => {
                    setImmunocompromised(false);
                    nextPage(e);
                  }}
                ></input>
                <label htmlFor="prev_covid_no">
                  {isPediatric || is1217 ? 'My child is' : 'I am'} not
                  immunocompromised
                </label>
              </div>
              {/* <br></br>
                <br></br>
                <div className="radio_row_item">
                  <input
                    id="prev_covid_yes_3rd"
                    type="radio"
                    value="No"
                    name="prev_covid"
                    onClick={(e) => {
                      updateAnswerData({ first_dose: e.target.value });
                      setBooster(false);
                      setImmunocompromised(true);
                      if (isPediatric) nextPage(e, 3);
                      else nextPage(e, 4);
                    }}
                  ></input>
                  <label htmlFor="prev_covid_yes_3rd">
                    {isPediatric || is1217 ? 'My child is' : 'I am'}{' '}
                    immunocompromised and I wish to schedule a third dose{' '}
                    {(isPediatric || is1217) && 'for them'}
                  </label>
                </div> */}
              <br></br>
              <br></br>
              <div className="radio_row_item">
                <input
                  id="prev_covid_yes_series"
                  type="radio"
                  value="No"
                  name="prev_covid"
                  onClick={(e) => {
                    setImmunocompromised(true);
                    nextPage(e);
                  }}
                ></input>
                <label htmlFor="prev_covid_yes_series">
                  {isPediatric || is1217 ? 'My child is' : 'I am'}{' '}
                  immunocompromised
                </label>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default IsImmunoCompComponent;
