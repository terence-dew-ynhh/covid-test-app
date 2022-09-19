import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src="https://mychart.ynhhs.org/mychart-prd/Scripts/lib/Widget/widget_sdk.js"
          strategy="beforeInteractive"
        ></Script>
      </body>
    </Html>
  )
}