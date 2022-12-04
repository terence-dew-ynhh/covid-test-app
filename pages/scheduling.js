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

export default function Home({ link }) {
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);

  const router = useRouter();
  const classes = useStyles();

  useEffect(() => {
    window.open(link);

  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <img style={{ height: '70%' }} src="/Schedule.PNG"></img>

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
        {/* <h3>
          {second_dose == 'true'
            ? isSpanish == 'true'
              ? `Seleccione una fecha posterior a ${recc_date}`
              : `Please Select Date After ${recc_date}`
            : ''}
        </h3> */}

        {/* <button
          className="button"
          style={{ marginBottom: 0 }}
          type="button"
          onClick={handleOpen}
        >
          Click here to see Vaccine Schedule
        </button> */}
        {/* <p>{`Over 18:${isOver65} | Pfizer:${isPfizer} | Third Dose:${isimmunocomp}`}</p> */}
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
          {/* {body} */}
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
    ispfizer,
    isbooster,
    isseconddose,
    immunocomp,
    thirddose,
    over65,
    eightteentosixtyfour,
    isadolescent
  } = query;
  let link = '';

  //1 closed
  //2 5-11 closed everone else pfizer
  //3 Immunocomp 12
  if (isseconddose == 'true')
    link =
      'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/standalone?id=83462,91478,91671,83567,83563,83564,83565,83686,90409,88040,88037,88046,88038,88042,91796,88043&vt=2460&dept=204010005,204400009,204590014,208040011,203260005,201120002,204530003,101010172,101450002,101870002,102010094,103070034,104010097,108010099,104010099,108710073&view=plain&public=1&lang=english';

  if (immunocomp == 'true' && thirddose == 'true') {
    link =
      'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/standalone?id=83462,91478,91671,83567,83563,83564,83565,83686,90409,88040,88037,88046,88038,88042,91796,88043&vt=2444&dept=204010005,204400009,204590014,208040011,203260005,201120002,204530003,101010172,101450002,101870002,102010094,103070034,104010097,108010099,104010099,108710073&view=plain&public=1&lang=english';
  }

  if (isbooster == 'true') {
    if (ispfizer == 'true') {
      link =
        'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/standalone?id=83462,91478,91671,83567,83563,83564,83565,83686,90409,88040,88037,88046,88038,88042,91796,88043&vt=2460&dept=204010005,204400009,204590014,208040011,203260005,201120002,204530003,101010172,101450002,101870002,102010094,103070034,104010097,108010099,104010099,108710073&view=plain&public=1&lang=english';
    } else {
      if (eightteentosixtyfour || over65) {
        link =
          'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/standalone?id=92548,92580,92581,92582,92699&vt=2465&dept=104010099,208040011,101870002,101450002,204590014&view=plain&public=1';
      } else
        link =
          'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/standalone?id=92548,92580,92581,92582,92699&vt=2465&dept=104010099,208040011,101870002,101450002,204590014&view=plain&public=1';
    }
  }

  if(isadolescent == 'true'){
  link = 'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/standalone?id=96596,96610,96598&vt=2110&dept=101870002,208040011,104150007&view=plain&public=1'
  }


  link = link + '&lang=english';
  if (isbooster == null) link = '';

  return {
    link
  };
};
// export default redirect('http://www.ynhhs.org/covidvaccine');
