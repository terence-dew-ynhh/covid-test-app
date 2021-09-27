import React, { useState, useEffect } from 'react';
import QuestionView from './QuestionViewComponent';
import styles from './QuestionContainerComponent.module.css';
import { useRouter } from 'next/router';

const currentAppState = async () => {
  return await fetch('/api/open')
    .then((res) => res.json())
    .then((res) => res.open);
};

const QuestionFormComponent = ({ updateHeader, isSpanish }) => {
  const [viewIdx, setviewIdx] = useState(0);
  const [department, setDepartment] = useState('Cornell Scott');
  const [isPfizer, setIsPfizer] = useState(null);
  const [isJassenapproved, setIsJassenapproved] = useState(true);
  const [isInZipCodeRange, setIsInZipCodeRange] = useState(false);
  const [isOver18, setIsOver18] = useState(false);
  const [isRiskGroup, setIsRiskGroup] = useState(false);
  const [isImmunocomp, setIsImmunocomp] = useState(false);
  const [isBooster, setIsBooster] = useState(false);
  const [viewJump, setviewJump] = useState([]);
  const [selDate, setSelDate] = useState('');
  const [responseData, setResponseData] = useState({});
  const [applicationOn, setApplicationOn] = useState(false);

  const router = useRouter();

  useEffect(() => {
    currentAppState().then((appFlag) => {
      if (appFlag) {
        setviewIdx(1);
      }
      setApplicationOn(appFlag);
    });
  }, []);

  const compNames = [
    'hithistory',
    'testedpositive',
    'covidsymptoms',
    'quartinecovid',
    'monoclonal',
    'misc',
    'factsheet',
    'ynhhfactsheet',
  ];

  let progressWidth = Math.floor(100 * ((viewIdx + 1) / compNames.length));

  const pfizerSelected = (isPfizerSelected) => {
    setIsPfizer(isPfizerSelected);
  };

  const zipCodeInRange = (isZipCodeInRange) => {
    setIsInZipCodeRange(isZipCodeInRange);
  };

  const overEighteen = (isOver18) => {
    setIsOver18(isOver18);
  };

  const setReccDate = (date) => {
    setSelDate(date);
  };

  const setJJApproved = (approved) => {
    setIsJassenapproved(approved);
  };

  const setRiskGroup = (isRiskGroup) => {
    setIsRiskGroup(isRiskGroup);
  };

  const setImmunocompromised = (Immunocompromised) => {
    setIsImmunocomp(Immunocompromised);
  };
  const setBooster = (booster) => {
    setIsBooster(booster);
  };

  const updateAnswerData = (questionData) => {
    // const dataKey = questionData.keys()
    // setResponseOrder([...responseOrder, ...dataKey[0]]);
    setResponseData({ ...responseData, ...questionData });
  };

  const nextPage = (e, pageIncrement = 1) => {
    let index = viewIdx + pageIncrement;
    setviewIdx(index);
    let newjumpArr = [...viewJump, pageIncrement];
    setviewJump(newjumpArr);
  };

  const prevPage = (e) => {
    let index = viewIdx - viewJump[viewJump.length - 1];
    let newjumpArr = [...viewJump];
    newjumpArr.splice(viewJump.length - 1, 1);
    setviewJump(newjumpArr);
    setviewIdx(index);
    if(viewJump.length < 3){
      setIsImmunocomp(false);
    }
  };

  const schedulePush = () => {
    submitData();
    router.push(
      `/scheduling?recc_date=${selDate}&in_zip_range=${isInZipCodeRange}&second_dose=${
        isPfizer == null ? false : true
      }&isPfizer=${isPfizer}&isSpanish=${isSpanish}&isRiskGroup=${isRiskGroup}&isOver18=${isOver18}&jjapproved=${isJassenapproved}&isimmunocomp=${isImmunocomp}&isbooster=${isBooster}`,
      '/scheduling'
    );
  };

  const verifyPin = async (pin) => {
    const action = 'post';
    const res = await fetch('/api/auth', {
      method: action,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        department: department,
        pin: pin
      })
    });
    return res.json();
  };

  const submitData = async () => {
    const action = 'post';
    const res = await fetch('/api/responses', {
      method: action,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(responseData)
    });
    return res.json();
  };

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

      <QuestionView
        nextPage={nextPage}
        prevPage={prevPage}
        compName={compNames[viewIdx]}
        schedulePush={schedulePush}
        setDepartment={setDepartment}
        verifyPin={verifyPin}
        isPfizer={isPfizer}
        pfizerSelected={pfizerSelected}
        setReccDate={setReccDate}
        department={department}
        updateAnswerData={updateAnswerData}
        submitData={submitData}
        updateHeader={updateHeader}
        isSpanish={isSpanish}
        zipCodeInRange={zipCodeInRange}
        overEighteen={overEighteen}
        isOver18={isOver18}
        setRiskGroup={setRiskGroup}
        setJJApproved={setJJApproved}
        isJassenapproved={isJassenapproved}
        setImmunocompromised={setImmunocompromised}
        isImmunocomp={isImmunocomp}
        setBooster={setBooster}
        isBooster={isBooster}
      ></QuestionView>
      {/* <p>{`Zip Code ${isInZipCodeRange ? 'is' : 'is not'} in range`}</p> */}
    </div>
  );
};

export default QuestionFormComponent;
