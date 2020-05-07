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
       <ErrorMessageComponent/>
      </main>
      <style jsx>{`
        
      `}</style>
    </div>
  )
}
