import { useState } from 'react';
const axios = require('axios');
import ReturnFromHighRiskComponent from './ReturnFromHighRiskComponent';
import styles from './PathywayFiveComponent.module.css'
import { useRouter } from 'next/router';


const PathywayFiveComponent = ({
  
}) => {
  const router = useRouter();
  const components = [ReturnFromHighRiskComponent];

  // TODO: Yes: route to Testing website: https://ocucovidtesting.ynhhs.org/ 

  const schedulePush = () => {
    window.location.href = 'https://ocucovidtesting.ynhhs.org/';
  };

  const ComponentName = components[0];

  return (
    <div className={styles.questionContainer}>
      <div className={styles.questionContainer}>
      <ComponentName
        schedulePush={schedulePush}
      />
      </div>
      <div className={styles.buttonContainer}>          

      </div>
    </div>
  );
};

export default PathywayFiveComponent;
