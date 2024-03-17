import Head from "next/head";
import { imgSrc } from "../pages/index";
import MyHeading from "../Components/MyHeading";
import { Box, chakra, Flex, VStack } from "@chakra-ui/react";
import news from "../data/news";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Rahul Shrestha</title>
        <meta
          name="description"
          content="Hey! I'm Rahul Shresthal, a coder in the southwest."
        />
        <meta property="og:url" content="https://shres.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rahul Shrestha: In the news" />
        <meta
          property="og:description"
          content="Hey! I'm Rahul Shrestha, a coder in the southwest."
        />
        <meta property="og:image" content="https://necesimgs.s3.amazonaws.com/og_image_index.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="shres.dev" />
        <meta property="twitter:url" content="https://shres.dev/" />
        <meta name="twitter:title" content="Rahul Shrestha" />
        <meta
          name="twitter:description"
          content="Hey! I'm Rahul Shrestha, a coder in the southwest."
        />
        <meta name="twitter:image" content="https://necesimgs.s3.amazonaws.com/og_image_index.png" />
      </Head>

      <main>
        <Box px={[2, 5, 10]} pt={[200, 150]} minH={"100vh"} pb={20}>
          <MyHeading as={"h1"}>In the News</MyHeading>
          <chakra.p py={5}>
            This page exists to document news articles that have some relevance to me 😊
          </chakra.p>
          <VStack spacing={4} m={0}>
            {news.map((article, index) => (
              <Box
                key={"art" + index}
                rounded={"lg"}
                shadow={"md"}
                p={5}
                w={"100%"}
                bg={"white"}
                _hover={{
                  cursor: "pointer",
                  opacity: "80%",
                }}
                onClick={() => {
                  window.open(article.url + "#:~:text=Samyok%20Nepal", "_blank");
                }}>
                <Flex alignItems={"center"}>
                  <chakra.img
                    w={75}
                    maxH={75}
                    rounded={"lg"}
                    mr={6}
                    display={["none", "none", article.img ? "block" : "none"]}
                    src={imgSrc(article.img)}
                    alt={"Article Image"}
                  />
                  <VStack align={"flex-start"}>
                    <chakra.p m={0} fontSize={"xs"} color={"gray.500"}>
                      {article.date}
                    </chakra.p>
                    <MyHeading size={"lg"}>{article.title}</MyHeading>
                    <chakra.p m={0} fontSize={"xs"} color={"gray.500"}>
                      {article.publisher} / {article.author}
                    </chakra.p>
                  </VStack>
                </Flex>
              </Box>
            ))}
          </VStack>
        </Box>
      </main>
    </Box>
  );
}