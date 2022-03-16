import Header from '../components/Header'
import '../styles/globals.css'
import {ThemeProvider} from '@emotion/react'
import GlobalStyles from '../components/GlobalStyles/GlobalStyles'
import theme from '../theme/theme.js'
import App from 'next/app'
import fetch from 'isomorphic-unfetch'

export default function MyApp({ Component, pageProps,data }) {
  console.log("theme", data)
  return (
    <div>
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
   <Header navigation={data} ></Header>
  <Component {...pageProps} />
  </ThemeProvider>
  </div>
  )
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  const {NEXT_PUBLIC_API_URL} = process.env
  const res  = await fetch(`${NEXT_PUBLIC_API_URL}/api/navigations`)
      const navigation  = await res.json()
      const {data} = navigation
  return { ...appProps, data }
}
// MyApp.getInitailProps = async() => {
//   const {NEXT_PUBLIC_API_URL} = process.env
//    const res  = await fetch(`${NEXT_PUBLIC_API_URL}/api/navigations`)
//    const appProps  = await res.json()
//    console.log("navigation", appProps)
//     return {appProps}
//  }
