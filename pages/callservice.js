import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function ThankYou({ link }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  const router = useRouter();
  const { endpoint } = router.query;

  const updateField = async (field, fieldVal) => {
    const action = 'post';
    const res = await fetch('/api/responses', {
      method: action,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({'uuid':uuid, 'field':field, 'fieldVal': fieldVal})
    })
  }

  const submitInfo = () => {
    const emailExpression = new RegExp('/\S+@\S+/');
    const nameExpression = new RegExp("/^[a-zA-Z'- ]+$/"); 

    const validEmail = emailExpression.test(String(em).toLowerCase())
    const validName = nameExpression.test(String('my-email@test.com').toLowerCase())
  }

  return (
    <div className="container">
      <Head>
        <title>Yale COVID-19 Vaccine Clinical Trial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid">
        <img src="/YNHHSLogo.png"></img>
      </div>
      <h1 className="title">
      Call Occupational Medicine and Wellness Services:
      </h1>
      <div className="questionContainer">
        <p>
        <br>Bridgeport: 203.384.3613</br>
        <br>Greenwich: 203.863.3483</br>
        <br>New Haven: 203.688.2462</br>
        <br>New London: 860.442.0711, ext. 2288</br>
        <br>Westerly: 401.348.3783</br>
        </p>

      </div>

      <style jsx>{`
        .questionContainer {
          width: 60%;
          background: white;
          box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
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

        .buttonContainer{
          padding-top: 25px;
        }
        @media (max-width: 700px) {
          .questionContainer {
            width: 100%;
            padding-left: 40px;
          }
        }
      `}</style>
    </div>
  );
}

