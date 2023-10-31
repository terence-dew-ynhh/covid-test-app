import React from "react";
import Link from "next/link";
import styles from './ErrorMessEmployeeComponent.module.css'


const ErrorMessEmployeeComponent = () => {
  return (
<>
      <h2 className="title">
      You do not qualify for testing at this time.
      </h2>
      
    <div className={styles.errorContainer}>
      
    <h1 className="title">
    Try these resources for further information
      </h1>

    <p className="description">
    If you believe that you may have been exposed to COVID-19, we ask that you stay home at this time.
    </p>

     <ul>
         <li>If you believe you are sick with COVID-19, we recommend following the CDC's guidance. external link, opens in new tab</li>
         <li>Each state has its own guidelines for testing COVID-19. For additional information, contact your Primary Care Provider or local Department of Health.</li>
         <li>Telemedicine services can be an effective option for screening from the comfort of your home. MinuteClinic offers Video Visit in select states.</li>
         <li>If you are experiencing a medical emergency, call 911 immediately.</li>
     </ul>
  
     </div>
     <Link href="/">
       <a className="cancel_link">Home</a>
       </Link>
    </>
  );
};

export default ErrorMessEmployeeComponent;
