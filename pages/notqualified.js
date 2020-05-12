import Head from 'next/head'
import ErrorMessageComponent from "../components/ErrorMessageComponent";


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>YNHH COVID-19 Test Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <img src="/YNHHSLogo.png"></img>
      <span className="divider"></span>
       <ErrorMessageComponent/>
      </main>
      <style jsx>{`
        
      `}</style>
    </div>
  )
}
