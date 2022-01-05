import React, { useState, useEffect } from 'react';
import QuestionView from './QuestionViewComponent';
import styles from './QuestionContainerComponent.module.css';
import { useRouter } from 'next/router';

const currentAppState = async () => {
  return await fetch('/api/open')
    .then((res) => res.json())
    .then((res) => res.open);
};

const QuestionFormComponent = ({ updateHeader, isSpanish }) => {
  const [viewIdx, setviewIdx] = useState(0);
  const [viewJump, setviewJump] = useState([]);
  const [responseData, setResponseData] = useState({});

  const router = useRouter();

  const compNames = [
    "employeeconsent",
    "recvaccineconsent"
  ];

  let progressWidth = Math.floor(100 * ((viewIdx + 1) / compNames.length));

  const nextPage = (e, pageIncrement = 1) => {
    let index = viewIdx + pageIncrement;
    setviewIdx(index);
    let newjumpArr = [...viewJump, pageIncrement];
    setviewJump(newjumpArr);
  };

  const prevPage = (e) => {
    let index = viewIdx - viewJump[viewJump.length - 1];
    let newjumpArr = [...viewJump];
    newjumpArr.splice(viewJump.length - 1, 1);
    setviewJump(newjumpArr);
    setviewIdx(index);
    if (viewJump.length < 3) {
      setIsImmunocomp(false);
    }
  };

  const schedulePush = () => {
    router.push(
      '/scheduling'
    );
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
      ></QuestionView>
    </div>
  );
};

export default QuestionFormComponent;
