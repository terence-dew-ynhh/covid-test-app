import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function FAQ() {
  const [isCovidPositive, setIsCovidPositive] = useState('');
  const [isTwoWeeksSince, setIsTwoWeeksSince] = useState('');

  return (
    <div className="container">
      <Head>
        <title>Yale COVID-19 Vaccine Clinical Trial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid">
        <img src="/YNHHSLogo.png"></img>
      </div>
      <h1>Yale COVID-19 Vaccine Clinical Trial</h1>
      <h2>Introduction & Appointment Scheduler</h2>
      <div className="questions_div">
        <p>
          <b>Your Contribution</b>
          <br></br>
          <br></br>
          Currently, there are no approved vaccines available to prevent
          COVID-19 and the disease has spread across the world. The COVID
          vaccine we are studying at Yale has already been studied in thousands
          of people for dosing and safety. This round is the largest so far to
          help determine how well the vaccine works and identify any new more
          rare side effects. Each and every person involved in clinical research
          plays a powerful role. Volunteering for this study can make a
          difference as we try to find potential vaccines to prevent COVID-19.
        </p>

        <p>
          <b>About This Study</b>
          <br></br>
          <br></br>
          This study will take place in 3 stages and involves testing a placebo
          against multiple investigational vaccines, at different dose levels
          (amounts of vaccine), to try and prevent COVID-19. Each vaccine is
          slightly different, but is intended to work in the same way. All are
          given by injection.
        </p>

        <p>
          <b>What to Expect</b>
          <br></br>
          <br></br>
          You will be randomly assigned (by chance) to receive the study vaccine
          or placebo (inactive substance). This assignment will be made by a
          computer and not by the study team. Neither you nor the study doctor
          will be told which group you are in nor, if you are receiving a
          vaccine, which one it is. In the event of an emergency, the study team
          will quickly find out this information.
          <br></br>
          Each participant will receive 2 injections. Some participants will
          receive their injections 3 weeks apart and some will receive their
          injections 2 months apart. The study doctor will explain to
          participants when they will have their two injections. The study team
          will be able to schedule the appointments.
        </p>

        <p>
          <b>Study Visits</b>
          <br></br>
          <br></br>• At each study visit, the study team will ask about your
          general health and complete study procedures such as a physical exam
          or taking your blood pressure
          <br></br>• On injection days, the study vaccine or placebo will be
          given through an injection into the muscle of the upper arm and nasal
          swabs will be collected
          <br></br>• After the injection, you will be asked to wait at the study
          site for at least 30 minutes
          <br></br>• Blood samples will be taken at up to 9 planned study
          visits. Each time, about 25mL (5 teaspoons) of blood will be collected
          <br></br>• The study team will provide you with nasal swabs and
          instruct you on how to take a swab from your nose at home if you
          experience symptoms that might be caused by COVID-19 while enrolled in
        </p>

        <p>
          <b>Recording Reactions</b>
          <br></br>
          <br></br>☑ An electronic diary (e-diary) (a device or app on your
          phone)<br></br> ☑ A digital thermometer<br></br> ☑ A caliper (a device
          to measure any redness and swelling at the injection site)
          <br></br>
          You will complete the e-diary once a day for 7 days after receiving
          study injection to record specific reactions you may experience. If
          you experience potential COVID-19 symptoms while you are enrolled in
          this study, please contact your study doctor immediately.
        </p>

        <p>
          <b>Q&A: We Are Here to Help</b>
          <br></br>
          <br></br>
          We want to make sure that any questions you have are fully answered.
          If you have questions or concerns about anything related to this
          vaccine research study as you consider volunteering, please let the
          study team know. If you do not have questions now you can call the
          study site or send the study team an email using the contact details
          below at any time
        </p>

        <h3>
          Due to great demand and interest, extra hours added for this Saturday
          August 29
        </h3>

        <Link href="/questions">
          <a>
            <b>{'Get Started >'} </b>
          </a>
        </Link>
      </div>

      <style jsx>{`
        .questions_div {
          width: 80%;
          background: white;
          box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: start;
          -ms-flex-align: start;
          align-items: center;
          -webkit-box-pack: start;
          -ms-flex-pack: start;
          justify-content: flex-start;
          margin: 0 0 3% 0;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          -ms-flex-direction: column;
          flex-direction: column;
          padding-left: 2%;
          padding-top: 3%;
          padding-bottom: 3%;
        }
        h1,
        .main-h {
          color: #0070c0;
        }
        h3 {
          color: #0070c0;
        }
        a {
          margin-top: 1%;
          font-size: 1.3em;
        }
        .main-link {
          background: #00008b;
          font-size: 2em;
          color: white;
          width: 60%;
        }
        p {
          width: 80%;
        }
        ul {
          width: 100%;
        }
        @media (max-width: 475px) {
          .main-link {
            font-size: 1.5em;
          }
          p {
            width: 90%;
          }
        }
      `}</style>
    </div>
  );
}
