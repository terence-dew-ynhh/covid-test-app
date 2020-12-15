import React, { useState } from 'react';
import QuestionView from './QuestionViewComponent';
import styles from './QuestionContainerComponent.module.css'
import { useRouter } from 'next/router';


const QuestionFormComponent = ({}) => {

  const [viewIdx, setviewIdx] = useState(0);
  const [endPoint, setEndpoint] = useState('Bridgeport Hospital');
  const compNames = ['employee', 'previoussymptoms', 'vaccinedose', 'exposuretocovid','selsymptoms','location'];
  const router = useRouter();

  
  const nextPage = () => {
    let index = viewIdx + 1;
    setviewIdx(index);
  };

  const prevPage = () => {
    let index = viewIdx - 1;
    setviewIdx(index);
  };

  const viewPush = (isscheduleView) => {

    if(isscheduleView)
    router.push(`/scheduling?endpoint=${endPoint}`,'/scheduling');
    else{
    router.push(`/error`,'/error');
    }
  };

  const updateLocation = (endpoint) =>{
    setEndpoint(endpoint);
  }

 let progressWidth = 100*((viewIdx+1)/4);

  return (
    <div className={styles.questionContainer}>
          {/* <div style={{  
            content: '',
	          position: 'fixed',
	          bottom: '0px',
	          left: '0%',
            width: `${progressWidth}%`,
            fontSize: '1.2em',
            fontWeight: '600',
            paddingLeft: `${progressWidth-15}%`,
            color: '#0f4d92',
            borderBottom: '15px solid #0f4d92'}} >{`${progressWidth}%`}</div> */}

      <QuestionView
        nextPage={nextPage}
        prevPage={prevPage}
        compName={compNames[viewIdx]}
        viewPush={viewPush}
        updateLocation={updateLocation}
      ></QuestionView>
    </div>
  );
};

export default QuestionFormComponent;
