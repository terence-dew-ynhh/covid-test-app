import fetch from 'isomorphic-unfetch';
import React, { useState } from 'react';
import Head from 'next/head';
import QuestionContainerComponent from '../components/QuestionContainerComponent';

function Home({ uuid }) {
  const [isIndividual, setIsIndividual] = useState(false);

  const updateHeader = (isIndividualAns) => {
    setIsIndividual(isIndividualAns);
  };

  let callText = (
    <div>
      <h4>
        {' '}
        If you have questions about the vaccine or need help scheduling your
        vaccine please call 1-833-ASK-YNHH (275-9644) for assistance.
      </h4>
      <h4>
        If you are having MyChart or technical issues scheduling your vaccine
        please call 475-246-8041 for assistance
      </h4>
    </div>
  );

  return (
    <div className="container">
      <Head>
        <title>COVID-19 Vaccine Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid">
        <img src="/YNHHSLogo.png"></img>
      </div>
      <h1 className="title">COVID-19 Vaccine Scheduler</h1>

      <QuestionContainerComponent uuid={uuid} updateHeader={updateHeader} />
      {callText}
    </div>
  );
}

Home.getInitialProps = async (context) => {
  let uuid =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

  return { uuid: uuid };
};

export default Home;
