import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home({ link }) {
  const router = useRouter();
  const { endpoint } = router.query;
  console.log(endpoint);
  return (
    <>
      <Head>
        <title>YNHH COVID-19 Test Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid'>
      <img src="/YNHHSLogo.png"></img>
      </div>

      <div className="scheduleContainer">
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
          align-items: center;
          justify-items: center;
          border: none;
        }
      `}</style>
    </>
  );
}

Home.getInitialProps = async ({ query }) => {
  const { endpoint } = query;
  let link = '';
  const locationMapping = [
    {
      name: 'BRIDGEPORT: 4699 Main Street, Bridgeport, CT 06606',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79285,79286,79548,79549&vt=2228&dept=100001340&view=plain&public=1'
    },
    {
      name: 'BRIDGEPORT: 267 Grant Street, Bridgeport, CT 06610',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79287,79288,79289&vt=2228&dept=100001341&view=plain&public=1'
    },
    {
      name: 'FAIRFIELD: 425 Post Road, Fairfield, CT 06824',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79290,79561,79562&vt=2228&dept=100001342&view=plain&public=1'
    },
    {
      name: 'GREENWICH: 77 Lafayette Place, Greenwich CT, 06830',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79285,79286,79548,79549&vt=2228&dept=100001340&view=plain&public=1'
    },
    {
      name: 'GROTON: 52 Hazelnut Hill Road, Groton, CT 06340-3268',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79287,79288,79289&vt=2228&dept=100001341&view=plain&public=1'
    },
    {
      name: 'GUILFORD: Shoreline Medical Center,2nd Floor Suite 2500, 111 Goose La, Guilford, CT',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79290,79561,79562&vt=2228&dept=100001342&view=plain&public=1'
    },
    {
      name: 'NEW HAVEN: Long Wharf, 150 Sargent Dr 1st Floor, New Haven, CT',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79285,79286,79548,79549&vt=2228&dept=100001340&view=plain&public=1'
    },
    {
      name: 'NEW HAVEN: North Pavilion 1st Floor Diag Radiology, 35 Park St, New Haven, CT',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79287,79288,79289&vt=2228&dept=100001341&view=plain&public=1'
    },
    {
      name: 'NORTH HAVEN: Diagnostic Radiology 1st Floor, 6 Devine St, North Haven, CT',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79290,79561,79562&vt=2228&dept=100001342&view=plain&public=1'
    },
    {
      name: 'STRATFORD: 2909 Main Street, Stratford, CT 06614',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79290,79561,79562&vt=2228&dept=100001342&view=plain&public=1'
    },
    {
      name: 'TRUMBULL: 5520 Park Avenue, Trumbull, CT, 06611',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79290,79561,79562&vt=2228&dept=100001342&view=plain&public=1'
    }
  ];  

  locationMapping.forEach((element) => {
    if (endpoint === element.name) {
      link = element.link;
    }
  });

  return {
    link
  };
};
 