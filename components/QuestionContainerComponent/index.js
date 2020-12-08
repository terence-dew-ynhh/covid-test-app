import React, { useState } from 'react';
import PathSelectComponent from './PathSelectComponent';
import PathywayOne from './PathywayOneComponent';
import PathywayTwo from './PathywayTwoComponent';
import PathywayThree from './PathywayThreeComponent';
import PathywayFour from './PathywayFourComponent';
import PathywayFive from './PathywayFiveComponent';
import styles from './QuestionContainerComponent.module.css';
import { useRouter } from 'next/router';

const QuestionFormComponent = ({}) => {
  const [viewIdx, setviewIdx] = useState(0);
  const components = [
    PathSelectComponent,
    PathywayOne,
    PathywayTwo,
    PathywayThree,
    PathywayFour,
    PathywayFive
  ];

  let progressWidth = Math.floor(100 * ((viewIdx + 1) / 3));

  const selectPathway = (idx) => {
    console.log(idx);
    setviewIdx(idx);
  };

  const schedulePush = (page) => {
    router.push(`/${page}`);
  };

  const PathComponentName = components[viewIdx || 0];

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

      <PathComponentName
        schedulePush={schedulePush}
        selectPathway={selectPathway}
      ></PathComponentName>
    </div>
  );
};

export default QuestionFormComponent;
