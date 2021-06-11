import React, { useState } from 'react';
import QuestionView from './QuestionViewComponent';
import styles from './QuestionContainerComponent.module.css';
import { useRouter } from 'next/router';

const QuestionFormComponent = ({}) => {
  const [viewIdx, setviewIdx] = useState(0);
  const [endPoint, setEndpoint] = useState('Asymptomatic');
  const compNames = ['priortest', 'eighteen', 'consent', 'symptomssel'];
  const router = useRouter();

  const nextPage = () => {
    let index = viewIdx <= 3 ? viewIdx + 1 : viewIdx;
    setviewIdx(index);
  };

  const prevPage = () => {
    let index = viewIdx > 0 ? viewIdx - 1 : viewIdx;
    setviewIdx(index);
  };

  const hasSymptoms = (hasSymptoms, hasMadeContact) => {
    hasSymptoms
      ? setEndpoint('Symptomatic')
      : hasMadeContact
      ? setEndpoint('AsymptomaticContact')
      : setEndpoint('Asymptomatic');
  };

  const schedulePush = () => {
    router.push(`/scheduling?endpoint=${endPoint}`, '/scheduling');
  };

  const updateLocation = (endpoint) => {
    setEndpoint(endpoint);
  };

  let progressWidth = 100 * ((viewIdx + 1) / 5);

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
        updateLocation={updateLocation}
        hasSymptoms={hasSymptoms}
      ></QuestionView>
    </div>
  );
};

export default QuestionFormComponent;
