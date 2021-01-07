import React, { useState } from 'react';
import QuestionView from './QuestionViewComponent';
import styles from './QuestionContainerComponent.module.css'
import { useRouter } from 'next/router';


const QuestionFormComponent = () => {

  const [viewIdx, setviewIdx] = useState(0);
  
  // Old States to be removed
  const [endPoint, setEndpoint] = useState('Bridgeport Hospital');

  //New States
  const [department, setDepartment] = useState("Cornell Scott");
  const [isPfizer, setIsPfizer] = useState(null);
  const [viewJump, setviewJump] = useState([]);
  const [selDate, setSelDate] = useState('')

  const compNames = ['deptselect','pininput','vaccineconsent','firstdose','listconditions','testedpositive','covidsymptoms','factsheet', 'quartinecovid','selectedvaccine','vaccinedateselect','selectsymptoms'];
  
  const router = useRouter();

  const verifyPin = async (pin) => {
    //axios POST request to auth
    //next page if response true
    // error message if false

    const action = 'post';
    const res = await fetch('/api/auth', {
      method: action,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        department: department, 
        pin: pin 
        })
    })
    return res.json();
  }


  const nextPage = (e, pageIncrement = 1) => {
    let index = viewIdx + pageIncrement;
    setviewIdx(index);
    let newjumpArr = [...viewJump, pageIncrement];
    setviewJump(newjumpArr);
    // setView
  };

  const prevPage = (e) => {
    let index =
       viewIdx - viewJump[viewJump.length - 1];
    let newjumpArr = [...viewJump];
    newjumpArr.splice(viewJump.length - 1, 1);
    setviewJump(newjumpArr);
    setviewIdx(index);
  };

  const pfizerSelected = (isPfizerSelected) =>{
    setIsPfizer(isPfizerSelected);
  }

  const setReccDate = (date) => {
    setSelDate(date);
  }

  const schedulePush = () => {

     router.push(`/scheduling?recc_date=${selDate}&second_dose=${(isPfizer == null ? false : true)}`,'/scheduling');
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
        setDepartment = {setDepartment}
        verifyPin = {verifyPin}
        isPfizer={isPfizer}
        pfizerSelected={pfizerSelected}
        setReccDate={setReccDate}
      ></QuestionView>
    </div>
  );
};

export default QuestionFormComponent;
