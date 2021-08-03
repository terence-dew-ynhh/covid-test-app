import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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

  return (
    <>
      <Head>
        <title>UNH COVID19 Vaccination</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid">
        <img src="/UNHSLogo.png"></img>
      </div>

      <div className="scheduleContainer">
        <h3>
          {second_dose == 'true'
            ? isSpanish == 'true'
              ? `Seleccione una fecha posterior a ${recc_date}`
              : `Please Select Date After ${recc_date}`
            : ''}
        </h3>

        <iframe
          id="openSchedulingFrame"
          className="widgetframe"
          scrolling="yes"
          src={link}
        ></iframe>
 
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

  link =
    'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=88976,88977,88978&vt=2293&dept=201570002&view=plain&public=1';

  if (jjapproved == 'true') {
    link =
      'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=88976,88977,88978&vt=2293&dept=201570002&view=plain&public=1';
  }

  if (isOver18 == 'false') {
    link =
      'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=88976,88977,88978&vt=2293&dept=201570002&view=plain&public=1';
  }

  if (second_dose == 'true') {
    link =
      'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=88977&vt=2338&dept=201570002&view=plain&public=1';
    if (isPfizer == 'true') {
      link =
        'https://openscheduling.ynhhs.org/mychart-prd/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=88976,88977,88978&vt=2293&dept=201570002&view=plain&public=1';
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
