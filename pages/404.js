import Head from 'next/head'
import Router from 'next/router'
import Link from 'next/link';
import {useEffect} from 'react'


export default function Home() {


  useEffect(() => {
    const {pathname} = Router
    
    Router.push('/')
    
  });

  return (
    <div className="container">
      <Head>
        <title>COVID-19 Employee Return to Work Clearance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid'>
      <img src="/YNHHSLogo.png"></img>
      </div>      
      <h1 className="title">
      COVID-19 Employee Return to Work Clearance
        </h1>
        <h1 className="loading_h1">Reloading...</h1>        
    </div>     

  )
}
