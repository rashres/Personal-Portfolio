import { Box, Flex, Heading, Hide, HStack, Link, Text } from "@chakra-ui/react";
import { imgSrc } from "../pages/index";
import { useRouter } from "next/router";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NextLink from "next/link";
import Image from "next/image";

const SelfPortrait = () => {
  const router = useRouter();
  return (
    <Box
      as={"a"}
      borderRadius={"50%"}
      overflow={"hidden"}
      mx={3}
      height={24}
      width={24}
      cursor={"pointer"}
      onClick={() => router.push("/")}>
      <Image
        bg={"transparent"}
        width={96}
        height={96}
        name="Rahul Shrestha"
        src={imgSrc("/img/sunglasses.jpeg", 3840)}
        unoptimized={true}
        priority={true}
        placeholder="blur"
        blurDataURL={
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBkPSJNMTUwLjUsMTUwIEM3NS4zLDk3LjcgMjAsOTQuOSAyMCw5NC45IEMyMCw5NiAxOS44LDk3LjcgMTUwLjUsMTUwIiBzdHJva2U9IiMwMDAwMDAiLz4KPC9zdmc+Cg=="}
      />
    </Box>
  );
};

const Pages = () => {
  const LINKS = [
    { name: "Projects", href: "/#projects" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "#contact" },
  ];

  const router = useRouter();
  const isActive = (href) => {
    return router?.pathname === href;
  };

  return (
    <HStack spacing={4} alignItems={"center"}>
      {LINKS.map(({ name, href }) => (
        <NextLink key={href} href={href} passHref>
          <Link isActive={isActive(href)}>
            <Text fontSize={14} fontWeight={isActive(href) ? 500 : 300}>
              {name}
            </Text>
          </Link>
        </NextLink>
      ))}
    </HStack>
  );
};

const SocialLinks = () => {
  const LINKS = [
    { name: "/rashres", icon: faGithub, href: "https://github.com/rashres" },
    { name: "/in/rashres", icon: faLinkedin, href: "https://linkedin.com/in/rashres" },
    // { name: "ra@shres.dev", icon: faPaperPlane, href: "mailto:rashres027@gmail.com" },
  ];
  return (
    <HStack spacing={6} alignItems={"center"}>
      {LINKS.map(({ name, icon, href }) => (
        <Link key={href} href={href} isExternal>
          <Text
            fontSize={14}
            fontWeight={400}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}>
            {icon && (
              <Box width={4} pr={4} display={"inline-block"} mr={1}>
                <FontAwesomeIcon icon={icon} style={{ width: 16, height: 16 }} />
              </Box>
            )}
            {name}
          </Text>
        </Link>
      ))}
    </HStack>
  );
};

export default function Navigation() {
  return (
    <Hide breakpoint={"print"}>
      <Flex justifyContent={"center"}>
        <Flex p={5} justifyContent={"space-between"} alignItems={"center"} flexGrow={1} maxW={1250}>
          {/*   LEFT SIDE    */}
          <Flex alignItems={"center"}>
            <SelfPortrait />
            <Flex flexDir={"column"} pl={2}>
              <Heading size={"xl"} mb={1}>
                Rahul Shrestha
              </Heading>
              <Pages />
            </Flex>
          </Flex>
          {/*   RIGHT SIDE    */}
          <Flex display={["none", "none", "block"]}>
            <SocialLinks />
          </Flex>
        </Flex>
      </Flex>
    </Hide>
  );
}