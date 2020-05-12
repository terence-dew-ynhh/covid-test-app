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
        
      <div className="scheduleContainer">
  <iframe id="openSchedulingFrame" className="widgetframe" scrolling="no" src="https://mychartnp.ynhhs.org/POC/openscheduling/SignupAndSchedule/EmbeddedSchedule?vt=2102&dept=101010165&view=plain&public=1"></iframe>
    </div>
      </main>
      <style jsx>{`
        .scheduleContainer, iframe{
          width: 100%;
          height: 100vh;
        }
      `}</style>
    </div>
  )
}
