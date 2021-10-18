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
        <title>Mohegan COVID19 Vaccination</title>        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid'>
      <img src="/YNHHSLogo.png"></img>
      </div>      
      <h1 className="title">
      YNHH COVID19 Vaccination
        </h1>
        <h1 className="loading_h1">Reloading...</h1>        
    </div>     

  )
}
