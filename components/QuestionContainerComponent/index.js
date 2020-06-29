import React, { useState } from 'react';
import QuestionView from './QuestionViewComponent';
import styles from './QuestionContainerComponent.module.css'
import { useRouter } from 'next/router';


const QuestionFormComponent = ({}) => {

  const [viewIdx, setviewIdx] = useState(0);
  const [endPoint, setEndpoint] = useState('Bridgeport Hospital');
  const compNames = ['employee', 'symptoms', 'symptomssel', 'location'];
  const router = useRouter();

  
  const nextPage = () => {
    let index = viewIdx <= 2 ? viewIdx + 1 : viewIdx;
    setviewIdx(index);
  };

  const prevPage = () => {
    let index = viewIdx > 0 ? viewIdx - 1 : viewIdx;
    setviewIdx(index);
  };

  const schedulePush = () => {

    router.push(`/scheduling?endpoint=${endPoint}`,'/scheduling');
  };

  const updateLocation = (endpoint) =>{
    setEndpoint(endpoint);
  }



  return (
    <div className={styles.questionContainer}>

      <QuestionView
        nextPage={nextPage}
        prevPage={prevPage}
        compName={compNames[viewIdx]}
        schedulePush={schedulePush}
        updateLocation={updateLocation}
      ></QuestionView>
    </div>
  );
};

export default QuestionFormComponent;
