import './globals/styles.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <>
    <Script
      src="https://mychart.ynhhs.org/mychart-prd/Scripts/lib/Widget/widget_sdk.js"
      strategy="afterInteractive"
    ></Script>
    <Component {...pageProps} />
  </>
}