import React, { useState } from 'react';
import QuestionView from './QuestionViewComponent';
import styles from './QuestionContainerComponent.module.css'
import { useRouter } from 'next/router';


const QuestionFormComponent = ({}) => {

  const [viewIdx, setviewIdx] = useState(0);
  const [endPoint, setEndpoint] = useState('Bridgeport Hospital');
  const compNames = ['age', 'gender', 'pregnancy', 'hepatitis', 'cancer', 'treatment','history'];
  const router = useRouter();

  
  const nextPage = (e, pageIncrement) => {
    console.log(pageIncrement)
    let increment = pageIncrement ? pageIncrement: 1 ;
    let index = viewIdx <= 6 ? viewIdx + increment : viewIdx;
    setviewIdx(index);
  };

  const prevPage = (e, pageIncrement) => {
    console.log(pageIncrement)
    let increment = pageIncrement ? pageIncrement: 1 ;
    let index = viewIdx <= 6 ? viewIdx - increment : viewIdx;
    setviewIdx(index);
  };

  const schedulePush = () => {

    router.push(`/scheduling?endpoint=${endPoint}`,'/scheduling');
  };

  const updateLocation = (endpoint) =>{
    setEndpoint(endpoint);
  }

 let progressWidth = Math.floor(100*((viewIdx+1)/7));

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
        updateLocation={updateLocation}
      ></QuestionView>
    </div>
  );
};

export default QuestionFormComponent;
