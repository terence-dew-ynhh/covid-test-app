import Head from 'next/head'
import ErrorMessageComponent from "../components/ErrorMessageComponent";


export default function Home({link}) {
  return (
    <>
      <Head>
        <title>YNHH COVID-19 Test Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <img src="/YNHHSLogo.png">
        </img><span className="divider"></span>
        
      <div className="scheduleContainer">
  <iframe id="openSchedulingFrame" className="widgetframe" scrolling="yes" src={link}></iframe>
    </div>
      <style jsx>{`
        .scheduleContainer, iframe{
          width: 100%;
          height: 100vh;
          display:flex;
          align-items: center;
          justify-items: center;
          border:none;
        }
      `}</style>
    </>
  )
}

// Home.getInitialProps = async ({ query }) => {
//   const { endpoint } = query;
//   let link = '';
//   const locationMapping = [

//   ];

//   locationMapping.forEach((element) => {
//     if (endpoint === element.name) {
//       link = element.link;
//     }
//   });

//   return {
//     link
//   };
// };