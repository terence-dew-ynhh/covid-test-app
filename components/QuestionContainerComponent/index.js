import React, { useState } from 'react';
import QuestionView from './QuestionViewComponent';
import styles from './QuestionContainerComponent.module.css';
import { useRouter } from 'next/router';

const QuestionFormComponent = ({}) => {
  const [viewIdx, setviewIdx] = useState(0);
  const [status, setStatus] = useState('Asymptomatic');
  const [location, setLocation] = useState('Fairfield County and NY');
  const [isFiveOrBelow, setIsFiveOrBelow] = useState(false);
  const [selectionCode, setSelectionCode] = useState('');
  const [condition, setCondition] = useState('');

  const compNames = [
    'info',
    'billingchange',
    'location',
    'priortest',
    // '',
    'eighteen',
    'schedulingfor',
    'consent',
    'symptomssel',
    'notoffered',
    'feeconsent',
    'asympconsent',
    'sympconsent',
  ];
  const router = useRouter();

  const nextPage = (e, page = 1) => {
    let index = viewIdx + page;
    setviewIdx(index);
  };

  const prevPage = () => {
    let index = viewIdx > 0 ? viewIdx - 1 : viewIdx;
    setviewIdx(index);
  };

  const hasSymptoms = (hasSymptoms) => {
     hasSymptoms
      ? setStatus('Symptomatic')
      : setStatus('Asymptomatic');
  };

  const updateIsFiveOrBelow = (ageFiveOrBelow) => {
    setIsFiveOrBelow(ageFiveOrBelow)
  };

  const updateLocation = (siteLocation) => {
    setLocation(siteLocation);
  };

  const updateSelectionCode = (code) => {
    setSelectionCode(code);
  };

  const schedulePush = () => {
    router.push(
      `/scheduling?status=${status}&location=${location}&isBelowFive=${isFiveOrBelow}&code=${selectionCode}&condition=${condition}`,
      '/scheduling'
    );
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
        updateIsFiveOrBelow={updateIsFiveOrBelow}
        updateSelectionCode={updateSelectionCode}
        setCondition={(value) => setCondition(value)}
      ></QuestionView>
    </div>
  );
};

export default QuestionFormComponent;
