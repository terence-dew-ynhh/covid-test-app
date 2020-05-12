import Head from 'next/head'
import ErrorMessageComponent from "../components/ErrorMessageComponent";


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Yale COVID-19 Test Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <img src="/YHlogo_color.svg"></img>
      <span className="divider"></span>
       <ErrorMessageComponent/>
      </main>
      <style jsx>{`
        
      `}</style>
    </div>
  )
}
