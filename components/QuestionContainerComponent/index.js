import React, { useState } from 'react';
import QuestionView from './QuestionViewComponent';
import styles from './QuestionContainerComponent.module.css'
import { useRouter } from 'next/router';


const QuestionFormComponent = ({showHideVertBanner, showHideHorizBanner}) => {

  const [viewIdx, setviewIdx] = useState(0);
  const [endPoint, setEndpoint] = useState('Advanced Nursing and Rehab Mass Testing');
  const compNames = ['employee','previous','location'];
  const router = useRouter();

  
  const nextPage = () => {
    let index = viewIdx <= 2 ? viewIdx + 1 : viewIdx;
    setviewIdx(index);
    if(viewIdx === 0){ showHideVertBanner(true); showHideHorizBanner(false);}
    else if(viewIdx === 1){showHideVertBanner(false); showHideHorizBanner(true);}
    else{showHideVertBanner(true); showHideHorizBanner(false); }
  };

  const prevPage = () => {
    let index = viewIdx > 0 ? viewIdx - 1 : viewIdx;
    setviewIdx(index);
    if(viewIdx === 0){ showHideVertBanner(false); showHideHorizBanner(true);}
    else if(viewIdx === 1){showHideVertBanner(false); showHideHorizBanner(true);}
    else{showHideVertBanner(true); showHideHorizBanner(false); }
  };

  const schedulePush = () => {

    router.push(`/scheduling?endpoint=${endPoint}`,'/scheduling');
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
        schedulePush={schedulePush}
        updateLocation={updateLocation}
      ></QuestionView>
    </div>
  );
};

export default QuestionFormComponent;
