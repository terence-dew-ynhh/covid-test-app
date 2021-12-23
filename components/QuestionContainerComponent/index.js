import React, { useState } from 'react';
import QuestionView from './QuestionViewComponent';
import styles from './QuestionContainerComponent.module.css';
import { useRouter } from 'next/router';

const QuestionFormComponent = ({}) => {
  const [viewIdx, setviewIdx] = useState(0);
  const [endPoint, setEndpoint] = useState('Bridgeport Hospital');
  const [hasSymptoms, setHasSymptoms] = useState(false)
  const compNames = ['approval','firstresponder', 'seldept', 'needcovid', 'consent'];
  const router = useRouter();

  let progressWidth = Math.floor(100 * ((viewIdx + 1) / 3));

  const nextPage = () => {
    let index = viewIdx + 1;
    setviewIdx(index);
  };

  const prevPage = () => {
    let index = viewIdx - 1;
    setviewIdx(index);
  };

  const schedulePush = () => {
    router.push(`/scheduling?hasSymptoms=${hasSymptoms}`, '/scheduling');
  };

  const updateHasSymptoms = (symptoms) => {
    setHasSymptoms(symptoms)
};

  return (
    <div className={styles.questionContainer}>
      <div
        style={{
          content: '',
          position: 'fixed',
          bottom: '0px',
          left: '0%',
          width: `${progressWidth}%`,
          fontSize: '1.2em',
          fontWeight: '600',
          paddingLeft: `${progressWidth - 15}%`,
          color: '#0f4d92',
          borderBottom: '15px solid #0f4d92'
        }}
      >{`${progressWidth}%`}</div>

      <QuestionView
        nextPage={nextPage}
        prevPage={prevPage}
        compName={compNames[viewIdx]}
        schedulePush={schedulePush}
        updateHasSymptoms={updateHasSymptoms}
      ></QuestionView>
    </div>
  );
};

export default QuestionFormComponent;
