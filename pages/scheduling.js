import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home({ link }) {
  const router = useRouter();
  const { endpoint } = router.query;
  
  useEffect(() => {
   location.href = link;
  }, []);  
  
  return (
    <>
      <Head>
      <title>YNHH Easy Care</title>
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
      name: 'Vaccine',
      link:
        'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=1878,6460,63414,67242,206829,7161,6566&vt=10542&dept=104010100&view=plain&public=1'
    },
    {
      name: 'Sick',
      link:
      'https://openscheduling.ynhhs.org/MyChart-PRD/openscheduling/standalone?id=1878,6460,63414,206829,28088,7161,108539&vt=2391&dept=104010100&view=plain&public=1'
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
