import React, { useState } from 'react';
import Head from 'next/head';

export default function FAQ() {
  const [isCovidPositive, setIsCovidPositive] = useState('');
  const [isTwoWeeksSince, setIsTwoWeeksSince] = useState('');

  return (
    <div className="container">
      <Head>
        <title>Yale COVID-19 Test Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid">
        <img src="/YNHHSLogo.png"></img>
      </div>

      <div className="questions_div">
        <h2>Frequently Asked Questions</h2>
        <h3>
          Janssen (J&J) vaccine and the risk of Thrombosis with Thrombocytopenia
          Syndrome (TTS)
        </h3>

        <p>
          <b>Q:</b>1. I have heard that the Janssen (J&J) Vaccine can cause
          blood clots. Is it safe for me to get it?<br></br><br></br>
          <b>A:</b>Blood clots involving blood vessels in the brain, abdomen,
          and legs, along with low levels of platelets (blood cells that help
          your body stop bleeding), have occurred in a small number of
          individuals who have received the Janssen (J&J) COVID-19 Vaccine. The
          condition is known as Thrombosis with Thrombocytopenia Syndrome (TTS).
          <br></br>
          <br></br>
          <p>
            <b>
              In individuals who developed these blood clots and low levels of
              platelets:
            </b>{' '}
          </p>
          <p>
            • Symptoms began approximately 1-2 weeks following vaccination.{' '}
          </p>
          <p>
            • Most people who developed these blood clots and low levels of
            platelets were females 18-49 years old.{' '}
          </p>
          <p>
            <b>
              Based on a review of cases through April 21, 2021, the chance of
              developing blood clots with low platelets after vaccination with
              the Janssen J&J) vaccine is extremely rare (less than one in a
              million overall):
            </b>
          </p>
          <p>
            • The risk among women 18-49 years old is 7 cases per million
            Janssen (J&J) vaccines given.{' '}
          </p>
          <p>
            • The risk among women 50 years and older is 0.9 cases per million
            Janssen (J&J) vaccines given.{' '}
          </p>
          <p>
            • Only one case has been reported among men who received the Janssen
            (J&J) vaccine.{' '}
          </p>
        </p>

        <p>
          <b>Q:</b>I have heard that young women are more likely to have
          complications from the Janssen (J&J) vaccine. Should women younger
          than 50 years not get this vaccine?<br></br><br></br>
          <b>A:</b>Women who are younger than 50 years may receive the Janssen
          (J&J) vaccine. However, they should be aware of the rare risk TTS.
          Although the overall risk is very low, the risk of TTS was higher in
          women younger than 50 years compared to older women. There are other
          FDA-authorized COVID-19 vaccines (i.e., the mRNA vaccines made by
          Pfizer and Moderna) that are available and have not been found to
          increase the risk of TTS.
        </p>

        <p>
          <b>Q:</b> If I tested positive in the past should I be tested again?
          <br></br><br></br>
          <b>A:</b>If you have already tested positive for COVID19, you should
          not be tested again for at least 6 weeks.
        </p>

        <p>
          <b>Q:</b>May I get the Janssen (J&J) vaccine if I am pregnant?
          <br></br><br></br>
          <b>A:</b> While pregnancy itself can make women more susceptible to
          developing blood clots, pregnancy is not known to make women more
          susceptible to TTS. As of April 21, 2021 there have been no pregnant
          women among those who reported this syndrome following Janssen (J&J)
          vaccination. It may be helpful to speak with your obstetrician or
          mid-wife if you have additional questions about the vaccine.
          <br></br>
        </p>

        <p>
          <b>Q:</b>May I get the Janssen (J&J) vaccine if I recently had a baby?
          <br></br><br></br>
          <b>A:</b>While the period during and after pregnancy can make women more susceptible to developing blood clots, women who have recently given birth are not known to be more susceptible to TTS following vaccination with the Janssen (J&J) vaccine. It may be helpful to speak with your obstetrician, pediatrician or mid-wife if you have additional questions about the vaccine.
        </p>

        <p>
          <b>Q:</b>May I get the Janssen (J&J) vaccine if I use a hormonal contraceptive?<br></br><br></br>
          <b>A:</b> While some hormonal contraceptives can make people more susceptible to developing blood clots, women who are on these hormones are not known to be more susceptible to TTS following vaccination with the Janssen (J&J) vaccine. It may be helpful to speak with your prescribing clinician if you have additional questions about the vaccine.
        </p>

        <p>
          <b>Q:</b>May I get the Janssen (J&J) vaccine if I take aspirin or a blood thinner?<br></br><br></br>
          <b>A:</b>Yes. You do not need to stop taking these medications prior to getting the Janssen (J&J) vaccine.
        </p>

        <p>
          <b>Q:</b>I have heard the Janssen (J&J) vaccine can cause blood clots. Should I take aspirin or a blood thinner before I get this vaccine?<br></br><br></br>
          <b>A:</b>No. There is no need to start aspirin or anticoagulant medication before the Janssen (J&J) vaccine unless you are prescribed them for another reason.
        </p>

        <p>
          <b>Q:</b>I have a history of blood clots. May I get the Janssen (J&J) vaccine?<br></br><br></br>
          <b>A:</b> Yes.  A past history of a blood clot(s) is not known to increase the risk of developing TTS, provided that the blood clots were not associated with a low platelet count. It may be helpful to speak with your regular clinician if you have additional questions about your blood clots and the risk associated with Janssen (J&J) vaccine.
        </p>

        <p>
          <b>Q:</b>I have a history of allergy to heparin. May I get the Janssen (J&J) vaccine?<br></br><br></br>
          <b>A:</b>Some people with a specific heparin allergy, known as Heparin-Induced Thrombocytopenia (HIT), should not get the Janssen (J&J) vaccine. If you think you may have an allergy to heparin, it is best to check with your regular clinician before getting this vaccine or instead get an mRNA COVID-19 vaccine (made by Pfizer or Moderna). 
        </p>

       
      </div>

      <style jsx>{`
        .questions_div {
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
          -ms-flex-direction: column;
          flex-direction: column;
          width: 87%;
          padding-left: 2%;
          background: white;
        }
        h2,
        .main-h {
          color: #0070c0;
          font-size: 2em;
        }
        h3{
          font-size: 1.5em;
        }
        p{
          font-size: 1.1em;
        }
        .main-link {
          background: #00008b;
          font-size: 2em;
          color: white;
          width: 60%;
        }
        .grid{
          margin-bottom: 2%;
        }
        ul {
          width: 100%;
        }
        @media (max-width: 422px) {
          .main-link {
            font-size: 1.5em;
          }
        }
      `}</style>
    </div>
  );
}
