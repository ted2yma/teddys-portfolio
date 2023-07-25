import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Flex, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { colorMode } = useColorMode();
  const bg = useColorModeValue("gray.50", "gray.900");
  const textCol = useColorModeValue("gray.900", "gray.50");
  let homeScopeStyle = {
    bg: bg,
    color: textCol,
    transitionProperty: "background-color",
    transitionDuration: "normal",
    lineHeight: "base",
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="main" sx={homeScopeStyle} className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div>
            <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
              By <Image src="/vercel.svg" alt="Vercel Logo" className={styles.vercelLogo} width={100} height={24} priority />
            </a>
          </div>
        </div>

        <Flex className={styles.center} direction={`column`}>
          <Image className={styles.logo} src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
          <Text as={`span`} mt={`2rem`}>
            ColorMode: {colorMode}
          </Text>
        </Flex>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Find in-depth information about Next.js features and&nbsp;API.</p>
          </a>

          <a href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
          </a>

          <a href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Discover and deploy boilerplate example Next.js&nbsp;projects.</p>
          </a>

          <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" className={styles.card} target="_blank" rel="noopener noreferrer">
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel.</p>
          </a>
        </div>
      </Box>
    </>
  );
}
