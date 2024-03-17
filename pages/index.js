import Head from "next/head";
import MyHeading from "../Components/MyHeading";
import { Box, chakra, Flex } from "@chakra-ui/react";
import projects from "../data/projects";
import { AnimatedText } from "../Components/animatedText";
import styles from "../styles/animatedBlink.module.css";
import { Project } from "../Components/project";

export function imgSrc(url, width = 3840) {
  const env = process.env.NODE_ENV;
  if (env === "development") {
    return url;
  } else if (env === "production") {
    return url;
  }
}

export default function Home() {
  const wordChanged = (newIndex) => {
    // console.log({newIndex});
  };
  return (
    <Box>
      <Head>
        <title>Rahul Shrestha</title>
        <meta
          name="description"
          content="Hey! I'm Rahul Shrestha, a coder in the southwest. Here's a list of all my projects!"
        />
        <link rel="canonical" href="https://shres.dev/" />
        <meta property="og:url" content="https://shres.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rahul Shrestha" />
        <meta
          property="og:description"
          content="Hey! I'm Rahul Shrestha, a coder in the southwest. Here's a list of all my projects!"
        />
        <meta property="og:image" content="/og_image_index.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="shres.dev" />
        <meta property="twitter:url" content="https://shres.dev/" />
        <meta name="twitter:title" content="Rahul Shrestha" />
        <meta
          name="twitter:description"
          content="Hey! I'm Rahul Shrestha, a coder in the southwest. Here's a list of all my projects!"
        />
        <meta name="twitter:image" content="/og_image_index.png" />
      </Head>

      <main>
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          pt={20}
          minHeight={"69vh"}>
          <MyHeading
            display={"inline"}
            py={5}
            mb={20}
            borderRadius={10}
            // bg={'white'}
            as={"h1"}
            px={[2, 5]}
            textAlign={"center"}
            size={"4xl"}>
            <chakra.span className={styles.wiggle}>👋</chakra.span>
            Hey, I&apos;m Rahul!
          </MyHeading>
          <MyHeading size={"lg"} color={"gray.400"} m={0} mb={-16} p={0} fontWeight={400}>
            What do I do?
          </MyHeading>
          <AnimatedText wordChangedCallback={wordChanged} />
        </Flex>
        <div id={"projects"} />
        {projects.map((proj) => (
          <Project projSection={proj} key={JSON.stringify(proj)} />
        ))}
      </main>
    </Box>
  );
}