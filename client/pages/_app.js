import '../styles/globals.scss'
import Head from 'next/head'
import React, { Fragment, useEffect } from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'




function MyApp({ Component, pageProps }) {

  const router = useRouter()

  useEffect(() => {
    const routeChangeStart = () => NProgress.start()
    const routeChangeComplete = () => NProgress.done()

    router.events.on('routeChangeStart', routeChangeStart)
    router.events.on('routeChangeComplete', routeChangeComplete)
    router.events.on('routeChangeError', routeChangeComplete)
    return () => {
      router.events.off('routeChangeStart', routeChangeStart)
      router.events.off('routeChangeComplete', routeChangeComplete)
      router.events.off('routeChangeError', routeChangeComplete)
    }
  }, [])

  return (
    <Fragment>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <Component {...pageProps} />
    </Fragment>)
}

export default MyApp
