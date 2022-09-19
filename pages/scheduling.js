import Head from 'next/head';
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mohegan Flu Vaccine Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid">
        <img src="/YNHHSLogo.png"></img>
      </div>
      {/* <div className="scheduleContainer"> */}
      <div id="open-scheduler"
        data-url="https://MyChart.ynhhs.org/mychart-prd"
        data-apikey="vXykxvjGIe80218"
        data-widget-type="openscheduling"
        data-additionalparams-dept="204620001"
        data-additionalparams-vt="10220"
        data-additionalparams-id="82100">
      </div>
      {/* </div> */}
      <style jsx>{`

`}</style>
    </>
  );
}


