import Head from 'next/head'
import ErrorMessageComponent from "../components/ErrorMessageComponent";
import Link from 'next/link';


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Yale COVID-19 Test Scheduler</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv= "refresh" content = ".5; url = /api/auth" />
      </Head>

        <div>
        <a href="/api/auth">Sign in with CAS</a>
        </div>

      <style jsx>{`

      `}</style>
    </div>
  )
}
