import React, { useState } from "react";
import Head from "next/head";
import QuestionContainerComponent from "../components/QuestionContainerComponent";

export default function Home() {
  const [hideVertBanner, setHideVertBanner] = useState(true);
  const [hideHorizontalBanner, setHideHorizontalBanner] = useState(false);

 
const showHideVertBanner = (flag) => {
  setHideVertBanner(flag);
};

const showHideHorizBanner = (flag) => {
  setHideHorizontalBanner(flag);

};

  return (
    <div className="container">
      <Head>
        <title>YNHH COVID-19 Test Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid'>
      <img src="/YNHHSLogo.png"></img>
      <img hidden={hideHorizontalBanner} class="horiz_img" src="/horiz_banner.jpg"></img>
      </div>
      <img hidden={hideVertBanner} class="vert_img" src="/vert_banner.jpg"></img>
      <h1 className="title">
          See if you qualify for coronavirus (COVID-19) testing
        </h1>
      <QuestionContainerComponent showHideVertBanner={showHideVertBanner} showHideHorizBanner={showHideHorizBanner}></QuestionContainerComponent>
      
    </div>
  );
}
