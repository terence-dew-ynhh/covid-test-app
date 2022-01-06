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

  return (
    <div className="container">
      <Head>
        <title>City of New Haven COVID19 Testing</title>        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid">
        <img src="/YNHHSLogo.png"></img>
        {/* <button className="langButton" onClick={(e) => setIsSpanish(!isSpanish)}>
          {isSpanish ? 'English' : `Español`}
        </button> */}
      </div>
      <h1 className="title">{homeText[2]}</h1>

      <QuestionContainerComponent isSpanish={isSpanish} updateHeader={updateHeader} />
    </div>
  );
}

export default Home;

