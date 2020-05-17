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

        <div>
          <Link href="/api/auth">
          <a>Sign in with CAS</a>
          </Link>        
        </div>

      <style jsx>{`

      `}</style>
    </div>
  )
}
