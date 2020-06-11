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

      <img src="/YNHHSLogo.png"></img>
      <span className="divider"></span>

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
  console.log(endpoint);
  let link = '';
  const locationMapping = [
    {
      name: 'Bridgeport Hospital',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78810&vt=2102&dept=103010111&view=plain&public=1'
    },
    {
      name: 'Bridgeport Hospital - MC',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78405,78870&vt=2102&dept=103700024&view=plain&public=1'
    },
    {
      name: 'Greenwich Hospital',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78403,78920&vt=2102&dept=104010088&view=plain&public=1'
    },
    {
      name: 'Lawrence - Memorial Hospital',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78406&vt=2102&dept=108010095&view=plain&public=1'
    },
    {
      name: 'Westerly Hospital',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78407&vt=2102&dept=108710069&view=plain&public=1'
    },
    {
      name: 'Yale New Haven Hospital - SRC',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78402,78676&vt=2102&dept=102010091&view=plain&public=1'
    },
    {
      name: 'Yale New Haven Hospital - YSC',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78061,78102,78419&vt=2102&dept=101010165&view=plain&public=1'
    },
    {
      name: 'Off Campus Mass Testing Site',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78866&vt=2102&dept=100001318&view=plain&public=1'
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
