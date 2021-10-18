import React, { useState } from 'react';
import Head from 'next/head';

export default function Info() {

  return (
    <div className="container">
      <Head>
        <title>Mohegan COVID19 Vaccination</title>        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <img style={{ }} src="Schedule.PNG"></img>

      <style jsx>{`
        img {
          width: 55%;
          height: 60%;
        }
        @media (max-width: 475px) {
          img {
            width: 100%;
            height: 100%
          }
      `}</style>
    </div>
  );
}