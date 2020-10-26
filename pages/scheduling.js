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
  const { asymp } = query;
  let link = asymp === "true"
    ? 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81452,81079,82106,82111,82112,82383,76698,76704&vt=2275&dept=100001365,103720003,104360001,108010098,108710071,101050022,103010061,103700005&view=plain&public=1'
    : 'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=81452,81079,82106,82111,82112,82383,76698,76704&vt=2276&dept=100001365,103720003,104360001,108010098,108710071,101050022,103010061,103700005&view=plain&public=1';

  // const locationMapping = [
  //   {
  //     name: 'Bridgeport Hospital',
  //     link:
  //       'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78810&vt=2102&dept=103010111&view=plain&public=1'
  //   },
  //   {
  //     name: 'Bridgeport Hospital - MC',
  //     link:
  //       'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78405,78870&vt=2102&dept=103700024&view=plain&public=1'
  //   },
  //   {
  //     name: 'Greenwich Hospital',
  //     link:
  //       'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78403,78920&vt=2102&dept=104010088&view=plain&public=1'
  //   },
  //   {
  //     name: 'Lawrence - Memorial Hospital',
  //     link:
  //       'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78406,79102,82534&vt=2102&dept=108010095&view=plain&public=1'
  //   },
  //   {
  //     name: 'Westerly Hospital',
  //     link:
  //       'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78407&vt=2102&dept=108710069&view=plain&public=1'
  //   },
  //   {
  //     name: 'Yale New Haven Hospital - SRC',
  //     link:
  //       'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78402,78676,79062&vt=2102&dept=102010091&view=plain&public=1'
  //   },
  //   {
  //     name: 'Yale New Haven Hospital - YSC',
  //     link:
  //       'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=82514&vt=2102&dept=101010165&view=plain&public=1'
  //   },
  //   {
  //     name: 'Additional Employee Testing Sites',
  //     link:
  //       'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=78866,79098,79099,79104,79110,79116,79159&vt=2102&dept=100001318&view=plain&public=1'
  //   }
  // ];

  // locationMapping.forEach((element) => {
  //   if (endpoint === element.name) {
  //     link = element.link;
  //   }
  // });

  return {
    link
  };
};
