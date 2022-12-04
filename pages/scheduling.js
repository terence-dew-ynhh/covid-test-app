import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
export default function Home({ link }) {
  const router = useRouter();
  const { endpoint } = router.query;
  console.log(endpoint);

  useEffect(() => {
    window.open(link, '_blank').focus();
  }, []);

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
      name: 'Bridgeport Hospital Testing Tent',
      link:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79054&vt=2228&dept=103010113&view=plain&public=1'
    },
    {
      name: 'Connecticut Mental Health Center',
      link:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79270&vt=2228&dept=100001338&view=plain&public=1'
    },
    {
      name: 'Connecticut Valley Hospital',
      link:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=78420&vt=2228&dept=101010166&view=plain&public=1'
    },
    {
      name: 'New Haven Judicial District',
      link:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79325&vt=2228&dept=100001343&view=plain&public=1'
    },
    {
      name: 'Bridgeport Judiciary',
      link:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79272&vt=2228&dept=100001339&view=plain&public=1'
    },
    {
      name: 'Capital Region Mental Health Center',
      link:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79598&vt=2228&dept=100001355&view=plain&public=1'
    },
    {
      name: 'Southeast Mental Health Authority',
      link:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79599&vt=2228&dept=100001356&view=plain&public=1'
    },
    {
      name: 'Western CT Mental Health Network',
      link:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79600&vt=2228&dept=100001357&view=plain&public=1'
    },{
      name: 'Bridgeport Corrections and Parole',
      link:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79980&vt=2228&dept=100001362&view=plain&public=1'
    },{
      name: 'New Haven Corrections and Parole',
      link:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79981&vt=2228&dept=100001363&view=plain&public=1'
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
