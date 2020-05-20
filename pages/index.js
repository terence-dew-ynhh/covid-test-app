import Head from 'next/head'
import Router from 'next/router'
import Link from 'next/link';
import {useEffect} from 'react'


export default function Home() {


  useEffect(() => {
    const {pathname} = Router
    if(pathname == '/' ){
        Router.push('/api/auth')
    }
  });

  return (
    <div className="container">
      <Head>
        <title>Yale COVID-19 Test Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className="loading_container">
        <img src="/YHlogo_color.png"></img>
        <span className="divider"></span>
        <h1 className="loading_h1">Loading...</h1>        
        </div>

      <style jsx>{`
      .container{
        height: 100vh;
        width: 100%;
      }
      .loading_h1{
        text-align: center;
      }
      .loading_container{
          height: 100%;
          width: 100%;
          display:flex;
          flex-direction: column;
          align-items: center;
          justify-items: center;
          justify-content: center;
          align-content: center;
        }
      `}</style>
    </div>
  )
}
