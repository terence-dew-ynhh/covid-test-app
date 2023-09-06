import React, { useState } from 'react';
import QuestionView from './QuestionViewComponent';
import styles from './QuestionContainerComponent.module.css'
import { useRouter } from 'next/router';


const QuestionFormComponent = ({}) => {

  const [viewIdx, setviewIdx] = useState(0);
  const [endPoint, setEndpoint] = useState('BH FLU FAIR CLINIC');
  const compNames = ['employee','consent','previous','selectlocation'];
  const router = useRouter();

  
  const nextPage = () => {
    let index = viewIdx <= 4 ? viewIdx + 1 : viewIdx;
    setviewIdx(index);
  };

  const prevPage = () => {
    let index = viewIdx > 0 ? viewIdx - 1 : viewIdx;
    setviewIdx(index);
  };

  const schedulePush = (isdisqualified) => {

     router.push(`/scheduling?location=${endPoint}`,'/scheduling');
  };

  const updateLocation = (endpoint) =>{
    setEndpoint(endpoint);
  }

 let progressWidth = 100*((viewIdx+1)/4);

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
