import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home({ link }) {
  const router = useRouter();
  const { endpoint } = router.query;
  
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
      name: 'Advanced Nursing and Rehab Mass Testing',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79243&vt=2228&dept=100001336&view=plain&public=1'
    },
    {
      name: 'Apple Rehab Guilford Mass Testing',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79108&vt=2228&dept=100001324&view=plain&public=1'
    },
    {
      name: 'Avalon Health Center Testing',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79471&vt=2228&dept=100001346&view=plain&public=1'
    },
    {
      name: 'Bayview Mass Testing',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79223&vt=2228&dept=100001333&view=plain&public=1'
    },
    {
      name: 'Branford Hills Mass Testing',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79156&vt=2228&dept=100001328&view=plain&public=1'
    },
    {
      name: 'Carolton Chronic and Convalescent Testing',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=790488&vt=2228&dept=100001353&view=plain&public=1'
    },
    {
      name: 'Edgehill Mass Testing',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79199&vt=2228&dept=100001329&view=plain&public=1'
    },
    {
      name: 'Fairview Groton Mass Testing',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79134&vt=2228&dept=100001327&view=plain&public=1'
    },
    {
      name: 'Greentree Manor Testing',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79470&vt=2228&dept=100001345&view=plain&public=1'
    },
    {
      name: 'Greenwich Woods Mass Testing',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79239&vt=2228&dept=100001334&view=plain&public=1'
    },
    {
      name: 'Guilford Mass Testing',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=78835&vt=2228&dept=100001316&view=plain&public=1'
    },
    {
      name: 'Hamden Health Mass Testing',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79236&vt=2228&dept=100001332&view=plain&public=1'
    },
    {
      name: 'Jewish Services Mass Testing',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=78938&vt=2228&dept=100001322&view=plain&public=1'
    },
    {
      name: 'Lord Chamberlain Mass Testing',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79566&vt=2228&dept=100001354&view=plain&public=1'
    },
    {
      name: 'Ludlowe Center for Health and Rehab Testing',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79473&vt=2228&dept=100001348&view=plain&public=1'
    },
    {
      name: 'Milford Health and Rehab Testing',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79486&vt=2228&dept=100001351&view=plain&public=1'
    },
    {
      name: 'Montowese Mass Testing',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79222&vt=2228&dept=100001331&view=plain&public=1'
    },
    {
      name: 'Mystic Health Mass Testing',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79132&vt=2228&dept=100001325&view=plain&public=1'
    },
    {
      name: 'Nathaniel Witherell Mass Testing',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79247&vt=2228&dept=100001337&view=plain&public=1'
    },
    {
      name: 'New London Rehab Mass Testing',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79241&vt=2228&dept=100001335&view=plain&public=1'
    },
    {
      name: 'Northbridge Health Care Center Testing',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79472&vt=2228&dept=100001347&view=plain&public=1'
    },
    {
      name: 'Pendleton Mass Testing',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=78836&vt=2228&dept=100001317&view=plain&public=1'
    },
    {
      name: 'Spring at Watermark Testing',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79484&vt=2228&dept=100001349&view=plain&public=1'
    },
    {
      name: 'St Joseph Testing',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79485&vt=2228&dept=100001350&view=plain&public=1'
    },
    {
      name: 'Waveny Mass Testing',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79221&vt=2228&dept=100001330&view=plain&public=1'
    },
    {
      name: 'West River Mass Testing',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=78939&vt=2228&dept=100001323&view=plain&public=1'
    },
    {
      name: 'Westfield Care and Rehab Testing',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=79469&vt=2228&dept=100001344&view=plain&public=1'
    },
    {
      name: 'Whitney Rehab Mass Testing',
      link:
        'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=78937&vt=2228&dept=100001321&view=plain&public=1'
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
