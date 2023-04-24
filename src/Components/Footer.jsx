import {
  Button,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
  Stack,
  Link,
} from "@chakra-ui/react";
import { styles } from "../styles";
import { Link as NavLink } from "react-router-dom";
import { LocationIcon, MsgIcon, PhoneIcon, logo } from "../assets";
import {
  FaBehance,
  FaDribbble,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <Stack
      mt={"500px"}
      className={`${styles.paddingX} flex items-center justify-between relative`}
      px={"150px"}
      pt={"50px"}
      pb={"20px"}
      gap={30}
      w={"100%"}
    >
      <Flex
        className="flex-col md:flex-row items-start"
        justifyContent={"space-between"}
        gap={60}
      >
        <VStack
          alignItems={"flex-start"}
          justifyContent={"center"}
          p={5}
          gap={10}
        >
          <Link
            as={NavLink}
            to={"/"}
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            height={"2em"}
          >
            <img
              src={logo}
              alt="logo"
              className="w-auto h-full object-contain"
            />
          </Link>

          <Text
            color={"#B0B0D1"}
            fontSize={"16px"}
            fontWeight={400}
            noOfLines={5}
          >
            Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Text>
        </VStack>

        <VStack
          alignItems={"flex-start"}
          justifyContent={"center"}
          p={5}
          gap={20}
        >
          <Text fontWeight={700} fontSize={"18px"}>
            Quick Links
          </Text>

          <VStack w={"100%"} gap={10}>
            <HStack
              alignItems={"center"}
              justifyContent={"flex-start"}
              w={"100%"}
              gap={30}
            >
              <Text fontWeight={500} fontSize={"16px"} color={"#B0B0D1"}>
                About{" "}
              </Text>
              <Text fontWeight={500} fontSize={"16px"} color={"#B0B0D1"}>
                Blog{" "}
              </Text>
            </HStack>

            <HStack
              alignItems={"center"}
              justifyContent={"flex-start"}
              w={"100%"}
              gap={30}
            >
              <Text fontWeight={500} fontSize={"16px"} color={"#B0B0D1"}>
                Course{" "}
              </Text>
              <Text fontWeight={500} fontSize={"16px"} color={"#B0B0D1"}>
                Contact{" "}
              </Text>
            </HStack>
          </VStack>
        </VStack>

        <VStack
          alignItems={"flex-start"}
          justifyContent={"center"}
          p={5}
          gap={20}
        >
          <Text fontWeight={700} fontSize={"18px"}>
            Contact Us
          </Text>

          <VStack w={"100%"} gap={10}>
            <HStack
              alignItems={"center"}
              justifyContent={"flex-start"}
              w={"100%"}
              gap={30}
            >
              <Image
                className="rounded-full h-[20px] w-[20px] cursor-pointer"
                src={PhoneIcon}
                alt=""
              />
              <Text fontWeight={500} fontSize={"16px"} color={"#B0B0D1"}>
                +977 986 560 6077
              </Text>
            </HStack>

            <HStack
              alignItems={"center"}
              justifyContent={"flex-start"}
              w={"100%"}
              gap={30}
            >
              <Image
                className="rounded-full h-[20px] w-[20px] cursor-pointer"
                src={MsgIcon}
                alt=""
              />
              <Text fontWeight={500} fontSize={"16px"} color={"#B0B0D1"}>
                hamrocourse101@gmail.com
              </Text>
            </HStack>
          </VStack>
        </VStack>

        <Flex
          alignItems={"flex-start"}
          justifyContent={"center"}
          p={5}
          gap={20}
          w={"50%"}
        >
          <Image
            className="rounded-full h-[20px] w-[20px] cursor-pointer"
            src={LocationIcon}
            alt=""
          />

          <Text fontWeight={500} fontSize={"16px"} color={"#B0B0D1"}>
            Koteswor - 30 | Kathmandu | Nepal | 44600
          </Text>
        </Flex>
      </Flex>

      <HStack
        border={"1px solid rgba(218, 218, 247, 0.32)"}
        borderLeft={"none"}
        borderRight={"none"}
        borderBottom={"none"}
        w={"100%"}
        pt={"30px"}
        // pb={"10px"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text color={"#B0B0D1"} fontSize={"16px"} fontWeight={400}>
          Copyright 2023 | All Rights Reserved{" "}
        </Text>

        <HStack>
          <Button
            w={"full"}
            maxW={"md"}
            color={"#B0B0D1"}
            colorScheme={"facebook"}
            leftIcon={<FaFacebook />}
          ></Button>
          <Button
            w={"full"}
            maxW={"md"}
            color={"#B0B0D1"}
            colorScheme={"twitter"}
            leftIcon={<FaTwitter />}
          ></Button>
          <Button
            w={"full"}
            maxW={"md"}
            color={"#B0B0D1"}
            colorScheme={"instagram"}
            leftIcon={<FaInstagram />}
          ></Button>
          <Button
            w={"full"}
            maxW={"md"}
            color={"#B0B0D1"}
            colorScheme={"behance"}
            leftIcon={<FaBehance />}
          ></Button>
          <Button
            w={"full"}
            maxW={"md"}
            color={"#B0B0D1"}
            colorScheme={"dribble"}
            leftIcon={<FaDribbble />}
          ></Button>
        </HStack>
      </HStack>
    </Stack>
  );
}

export default Footer;
