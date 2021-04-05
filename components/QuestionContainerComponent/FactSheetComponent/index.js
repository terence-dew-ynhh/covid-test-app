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
  isOver18
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

  const links = isOver18 ? (
    <>
      <br></br>
      <br></br>
      <a target="__blank" href="https://www.fda.gov/media/144638/download">
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
      </a>
    </>
  ) : null;

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
                {FSText[0]}
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
                {links}
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

export default FactSheetComponent;

// const handleOpen = () => {
//   setOpen(true);
// };

// const handleClose = () => {
//   setOpen(false);
// };
