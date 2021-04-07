import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import QuestionContainerComponent from '../components/QuestionContainerComponent';
import appText from '../data/questioncontainertext.json';




function Home({ initialIdx }) {
  const [isIndividual, setIsIndividual] = useState(false);
   const [isSpanish, setIsSpanish] = useState(false);

   let homeText = isSpanish ? appText.sp : appText.en

   useEffect(() => {

  }, []);

  const updateHeader = (isIndividualAns) => {
    setIsIndividual(isIndividualAns);
  };

  let callText = (
    <div>
      <h4>
        {' '}
        {homeText[0]}
      </h4>
      <h4>
      {homeText[1]}
      </h4>
    </div>
  );

  return (
    <div className="container">
      <Head>
        <title>YNHH COVID19 Vaccination</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid">
        <img src="/YNHHSLogo.png"></img>
        <button className="langButton" onClick={(e) => setIsSpanish(!isSpanish)}>
          {isSpanish ? 'English' : `Español`}
        </button>
      </div>
      <h1 className="title">{homeText[2]}</h1>

      <QuestionContainerComponent isSpanish={isSpanish} updateHeader={updateHeader} />
      {callText}
    </div>
  );
}

export default Home;

