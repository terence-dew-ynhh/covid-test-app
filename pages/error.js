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

      <img src="/YHlogo_color.png"></img>
      <span className="divider"></span>
      
      
      <div className="questions_div">
                       
            <h2>Frequently Asked Questions</h2>
            <h3>YNHHS COVID screening</h3>
            
            <p><b>Q:</b>Is this testing mandatory?<br></br>
            <b>A:</b>No.  Employees are provided the option to be tested.  Testing is not required at this time.
            </p>

            <p><b>Q:</b>Who is eligible to participate in the testing?<br></br>
            <b>A:</b>Eventually, our goal is to offer testing to anyone who works at YNHHS/YM and our affiliate sites. 
             As we work toward that goal, eligible areas will be added in phases.  
             Employees will be notified by their management as well as signage in their area when testing is being offered for their work area. 
             In addition added areas will be communicated through the SIM COVID email communications. 
            </p>
             
            <p><b>Q:</b>	If I tested positive in the past should I be tested again?<br></br>
            <b>A:</b>If you have already tested positive for COVID19, you should not be tested again for at least 6 weeks.
            </p>

            <p><b>Q:</b>If I have tested negative in the past can I be tested again at this time?
            <br></br>
            <b>A:</b> If you’ve been tested at all in the past 4 weeks, you should not be retested at this time.
            <br></br>
            <b></b>	If you are experiencing any symptoms while at work, you must leave the hospital/other workplace and notify your supervisor. 
            Contact Occupational Health via the Call Center to be evaluated.
            <br></br>
            <b></b>	If you develop symptoms while at home, stay home and notify your supervisor as soon as possible. 
            Contact Occupational Health via the Call Center to be evaluated.  
            </p>

            <p><b>Q:</b>What type of sample is required?  How will it be collected?<br></br>
            <b>A:</b>Testing requires a deep nasal sample (swab inserted approximately 1 inch into each nostril). 
             Samples will be self-collected under observation. Instructions will be provided with the collection device.  
            </p>

            <img src="/faq_icon.png"></img>


            <p><b>Q:</b>Will I be charged a copay or fee for this test?<br></br>
            <b>A:</b>	There will be no out of pocket expense for the employee.
            </p>

            <p><b>Q:</b>How long will it take to receive my results?<br></br>
            <b>A:</b>Results will be typically be available within 24 hours from sample collection. 
            </p>

            <p><b>Q:</b>How will I find out my results?<br></br>
            <b>A:</b>All results will be shared with you through MyChart.  Employees will be prompted to activate a MyChart account after scheduling an appointment.  If you are still unable to access MyChart, you can call Occupational Health at the Call Center for results (203) 688-1700 and select option #2 Occupational Health after selecting a language.  
            Please wait at least 12 hours after sample collection to inquire about results.<br></br>
            Additionally, clinician’s from the Occupational Health Call Center will contact employees with positive results by phone.  
            </p>

            <p><b>Q:</b>If I test positive what are the next steps?<br></br>
            <b>A:</b>	If you receive a positive result notification while at work, you must leave the hospital/other workplace and notify your supervisor. 
            An Occupational Health clinician will be contacting you to review home isolation guidelines and provide information on when you will be able to return to work.<br></br>
            During your home isolation period, our Care Coordination team will be calling you to perform a wellness check. If at any time during your isolation you develop symptoms, 
            contact Occupational Health via the Call Center to be evaluated. 
            </p>            
            
            
            <p><b>Q:</b>If I test positive how long will I be required to be out of work?<br></br>
            <b>A:</b>Occupational Health will advise employees who test positive regarding work status on a case by case basis.
            </p>

            <p><b>Q:</b>If I test positive and have to be out of work how will I be paid?<br></br>
            Employees will be paid their regular scheduled hours while out of work after screening positive. 
             Employees will not have to use PTO.
            </p>

            <p><b>Q:</b>If I test positive is my immediate family eligible to be tested?<br></br>
            <b>A:</b>Screening is only available to YNHHS/ YM employees at this time. Immediate family members will be tested according to the public testing protocols.  
            </p>

            <p><b>Q:</b>If I test negative and then develop symptoms how long should I wait to be retested?<br></br>
            <b>A:</b>	If you are experiencing any symptoms while at work, you must leave the hospital/other workplace and notify your supervisor.
             Contact Occupational Health via the Call Center to be evaluated.<br></br>
             If you develop symptoms while at home, stay home and notify your supervisor as soon as possible. Contact Occupational Health via the Call Center to be evaluated.
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
  );
}
