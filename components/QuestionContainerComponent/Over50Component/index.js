import { useState, useEffect } from 'react';
import styles from './Over50Component.module.css';
import fsText from './factsheet.json';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
  const top = 50;
  const left = 52;
  const innerLeft = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${innerLeft}%)`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    height: '90%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 0
  }
}));

const Over50Component = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  isOver50,
  setIsOver50,
  is2ndBooster,
  setIs2ndBooster
}) => {
  const [isDiagnosed, setIsDiagnosed] = useState('');
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <img style={{ height: '100%' }} src="Schedule.PNG"></img>
    </div>
  );

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
           {isDiagnosed && <p className="error" >
            At this time you don’t qualify for a 2nd booster, please check back at a later date. 
            </p>}
            <fieldset>
              <legend>
                <b>If any of the following are true, please select yes:</b>
                <br></br>
                <br></br>
                -Are you 50 years old or older?
                <br></br>
                <br></br>
                -Have you received J&J as BOTH your primary series dose and
                booster dose?
                <br></br>
                <br></br>
              </legend>

              <div className="radio_row_item">
                <input
                  id="prev_covid_agree"
                  type="radio"
                  name="prev_covid"
                  onClick={(e) => {
                    setIsOver50(true)
                    nextPage(e);
                  }}
                ></input>
                <label htmlFor="prev_covid_agree">
                  Yes
                </label>
              </div>
              <br></br>
              <br></br>
              <div className="radio_row_item">
                <input
                  id="prev_covid_later"
                  type="radio"
                  name="prev_covid_later"
                  onClick={(e) => {
                    setIsDiagnosed(true)
                  }}
                ></input>
                <label htmlFor="prev_covid_later">No</label>
              </div>
            </fieldset>
          </div>
        </div>
        <Modal
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default Over50Component;
