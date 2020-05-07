import Head from 'next/head'
import ErrorMessageComponent from "../components/ErrorMessageComponent";


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div id="scheduleContainer">
  <iframe id="openSchedulingFrame" className="widgetframe" scrolling="no" src="../../SignupAndSchedule/EmbeddedSchedule?id=1558300,802846&vt=6"></iframe>
    </div>
      </main>
      <style jsx>{`
        
      `}</style>
    </div>
  )
}
