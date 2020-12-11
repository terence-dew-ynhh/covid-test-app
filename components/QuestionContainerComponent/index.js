import React, { useState } from 'react';
import PathSelectComponent from './PathSelectComponent';
import PathywayOne from './PathywayOneComponent';
import PathywayTwo from './PathywayTwoComponent';
import PathywayThree from './PathywayThreeComponent';
import PathywayFour from './PathywayFourComponent';
import PathywayFive from './PathywayFiveComponent';
import SymptomRecoveryPathwayComponent from './SymptomRecoveryPathwayComponent';
import styles from './QuestionContainerComponent.module.css';
import { useRouter } from 'next/router';

const QuestionFormComponent = ({}) => {
  const router = useRouter();
  const [viewIdx, setviewIdx] = useState(0);
  const [pathway, setPathway] = useState(0)
  const components = [
    PathSelectComponent,
    PathywayOne,
    PathywayTwo,
    PathywayThree,
    PathywayFour,
    PathywayFive,
    SymptomRecoveryPathwayComponent
  ];

  let progressWidth = Math.floor(100 * ((viewIdx + 1) / 3));

  const selectPathway = (idx) => {
    console.log(idx);
    setviewIdx(idx);
    if(idx > 0 && idx < 5){
      setPathway(idx)
    }
  };

  const schedulePush = (page) => {
    if(viewIdx == 4){
    router.push(`/submissionform?pathway=${4}&rtwstatus=${true}`, '/submissionform');
    }
    else{
    router.push(`/${page}`);
    }
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
        pathway={pathway}
      ></PathComponentName>
    </div>
  );
};

export default QuestionFormComponent;
