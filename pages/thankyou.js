import Head from 'next/head';
import { useRouter } from 'next/router';

export default function ThankYou({ link }) {
  const router = useRouter();
  const { endpoint } = router.query;
  console.log(endpoint);
  return (
    <div className="container">
      <Head>
        <title>Yale COVID-19 Test Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid">
        <img src="/YNHHSLogo.png"></img>
      </div>
      <h1 className="title">
      Thank You for your Interest in this Vaccine Trial
        </h1>
      <div className="questionContainer">
        <p>
          Based on your responses you do not qualify for this clinical trial. If
          you would like to be contacted about future vaccine trials, please
          contact our team at Yale <a href="helpusdiscover@yale.edu">helpusdiscover@yale.edu</a>
          </p>

      </div>

      <style jsx>{`
        .questionContainer {
          width: 60%;
          background: white;
          box-shadow: 0 0 10px 5px rgba(0,0,0,0.1);
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          padding: 40px;
        }
      
        @media(max-width:700px){
          .questionContainer{
            width: 100%;
            padding-left: 40px;
          }
        }   
      `}</style>
    </div>
  );
}
