import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';

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

export default function Home({
  link,
  recc_date,
  second_dose,
  isSpanish,
  isRiskGroup,
  isOver18
}) {
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);

  const router = useRouter();
  const classes = useStyles();

  useEffect(() => {
    if (link == '') router.push(`/`);
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <img style={{ height: '100%' }} src="/Schedule.PNG"></img>

      <IconButton style={{ position: 'absolute' }} onClick={handleClose}>
        <ClearIcon
          style={{
            border: '2px solid red',
            position: 'absolute',
            color: 'red'
          }}
          fontSize="large"
        ></ClearIcon>
      </IconButton>
    </div>
  );

  return (
    <>
      <Head>
        <title>YNHH COVID19 Vaccination</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid">
        <img src="/YNHHSLogo.png"></img>
      </div>

      <div className="scheduleContainer">
        <h3>
          {second_dose == 'true'
            ? isSpanish == 'true'
              ? `Seleccione una fecha posterior a ${recc_date}`
              : `Please Select Date After ${recc_date}`
            : ''}
        </h3>

        {/* <h3>
          {isOver18 == 'true'
            ? isRiskGroup == 'true'
              ? `Over 18 - High Risk`
              : `Over 18- Low Risk`
            : isRiskGroup == 'true'
            ? `16 or 17 - High Risk`
            : `16 or 17- Low Risk`}
        </h3> */}

        <button
          className="button"
          style={{ marginBottom: 0 }}
          type="button"
          onClick={handleOpen}
        >
          Click here to see Vaccine Schedule
        </button>
        <iframe
          id="openSchedulingFrame"
          className="widgetframe"
          scrolling="yes"
          src={link}
        ></iframe>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
      <style jsx>{`
        .scheduleContainer,
        iframe {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-items: center;
          border: none;
        }
        button {
          width: 15%;
        }
        h3 {
          margin-left: 25px;
        }
        @media (max-width: 475px) {
          button {
            width: 100%;
          }
      `}</style>
    </>
  );
}

Home.getInitialProps = async ({ query }) => {
  const {
    recc_date,
    second_dose,
    isPfizer,
    isSpanish,
    isRiskGroup,
    isOver18
  } = query;
  let link = '';
  // second_dose == 'true'
  //   ? isPfizer == 'true'
  //     ? 'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=83668,83667,74622,84623,83665,83652,83656,84799,84798,84796,84797,84800,84816,85109,85376&vt=2339&dept=204150016,204590014,201280003,208040011,204010005,204400009,102360001,102350001,102370001,102340001,102380001,102400001,101960001&view=plain&public=1'
  //     : 'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=83667,83868,83874,83664,83653,83655,84793,84794,84791,84792,84795,84815,85108,85375&vt=2338&dept=204150016,204590014,201280003,208040011,204010005,204400009,102360001,102350001,102390001,102370001,102340001,102380001,102400001,101960001&view=plain&public=1'
  //   : 'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=83666,83867,83873,83663,83651,83654,84788,84789,84786,84787,84790,84814,85097,85374,85635,85636,85637,85638,85639,85640,85642,85643&vt=2293&dept=204150016,204590014,201280003,208040011,204010005,204400009,102360001,102350001,102390001,102370001,102340001,102380001,102400001,101960001&view=plain&public=1';

  link =
    isOver18 == 'true'
      ? isRiskGroup == 'true'
        ? 'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=86297,86298,86299,86300,86301,86302,86303&vt=2293&dept=101960001,102340001,102350001,102360001,102370001,102380001,102390001,102400001&view=plain&public=1'
        : 'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=85374,85643,86213,84790,85637,86214,84789,85635,86215,84788,85636,86216,84787,85638,86217,84814,85639,86218,85097,85642,86171,84786,85640,86219&vt=2293&dept=101960001,102340001,102350001,102360001,102370001,102380001,102390001,102400001&view=plain&public=1'
      : isRiskGroup == 'true'
      ? 'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=86297,86298,86299,86300,86301,86302,86303&vt=2293&dept=101960001,102340001,102350001,102360001,102370001,102380001,102390001,102400001&view=plain&public=1'
      : 'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=85374,84790,84789,84788,84787,84814,86171,84786&vt=2293&dept=101960001,102340001,102350001,102360001,102370001,102380001,102390001,102400001&view=plain&public=1';

  if (isSpanish == 'true') link = link + '&lang=espanol';
  else link = link + '&lang=english';
  if (second_dose == null) link = '';

  return {
    link,
    recc_date,
    second_dose,
    isSpanish,
    isRiskGroup,
    isOver18
  };
};
// export default redirect('http://www.ynhhs.org/covidvaccine');
