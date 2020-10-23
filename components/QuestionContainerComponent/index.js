import React, { useState } from 'react';
import QuestionView from './QuestionViewComponent';
import styles from './QuestionContainerComponent.module.css'
import { useRouter } from 'next/router';


const QuestionFormComponent = ({}) => {

  const [viewIdx, setviewIdx] = useState(0);
  const [endPoint, setEndpoint] = useState('Bridgeport Hospital');
  const compNames = ['employee', 'needcovidtesting','symptomssel', 'sevsymptomsstatment', 'symptomsstatment', 'outworkconsent', 'traveltesting', 'highriskstatement','returnfromhighrisk','posttravel', 'negconsent', 'location'];
  const [jumpTracking, setJumpTracking] = useState([]);
  const router = useRouter();

  
  const nextPage = (e, pageJump) => {
    let pageProg = pageJump ? pageJump : 1;
    let index = pageProg > 1 ? viewIdx + pageProg : viewIdx + 1;
    let newjumpArr = [...jumpTracking,pageProg]
    setJumpTracking(newjumpArr)
    setviewIdx(index);
  };

  const prevPage = (e) => {
    let index = viewIdx > 0 ? viewIdx - jumpTracking[jumpTracking.length - 1] : viewIdx;
    let newjumpArr = [...jumpTracking]
    newjumpArr.splice((jumpTracking.length-1),1)
    setJumpTracking(newjumpArr)
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
