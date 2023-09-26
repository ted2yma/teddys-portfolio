import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Flex, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const bg = useColorModeValue("gray.50", "gray.900");
  const textCol = useColorModeValue("gray.900", "gray.50");
  let homeScopeStyle = {
    bg: bg,
    color: textCol,
    transitionProperty: "background-color",
    transitionDuration: "normal",
    lineHeight: "base",
    w: `100%`,
    minHeight: `100vh`,
    display: `flex`,
    flexFlow: `column wrap`,
    justifyContent: `center`,
    alignItem: `center`,
    p: `2rem`
  };

  return (
    <>
      <Head>
        <title>Teddy&apos;s Portfolio</title>
        <meta name="description" content="Welcome to Teddy&apos;s Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="main" sx={homeScopeStyle}>
        <Text as="h1" fontSize={{base: `2.5rem`, lg: `3rem`}} fontWeight={`bold`}>Oh dear! I&apos;m upgrading my website, get back later!</Text>
        <Text as="h1" fontSize={`1.5rem`} my={`1rem`}>唔好意思，你個網壞咗呀，轉頭再返嚟啦！</Text>
        <Text as="h1" fontSize={`2rem`}>網站更新中，稍後再回來吧！</Text>
      </Box>
    </>
  );
}
