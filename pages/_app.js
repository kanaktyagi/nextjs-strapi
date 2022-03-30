import Header from "../components/Header";
import "../styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "../components/GlobalStyles/GlobalStyles";
import theme from "../theme/theme.js";
import App from "next/app";
import fetch from "isomorphic-unfetch";
import { ContextWrapper } from "../components/ContextWrapper";
import Router from "next/router";

export default function MyApp({ Component, pageProps, data }) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ContextWrapper navigation={data}>
          <Header />
        </ContextWrapper>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

function redirectUser(ctx, location) {
  
  console.log("location", location)
  if (ctx.ctx.res) {
   console.log("hii")
    ctx.ctx.res.writeHead(301, { location: location });
    ctx.ctx.res.end();
   }
   // else {
   // window.location = location
 // ctx.req.redirect('/login')
 //console.log("inside", ctx.req.redirect())
 // }
}
MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`

  const jwt = false;
  const appProps = await App.getInitialProps(appContext);
  const { NEXT_PUBLIC_API_URL } = process.env;
  const res = await fetch(`${NEXT_PUBLIC_API_URL}/api/navigations`);
  const navigation = await res.json();
  const { data } = navigation;
  if (!jwt) {
    if (appContext.router.pathname === "/payed-articles") {
      redirectUser(appContext, "/login ");
    }
  }
  return { ...appProps, data };
};
// MyApp.getInitailProps = async() => {
//   const {NEXT_PUBLIC_API_URL} = process.env
//    const res  = await fetch(`${NEXT_PUBLIC_API_URL}/api/navigations`)
//    const appProps  = await res.json()
//    console.log("navigation", appProps)
//     return {appProps}
//  }
