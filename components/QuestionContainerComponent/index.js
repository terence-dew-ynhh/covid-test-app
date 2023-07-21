import React, { useState } from 'react';
import QuestionView from './QuestionViewComponent';
import styles from './QuestionContainerComponent.module.css';
import { useRouter } from 'next/router';

const QuestionFormComponent = ({}) => {
  const [viewIdx, setviewIdx] = useState(0);
  const [language, setLanguage] = useState('');

  const compNames = [
    'info'
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

  const updateLanguage = (selLanguage) => {
    setLanguage(selLanguage);
  };

  const schedulePush = () => {
    router.push(
      `/scheduling?language=${language}`,
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
        updateLanguage={updateLanguage}
      ></QuestionView>
    </div>
  );
};

export default QuestionFormComponent;
