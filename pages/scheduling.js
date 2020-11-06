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

      <div className="grid">
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
      name: 'Bridgeport Hospital',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78404,78810&vt=2102&dept=103010111&view=plain&public=1'
    },
    {
      name: 'Milford Campus - BH',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78405,78870&vt=2102&dept=103700024&view=plain&public=1'
    },
    {
      name: 'Greenwich Hospital',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78403,78920,79171&vt=2102&dept=104010088&view=plain&public=1'
    },
    {
      name: 'Lawrence-Memorial Hospital',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78406,79102,82534&vt=2102&dept=108010095&view=plain&public=1'
    },
    {
      name: 'Westerly Hospital',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78407&vt=2102&dept=108710069&view=plain&public=1'
    },
    {
      name: 'Yale New Haven Hospital – YSC',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78102,78061,82514,78419,79061&vt=2102&dept=101010165&view=plain&public=1'
    },
    {
      name: 'Yale New Haven Hospital - SRC',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78402,79062&vt=2102&dept=102010091&view=plain&public=1'
    },
    {
      name: 'Other',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79098,79104,79159,79116,79255,78866,79110,79099&vt=2102&dept=100001318&view=plain&public=1'
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
