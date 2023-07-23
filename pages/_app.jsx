import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { Router } from "next/router";
import React, { createContext, useEffect, useState } from "react";
import Layout from "@/components/Layout";
// import "../public/styles/style.scss";
// import "../public/styles/radioToggle.scss";

export const GlobalProps = createContext();

const App = ({ Component, pageProps }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      setIsLoading(true);
    });
    Router.events.on("routeChangeComplete", (url) => {
      setNavToggle(false);
      setIsLoading(false);
    });
    Router.events.on("routeChangeError", (url) => {
      setNavToggle(false);
      setIsLoading(false);
    });
  }, [Router]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider>
        {/* {isLoading && <Loader />} */}
        <Layout navToggle={navToggle} setNavToggle={setNavToggle}>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
};

export default App;
