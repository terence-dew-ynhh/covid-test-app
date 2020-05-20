import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import QuestionFormComponent from '../components/QuestionFormComponent';

export default function FAQ() {
  const [isCovidPositive, setIsCovidPositive] = useState('');
  const [isTwoWeeksSince, setIsTwoWeeksSince] = useState('');

  

  return (
    <>
    <div className="container">
      <Head>
        <title>Yale COVID-19 Test Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img src="/YHlogo_color.png"></img>
      <span className="divider"></span>
      
      
      <div className="questions_div">
            <h1 className="main-h">Pilot COVID-19 Screening Program </h1>
            <p>Yale faculty, staff, and trainees authorized to be on campus are invited to be screened for COVID-19. 
                We are screening on-campus community members who do not have symptoms of COVID-19 for the following reasons:</p>
            
            <ul>
                <li>By testing those on campus, we can learn about the extent of asymptomatic infections in a large campus population.
                     It will assist us with planning and understanding the need for larger-scale testing in future phases 
                     of resuming on-campus activities.</li>
                <li>Asymptomatic individuals can transmit the novel coronavirus to others, so screening can help 
                    us avoid bringing silent cases of COVID-19 to campus, where it might be transmitted to others.</li>
            </ul>


            <p>Screening is voluntary and is available as a drive-thru or walk-up service in the Prospect Sachem Garage. An appointment is required for screening. 
            Please read the Frequently Asked Questions below, and if you have any questions, call the Yale COVID-19 Resource Line at </p>
            
            
            <Link href="/survey"><a className="main-link">DETERMINE YOUR ELIGIBILITY FOR SCREENING</a></Link>
            <h2>Frequently Asked Questions</h2>
            <h3>Participation in COVID-19 screening</h3>
            <p><b>Q:</b>	Is this screening mandatory?<br></br>
            <b>A:</b>	No. You have the option to be screened, but screening is not required at this time.
            </p>
            <p><b>Q:</b>	Who is eligible to participate in the pilot COVID-19 screening program?<br></br>
            <b>A:</b>	This pilot COVID-19 screening program is for faculty, staff, and trainees who are authorized to be on campus, who are not showing symptoms of COVID-19, and who do not currently have confirmed COVID-19 infection. 
            </p>
            <p>Yale community members who are working remotely are not eligible for this testing program and should contact their 
             personal health care provider for questions related to COVID-19 screening. Individuals who are experiencing symptoms that may be suggestive of COVID-19 should remain at home and call their personal health care provider to discuss testing and treatment. Symptoms may include fever, cough, shortness of breath, sore throat, fatigue, muscle aches, loss of sense of smell or taste, or stomach upset.
            </p>
            <p><b>Q:</b>	If I tested positive in the past, should I be screened again?<br></br>
            <b>A:</b>	If you have already tested positive for COVID-19, you should not be retested at this time.
            </p>
            <p><b>Q:</b>	If I have tested negative in the past, can I be screened again at this time?<br></br>
            <b>A:</b>	Yes, you can be screened again. 
            </p>
            <p><b>Q:</b>	I am not feeling well. Should I be screened?<br></br>
            <b>A:</b>	No, you should not participate in the Pilot COVID-19 Screening Program. If you are experiencing 
            any symptoms related to COVID-19, you must stay home, notify your supervisor as soon as possible, 
            and contact your personal health care provider to discuss testing and treatment. Symptoms may include fever, cough, 
            shortness of breath, sore throat, fatigue, muscle aches, loss of sense of smell or taste, or stomach upset.
            </p>


            <h3>Details of screening and obtaining results</h3>
            <p><b>Q:</b>	What type of sample is required? How will it be collected?<br></br>
            <b>A:</b>	Testing requires a deep nasal sample (swab inserted into one nostril). Samples will be collected by a healthcare provider at the testing facility.
            </p>
            <p><b>Q:</b>	Will I be charged a copay or fee for this test?<br></br>
            <b>A:</b>	No 
            </p>
            <p><b>Q:</b>	 How long will it take to receive my results?<br></br>
            <b>A:</b>	Results will typically be available within 48 to 72 hours from sample collection. 
            </p>
            <p><b>Q:</b> 	How will I find out my results?<br></br>
            <b>A:</b>	Results will be shared with you through MyChart. If you do not already have a MyChart account, 
            you will be offered an opportunity to sign up for one following the scheduling process. 
            If you are still unable to access MyChart, <a href="mailto:mychartsupport@ynhh.org">email MyChart Support</a> or call them at 203-688-2231 and press option #5.
            </p>
            
            
            
            <h3>Interpreting and responding to different test results</h3>
            <p><b>Q:</b>	What does it mean if I test positive?<br></br>
            <b>A:</b>	A positive test indicates the presence of the novel coronavirus in your system. 
            You may develop symptoms in the future, or you may never develop symptoms. It is possible to 
            transmit the virus even in the absence of symptoms. You will need to self-isolate for 10 days 
            to prevent transmission to others. If your test result is positive, someone from Employee Health 
            with contact you to provide instructions and answer questions.
            </p>
            <p><b>Q:</b>	What does it mean if I test negative?<br></br>
            A negative test means that the novel coronavirus is not detected by the test at this time. 
            Individuals who test negative may still become infected in the future and need to follow 
            all recommended workplace and community precautions. There is a small chance of a false negative.
            </p>
            <p><b>Q:</b>	What will Yale do with these results?<br></br>
            <b>A:</b>	Because this testing is part of a workplace safety program, Yale may store and track these results. 
            Your supervisor will be notified of positive test results to ensure that safety measures are being taken
             in your workplace. Others in your workplace will be contacted by Employee Health for contact tracing, and
              Employee Health will ask your close contacts to quarantine for 14 days. 
            </p>
            <p><b>Q:</b>	If I test positive, how long will I be required to be out of work?<br></br>
            <b>A:</b>	You must self-isolate at home for 10 days. Should you become symptomatic during that time, 
            you will need to speak to Employee Health or your healthcare provider. Your period of self-isolation 
            will be extended to 14 days from symptom onset and 3 days after resolution of fever and improvement.
            </p>
            <p><b>Q:</b>	If I test positive and have to be out of work, how will I be paid?<br></br>
            <b>A:</b>	Employees will be paid their regular scheduled hours while out of work after screening positive.  
            Employees will not have to use PTO.
            </p>
            <p><b>Q:</b>	If I test positive, is my immediate family eligible to be tested?<br></br>
            <b>A:</b>	Screening through this workplace safety program is available only to Yale faculty, 
            staff and trainees authorized to be on campus currently. Immediate family members should 
            contact their own health care providers so that they can be tested according to the public testing protocols. 
            </p>
            <p><b>Q:</b>	 If I test negative and then develop symptoms how long should I wait to be retested?<br></br>
            <b>A:</b>	If you are experiencing any symptoms, you must remain at home, notify your supervisor, and contact your 
            personal health care provider for testing and treatment. 
            </p>
            <Link href="/survey"><a className="main-link">DETERMINE YOUR ELIGIBILITY FOR SCREENING</a></Link>
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
          width: 100%;
          padding-left: 2%;
        }
        h2,.main-h{
            color:#0070c0;
        }
        .main-link{
            background: #00008B;
            font-size: 2em;
            color: white;
            width: 60%;
        }
        ul{
            width:100%;
        }
        @media(max-width:422px){
            .main-link{
                font-size: 1.5em; 
            }
        }

      `}</style>
    </div>
    </>
  );
}
