import { useState, useEffect } from 'react';
import styles from './FactSheetComponent.module.css';
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

const FactSheetComponent = ({
  nextPage,
  isPrevEnabled,
  isDoneEnabled,
  updateField,
  schedulePush,
  isSpanish,
  isOver65,
  isJassenapproved,
  isPediatric,
  is1217
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

  let FSText = isSpanish ? fsText.sp : fsText.en;

  const links = <></>;

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
                <b>Moderna Vaccination: </b>
                <br></br>
                <br></br>
                <span>FDA authorized </span>
                <a
                  target="__blank"
                  href="https://www.fda.gov/media/144638/download"
                  >
                  EUA
                </a>
               
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
                <label htmlFor="prev_covid_agree">
                  {FSText[6]}
                  {isPediatric || is1217
                    ? 'I wish for my child to be vaccinated'
                    : 'I wish to be vaccinated'}
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

export default FactSheetComponent;

