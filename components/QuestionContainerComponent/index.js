import React, { useState } from 'react';
import QuestionView from './QuestionViewComponent';
import styles from './QuestionContainerComponent.module.css'
import { useRouter } from 'next/router';


const QuestionFormComponent = ({}) => {

  const [viewIdx, setviewIdx] = useState(0);
  const [symptomatic, setSymptomatic] = useState(false);
  const compNames = ['employee', 'resident', 'overeighteen', 'symptomssel', 'healthcare', 'consent'];
  const [jumpArr, setJumpArr] = useState([]);
  const router = useRouter();

  
  const nextPage = (e, jump=1) => {
    let index = viewIdx + jump;
    let tmpJmpArry = [...jumpArr,jump];
    setJumpArr(tmpJmpArry);
    setviewIdx(index);
  };

  const prevPage = (e) => {
    let index =  viewIdx - jumpArr[viewIdx-1];
    setviewIdx(index);
  };

  const schedulePush = () => {

    router.push(`/scheduling?symptoms=${symptomatic}`,'/scheduling');
  };

  const updateSymptoms = (isSymptomatic) =>{
    setSymptomatic(isSymptomatic);
  }

 let progressWidth = 100*((viewIdx+1)/4);

  return (
    <div className={styles.questionContainer}>
          <div style={{  
            content: '',
	          position: 'fixed',
	          bottom: '0px',
	          left: '0%',
            width: `${progressWidth}%`,
            fontSize: '1.2em',
            fontWeight: '600',
            paddingLeft: `${progressWidth-15}%`,
            color: '#0f4d92',
            borderBottom: '15px solid #0f4d92'}} >{`${progressWidth}%`}</div>

      <QuestionView
        nextPage={nextPage}
        prevPage={prevPage}
        compName={compNames[viewIdx]}
        schedulePush={schedulePush}
        updateSymptoms={updateSymptoms}
      ></QuestionView>
    </div>
  );
};

export default QuestionFormComponent;
