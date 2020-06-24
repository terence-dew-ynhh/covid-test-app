import React, { useState } from 'react';
import Head from 'next/head';
import QuestionFormComponent from '../components/QuestionFormComponent';
import { useRouter } from 'next/router';

export default function Home() {
  const [isEmployee, setIsEmployee] = useState(true);
  const [schedulerEndpoint, setSchedulerEndpoint] = useState(
    'Bridgeport Hospital'
  );

  const router = useRouter();

  const submitLocation = () => {
    router.push(`/scheduling`, '/schedule-testing');
  };


    const locationMapping = [
      {
        name: 'Bridgeport Region',
        link:
          'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79285,79286&vt=2228&dept=100001340&view=plain&public=1'
      },
      {
        name: 'New Haven Region',
        link:
          'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79287,79288,79289&vt=2228&dept=100001341&view=plain&public=1'
      },
      {
        name: 'New London Region ',
        link:
          'https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=79290&vt=2228&dept=100001342&view=plain&public=1'
      }
    ];  

  //   locationMapping.forEach((element) => {
  //     if (schedulerEndpoint === element.name) {
  //       window.location.href = element.link;
  //     }
  //   });
  // }

  const locationMapping = [
    'Bridgeport Region',
    'New Haven Region',
    'New London Region'
  ];

  const locationOptions = locationMapping.map((option, idx) => (
    <option key={idx} value={option}>
      {option}
    </option>
  ));

  return (
    <div className="container">
      <Head>
        <title>CVH COVID-19 Test Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img src="/YNHHSLogo.png"></img>
      <span className="divider"></span>

      <div className="grid">
        <div className="grid_subcontainer">
          <div className="question_div">
            <div className="radio_grp">
              <fieldset>
                <legend>What is your preferred collection location?</legend>

                <div className="select-wrapper">
                  <select
                    onChange={(e) => setSchedulerEndpoint(e.target.value)}
                    className="select"
                  >
                    {locationOptions}
                  </select>
                </div>
              </fieldset>
              <p className="error" hidden={isEmployee}>
                Sorry, please navigate to a public testing website to schedule
                your test
              </p>
            </div>
          </div>
          <div>
            <button onClick={() => submitLocation()} className="button">
              Continue
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .grid {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          color: white;
          width: 100%;
          margin-top: 3rem;
        }
        .grid_subcontainer {
          width: 100%;
          background: #0f4d92;
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
        }
        .question_div {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: start;
          -ms-flex-align: start;
          align-items: flex-start;
          -webkit-box-pack: start;
          -ms-flex-pack: start;
          justify-content: flex-start;
          margin: 0 0 3% 0;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -ms-flex-direction: row;
          flex-direction: row;
          width: 100%;
        }
        .age_check,
        .have_referral {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: start;
          -ms-flex-align: start;
          align-items: flex-start;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
        }
        .div_hide {
          display: none;
        }

        .cancel_link {
          color: white;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
