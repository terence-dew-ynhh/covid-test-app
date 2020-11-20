import React, { useState } from 'react';
import Head from 'next/head';
import QuestionContainerComponent from '../components/QuestionContainerComponent';

export default function Home() {
  const [hideVertBanner, setHideVertBanner] = useState(true);
  const [hideHorizontalBanner, setHideHorizontalBanner] = useState(false);
  const [hideVert2Banner, setHideVert2Banner] = useState(true);
  const [hideHorizontal2Banner, setHideHorizontal2Banner] = useState(true);

  const showHideVertBanner = (flag) => {
    setHideVertBanner(flag);
  };

  const showHideHorizBanner = (flag) => {
    setHideHorizontalBanner(flag);
  };

  const showHideVert2Banner = (flag) => {
    setHideVert2Banner(flag);
  };

  const showHideHoriz2Banner = (flag) => {
    setHideHorizontal2Banner(flag);
  };

  return (
    <div className="container">
      <Head>
        <title>YNHH COVID-19 Test Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid">
        <img src="/YNHHSLogo.png"></img>
        <img
          hidden={hideHorizontalBanner}
          className="horiz_img"
          src="/horiz_banner_1.jpg"
        ></img>
        <img
          hidden={hideHorizontal2Banner}
          className="horiz_img"
          src="/horiz_banner_2.jpg"
        ></img>
      </div>
      <img
        hidden={hideVertBanner}
        className="vert_img"
        src="/vert_banner_2.jpg"
      ></img>
      <img
        hidden={hideVert2Banner}
        className="vert_img"
        src="/vert_banner_1.jpg"
      ></img>
      <h1 className="title">
        See if you qualify for coronavirus (COVID-19) testing
      </h1>
      <QuestionContainerComponent
        showHideVert2Banner={showHideVert2Banner}
        showHideHoriz2Banner={showHideHoriz2Banner}
        showHideVertBanner={showHideVertBanner}
        showHideHorizBanner={showHideHorizBanner}
      ></QuestionContainerComponent>
    </div>
  );
}
