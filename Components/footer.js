import {
    Box,
    Button,
    chakra,
    Flex,
    Hide,
    Input,
    Link,
    Text,
    Textarea,
    useToast,
    VStack,
  } from "@chakra-ui/react";
  import { AiFillLinkedin, AiOutlineGithub, AiOutlineSend } from "react-icons/ai";
  import MyHeading from "./MyHeading";
  import { useState } from "react";
  import { HiMail } from "react-icons/hi";
  import trackEvent from "../lib/trackEvent";
  
  export function Footer(params) {
    const toast = useToast();
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);
    return (
      <Hide breakpoint={"print"}>
        <Box bg={"rgba(0,0,0,0.1)"} width={"100%"} p={5} m={0} id={"contact"}>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            mx={[2, 5, 20]}
            pt={10}
            flexDir={"column"}
            pb={2}>
            <MyHeading display={"inline"} px={3} size={"2xl"}>
              Contact Me
            </MyHeading>
            <chakra.p pt={4}>I&apos;ll get back to you as soon as I can!</chakra.p>
          </Flex>
  
          <Flex px={[2, 5, 10]} justifyContent={"center"} flexDir={"column"} py={10} alignItems={"center"}>
            <VStack spacing={5} flexGrow={1} w={"100%"} maxW={"700px"}>
              <Input
                isDisabled={loading}
                variant="filled"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Input
                isDisabled={loading}
                variant="filled"
                placeholder="Email/Phone"
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                }}
              />
              <Textarea
                isDisabled={loading}
                variant="filled"
                placeholder="Message"
                value={msg}
                onChange={(e) => {
                  setMsg(e.target.value);
                }}
              />
              <Button
                isDisabled={loading}
                leftIcon={<AiOutlineSend size={"1.5em"} />}
                onClick={() => {
                  trackEvent("Contact Form.submit", "contact_form");
                  setLoading(true);
                  fetch("/api/contactForm", {
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name, contact, msg }),
                    method: "post",
                  })
                    .then((r) => r.json())
                    .then((r) => {
                      toast({
                        title: "Message recieved.",
                        description: "I'll get back to you ASAP.",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                      });
                      setContact("");
                      setName("");
                      setMsg("");
                    })
                    .catch((e) => {
                      toast({
                        title: "Something went wrong.",
                        description: "Send me an email, this form isn't working :(",
                        status: "error",
                        duration: 9000,
                        isClosable: true,
                      });
                    })
                    .finally(() => {
                      setLoading(false);
                    });
                }}>
                Send Message
              </Button>
            </VStack>
          </Flex>
        </Box>
        <Flex bg={"rgba(0,0,0,0.2)"} width={"100%"} p={5} m={0} flexDir={"column"}>
          <Flex justifyContent={"center"} flexWrap={"wrap"} pb={5}>
            <Link m={2} href={"https://github.com/rashres"} target={"_blank"}>
              <Flex m={2} alignItems={"center"}>
                <AiOutlineGithub size={"2em"} />
                <chakra.p ml={2} fontFamily={"Fira Code"}>
                  /rashres
                </chakra.p>
              </Flex>
            </Link>
            <Link m={2} href={"https://linkedin.com/in/rashres"} target={"_blank"}>
              <Flex m={2} alignItems={"center"}>
                <AiFillLinkedin size={"2em"} />
                <chakra.p ml={2} fontFamily={"Fira Code"}>
                  /in/rahul
                </chakra.p>
              </Flex>
            </Link>
            <Link m={2} href={"mailto:rashres027@gmail.com"} target={"_blank"}>
              <Flex m={2} alignItems={"center"}>
                <HiMail size={"2em"} />
                <chakra.p ml={2} fontFamily={"Fira Code"}>
                  ra@shres.dev
                </chakra.p>
              </Flex>
            </Link>
          </Flex>
          <Text textAlign={"center"} color={"gray.900"} fontSize={"sm"}>
            Portfolio made by Rahul Shrestha | <Link href={"https://github.com/rashres"}>Github | Inspired by Samyok</Link>
          </Text>
        </Flex>
      </Hide>
    );
  }
