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
        <title>CSHHC COVID19 Vaccination</title>
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
    isOver18,
    jjapproved
  } = query;
  let link = '';

  // link =
  //   isOver18 == 'true'
  //     ? isRiskGroup == 'true'
  //       ? 'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=85374,86213,85643,84790,85637,86214,84789,85635,86215,84788,85636,86216,84787,85638,86217,84814,85639,86218,85097,85642,86171,84786,85640,86219,85687,85685,85689,85688&vt=2293&dept=101960001,102340001,102350001,102360001,102370001,102380001,102390001,102400001&view=plain&public=1'
  //       : 'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=85374,86213,85643,84790,85637,86214,84789,85635,86215,84788,85636,86216,84787,85638,86217,84814,85639,86218,85097,85642,86171,84786,85640,86219,85687,85685,85689,85688&vt=2293&dept=101960001,102340001,102350001,102360001,102370001,102380001,102390001,102400001&view=plain&public=1'
  //     : isRiskGroup == 'true'
  //     ? 'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=86297,86298,86299,86300,86301,86302,86303&vt=2293&dept=101960001,102340001,102350001,102360001,102370001,102380001,102390001,102400001&view=plain&public=1'
  //     : 'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=85374,84790,84789,84788,84787,84814,86171,84786,85687&vt=2293&dept=101960001,102340001,102350001,102360001,102370001,102380001,102390001,102400001&view=plain&public=1';

        link = 'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=85686,86217,84787,85685,86214,84790,86215,84789,85687,86219,84786,85689,86213,85374,86218,84814,86216,84788,85688,85097,86171&vt=2293&dept=101960001,102340001,102350001,102360001,102370001,102380001,102390001,102400001&view=plain&public=1'
        
        if(jjapproved == 'true'){
          link = 'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=85686,85638,86217,84787,85685,85637,86214,84790,85635,86215,84789,85687,85640,86219,84786,85689,85643,86213,85374,85639,86218,84814,85636,86216,84788,85688,85642,85097,86171&vt=2293&dept=101960001,102340001,102350001,102360001,102370001,102380001,102390001,102400001&view=plain&public=1'
        }

        if(isOver18 == 'false'){
          link = 'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=85374,84790,84789,84788,84787,84814,86171,84786,85687&vt=2293&dept=101960001,102340001,102350001,102360001,102370001,102380001,102390001,102400001&view=plain&public=1'
        }


      if(second_dose == 'true'){
        link = 'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=84792,84795,84794,94791,95375,84815,84793,85108&vt=2338&dept=101960001,102340001,102350001,102360001,102370001,102380001,102390001,102400001&view=plain&public=1'
        if(isPfizer == 'true'){
          link = 'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=84797,84800,84799,84796,85376,84816,84798,85109&vt=2339&dept=101960001,102340001,102350001,102360001,102370001,102380001,102390001,102400001&view=plain&public=1'
        }
      }



 

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
