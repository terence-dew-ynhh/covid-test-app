import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function FAQ() {
  // const [isCovidPositive, setIsCovidPositive] = useState('');
  // const [isTwoWeeksSince, setIsTwoWeeksSince] = useState('');

  // const isAfter29th = () => {
  //   let GivenDate = '2020-08-29';
  //   let CurrentDate = new Date();
  //   GivenDate = new Date(GivenDate);

  //   return GivenDate > CurrentDate ? true : false
  // }
  return (
    <div className="container">
      <Head>
        <title>Yale COVID-19 Vaccine Clinical Trial</title>
        <link rel="icon" href="/favicon.ico" />
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
