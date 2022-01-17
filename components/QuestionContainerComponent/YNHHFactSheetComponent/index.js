import { useState, useEffect } from 'react';
import styles from './YNHHFactSheetComponent.module.css';
import fsText from './ynhhfactsheet.json';
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

const YNHHFactSheetComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateField,
  schedulePush,
  isSpanish
}) => {
  const [isDiagnosed, setIsDiagnosed] = useState(false);
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);

  useEffect(() => {
    isDoneEnabled(false);
    isPrevEnabled(true);
  }, []);

  const classes = useStyles();
  let FSText = isSpanish ? fsText.sp : fsText.en;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <img style={{height: '100%' }} src="Schedule.PNG"></img>
    </div>
  );

  return (
    <>
      <div className="radio_grp">
        <div className={styles.question_row_item}>
          <div className={styles.question_row_item_sub}>
            {isDiagnosed && <p className="error">
              {FSText[2]}
            </p>}
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
                    schedulePush();
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
                    schedulePush();
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
                    setIsDiagnosed(true);
                  }}
                ></input>
                <label htmlFor="prev_covid_no">{FSText[6]}</label>
              </div>
            </fieldset>
          </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
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

export default YNHHFactSheetComponent;
