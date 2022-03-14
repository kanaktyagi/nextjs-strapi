import Header from '../components/Header'
import '../styles/globals.css'
import {ThemeProvider} from '@emotion/react'
import GlobalStyles from '../components/GlobalStyles/GlobalStyles'

const theme = {
  colors: {
    primary : 'lightgray'
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <>
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
   <Header ></Header>
  <Component {...pageProps} />
  </ThemeProvider>
  </>
  )
}

export default MyApp
