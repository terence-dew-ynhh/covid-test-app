import React, { useState } from 'react';
import PathSelectComponent from '../PathSelectComponent';
import PathywayOne from '../PathywayOneComponent';
import PathywayTwo from '../PathywayTwoComponent';
import PathywayThree from '../PathywayThreeComponent';
import PathywayFour from '../PathywayFourComponent';
import PathywayFive from '../PathywayFiveComponent';
import PathywaySix from '../PathywaySixComponent';
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
    PathywayFive,
    PathywaySix
  ];

  let progressWidth = Math.floor(100 * ((viewIdx + 1) / 3));

  const selectPathway = (idx) => {
    setviewIdx(idx);
  };

  const ComponentName = components[viewIdx || 0];

  // const schedulePush = () => {
  //   router.push(`/scheduling`, '/scheduling');
  // };

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

      <ComponentName selectPathway={selectPathway}></ComponentName>
    </div>
  );
};

export default QuestionFormComponent;
