import React, { useState } from 'react';
import QuestionView from './QuestionViewComponent';
import styles from './QuestionContainerComponent.module.css';
import { useRouter } from 'next/router';

const QuestionFormComponent = ({}) => {
  const [viewIdx, setviewIdx] = useState(0);
  const [location, setLocation] = useState('Fairfield County and NY');
  const [isSymptomatic, setIsSymptomatic] = useState(false);
  const [jumpTracking, setJumpTracking] = useState([]);
  const [progressBarVal, setProgressBarVal] = useState(12);
  const router = useRouter();

  const compNames = [
    'location',
    'employee',
    'needcovidtesting',
    'symptomssel',
    'sevsymptomsstatment',
    'outworkconsent',
    'possibleflu',
    'traveltesting',
    'highriskstatement',
    'posttravel',
    'negconsent',
    'vaccineexempt'
  ];

  const nextPage = (e, pageJump) => {
    let pageProg = pageJump ? pageJump : 1;
    let index = pageProg > 1 ? viewIdx + pageProg : viewIdx + 1;
    let newjumpArr = [...jumpTracking, pageProg];
    setJumpTracking(newjumpArr);
    setviewIdx(index);
    recalculateProgress();
  };

  const recalculateProgress = () => {
    console.log(viewIdx);
    if (viewIdx < 2) {
      setProgressBarVal(12);
    }
    if (viewIdx == 2) {
      setProgressBarVal(3);
    }
    if (viewIdx == 1) {
      setProgressBarVal(11);
    }
  };

  const prevPage = (e) => {
    let index =
      viewIdx > 0 ? viewIdx - jumpTracking[jumpTracking.length - 1] : viewIdx;
    let newjumpArr = [...jumpTracking];
    newjumpArr.splice(jumpTracking.length - 1, 1);
    setJumpTracking(newjumpArr);
    setviewIdx(index);
    recalculateProgress();
  };

  const schedulePush = () => {
    router.push(
      `/scheduling?status=${
        isSymptomatic ? 'Symptomatic' : 'Asymptomatic'
      }&location=${location}`,
      '/scheduling'
    );
  };

  const updateLocation = (location) => {
    setLocation(location);
  };
  
  const updateIsSymptomatic = (symptomatic) => {
    setIsSymptomatic(symptomatic);
  };

  let progressWidth = Math.floor(100 * ((viewIdx + 1) / progressBarVal));

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
        updateIsSymptomatic={updateIsSymptomatic}
      ></QuestionView>
    </div>
  );
};

export default QuestionFormComponent;
