import React, { useState, useEffect } from 'react';
import QuestionView from './QuestionViewComponent';
import styles from './QuestionContainerComponent.module.css';
import { useRouter } from 'next/router';

const QuestionFormComponent = ({ updateHeader, isSpanish }) => {

  useEffect(() => {
    // window.location.href ='http://covidvaccine.ynhh.org/'
  }, []);

  const [viewIdx, setviewIdx] = useState(0);

  //New States
  const [department, setDepartment] = useState('Cornell Scott');
  const [isPfizer, setIsPfizer] = useState(null);
  const [isInZipCodeRange, setIsInZipCodeRange] = useState(false);
  const [viewJump, setviewJump] = useState([]);
  const [selDate, setSelDate] = useState('');
  const [responseData, setResponseData] = useState({});

  const compNames = [
    'pininput',
    'vaccineconsent',
    'listconditions',
    'testedpositive',
    'covidsymptoms',
    'monoclonal',
    'factsheet',
    'vaccineschedule',
    'quartinecovid',
    'selectedvaccine',
    'vaccinedateselect',
    'selectsymptoms'
  ];

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
        department: 'YNHH',
        pin: pin
      })
    });
    return res.json();
  };

  const submitData = async () => {
    //axios POST request to auth
    //next page if response true
    // error message if false

    const action = 'post';
    const res = await fetch('/api/responses', {
      method: action,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(responseData)
    });
    return res.json();
  };

  const nextPage = (e, pageIncrement = 1) => {
    let index = viewIdx + pageIncrement;
    setviewIdx(index);
    let newjumpArr = [...viewJump, pageIncrement];
    setviewJump(newjumpArr);
    // setView
  };

  const prevPage = (e) => {
    let index = viewIdx - viewJump[viewJump.length - 1];
    let newjumpArr = [...viewJump];
    newjumpArr.splice(viewJump.length - 1, 1);
    setviewJump(newjumpArr);
    setviewIdx(index);
  };

  const pfizerSelected = (isPfizerSelected) => {
    setIsPfizer(isPfizerSelected);
  };

  const zipCodeInRange = (isZipCodeInRange) => {
    setIsInZipCodeRange(isZipCodeInRange);
  };

  const setReccDate = (date) => {
    setSelDate(date);
  };

  const updateAnswerData = (questionData) => {
    // const dataKey = questionData.keys()
    // setResponseOrder([...responseOrder, ...dataKey[0]]);
    setResponseData({ ...responseData, ...questionData });
  };

  const schedulePush = () => {
    submitData();
    router.push(
      `/scheduling?recc_date=${selDate}&in_zip_range=${isInZipCodeRange}&second_dose=${
        isPfizer == null ? false : true
      }&isPfizer=${isPfizer}&isSpanish=${isSpanish}`,
      '/scheduling'
    );
  };

  let progressWidth = Math.floor(100 * ((viewIdx + 1) / compNames.length));

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
      ></QuestionView>
      {/* <p>{`Zip Code ${isInZipCodeRange ? 'is' : 'is not'} in range`}</p> */}
    </div>
  );
};

export default QuestionFormComponent;
