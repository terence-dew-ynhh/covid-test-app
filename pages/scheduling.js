import Head from 'next/head'
import ErrorMessageComponent from "../components/ErrorMessageComponent";


export default function Scheduling() {
  return (
    <div className="scheduleContainer">
      <Head>
        <title>Yale COVID-19 Test Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <img src="/YHlogo_color.png"></img>
        <span className="divider"></span>
        
      <div className="scheduleContainer">
  <iframe id="openSchedulingFrame" className="widgetframe" scrolling="no" src="https://mychart.ynhhs.org/MyChart-PRD/openscheduling/SignupAndSchedule/EmbeddedSchedule?vt=2215&dept=601010040,601010041&view=plain&public=1"></iframe>
    </div>
      <style jsx>{`
        .scheduleContainer, iframe{
          width: 100%;
          height: 100vh;
          border:none;
        }
        .scheduleContainer{
          padding-left: 2%
        }

      `}</style>
    </div>
  )
}
