import Head from 'next/head'
import type { AppProps } from 'next/app'

import { Base } from 'layouts/Base'

import 'styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Discord Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Base>
        <Component {...pageProps} />
      </Base>
    </>
  )
}

export default MyApp
