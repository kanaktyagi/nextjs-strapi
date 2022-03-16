import Header from '../components/Header'
import '../styles/globals.css'
import {ThemeProvider} from '@emotion/react'
import GlobalStyles from '../components/GlobalStyles/GlobalStyles'
import theme from '../theme/theme.js'


function MyApp({ Component, pageProps }) {
  console.log("theme", theme)
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
