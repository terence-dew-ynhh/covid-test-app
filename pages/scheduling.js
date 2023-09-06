import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home({ link }) {
  const router = useRouter();
  useEffect(() => {
    console.info(link)
    window.open(link, '__blank').focus();
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
  const { location } = query;
  let link = '';
  const locationMapping = [
    {
      name: 'BH FLU FAIR CLINIC',
      link:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=81534,81535,81536,81537,81538,81539,81540,81541,81542,81543,81544,81545,81546,81547,81801,82097,82099,82101,82102,82103,82105,82107,82108,82109,82110,82386&vt=10220&dept=103010114&view=plain&public=1'
    },
    {
      name: 'GH FLU FAIR CLINIC',
      link:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=81619,81620,81621,81622,81623,82387&vt=10220&dept=104010092&view=plain&public=1'
    },
    {
      name: 'LM FLU FAIR CLINIC',
      link:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=81624,81625&vt=10220&dept=108010097&view=plain&public=1'
    },
    {
      name: 'WH FLU FAIR CLINIC',
      link:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=81691&vt=10220&dept=108710070&view=plain&public=1'
    },
    {
      name: 'YNHH - SRC FLU FAIR CLINIC',
      link:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=81732,81733,81734,81735,81736,81737,81738,81739,81740,81741,81742,81743,81744,81745,81746,82014,82015,82016,82017,82018,82019,82020,82021,82022,82023&vt=10220&dept=102010093&view=plain&public=1'
    },
    {
      name: 'YNHH - YSC FLU FAIR CLINIC',
      link:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=81760,81761,81762,81802,81804,81763,81809,81764,81841,81842,81810,81811,81812,81765,81766,81843,81767,81813,81768,81946,81814,81815,81816,81817,81818,81769,81770,81819,811820,81821,81822,81823,81771,81824,81825,81826,81772,81827,81773,81774,82096&vt=10220&dept=101010170&view=plain&public=1'
    },
    {
      name: 'YNHH OFF SITE FLU FAIR CLINIC',
      link:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=81778,81779,81780,81781,81782,81783,81784,81785,81786,117357,117358,117359,117360,117361,117362,81787&vt=10220&dept=100001366&view=plain&public=1'
    },
    {
      name: "YALE PHYSICIAN'S BUILDING FLU FAIR CLINIC",
      link:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=81828,81829,81830&vt=10220&dept=101230050&view=plain&public=1'
    },{
      name: 'NE PRACTICES: BRIDGEPORT FLU FAIR CLINIC',
      link:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=81788,81789,81790,81791,81792,81793&vt=10220&dept=200010001&view=plain&public=1'
    },{
      name: 'NE PRACTICES: NEW HAVEN FLU FAIR CLINIC',
      link:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=81794,81795,81796,82184,82185&vt=10220&dept=200010002&view=plain&public=1'
    },{
      name: 'NE PRACTICES: GREENWICH FLU FAIR CLINIC ',
      link:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=81797,81798,81799,81803,82186&vt=10220&dept=200010003&view=plain&public=1'
    },{
      name: 'NE PRACTICES: NEW LONDON FLU FAIR CLINIC',
      link:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=81800,81805,81806,81807,81808&vt=10220&dept=200010004&view=plain&public=1'
    },{
      name: 'LM OFFSITE FLU FAIR CLINIC',
      link:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=81845,81846,81847,81848,81849,81850&vt=10220&dept=100001367&view=plain&public=1'
    }
    
  ];

  locationMapping.forEach((element) => {
    if (location === element.name) {
      link = element.link;
    }
  });

  return {
    link
  };
};