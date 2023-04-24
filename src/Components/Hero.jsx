import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Text,
  VStack,
  chakra,
} from "@chakra-ui/react";
import { styles } from "../styles";
import { HeroImage, PlusSign } from "../assets";
import { Search2Icon } from "@chakra-ui/icons";

const Hero = () => {
  return (
    <HStack
      mt={"10px"}
      className={`w-full flex items-center justify-between bg-primary relative`}
      px={["10vw"]}
    >
      <VStack w={"100%"} gap={50} flex="10">
        <HStack alignItems={"flex-start"}>
          {/* <Box className="flex flex-col justify-center items-center mt-5">
            <Box className="w-5 h-5 rounded-full bg-[#915eff]" />
            <Box className="w-1 sm:h-80 h-40 violet-gradient" />
          </Box> */}
          <VStack
            className={`${styles.heroHeadText} text-white`}
            fontSize="clamp(1.875rem, 1.0526rem + 3.2895vw, 5rem)"
            gap={0}
            align={"start"}
          >
            <Text m={0} p="0" noOfLines={1} w="max-content">
              <span className="text-[#915eff]">Best courses </span>
              are
            </Text>
            <Text m={0} p="0" noOfLines={1} w="max-content">
              waiting to enrich{" "}
            </Text>
            <HStack
              m={0}
              p="0"
              noOfLines={1}
              w="max-content"
              justify={"space-between"}
              gap="1em"
            >
              <Text m={0} p="0" noOfLines={1} w="max-content">
                your skill{" "}
              </Text>
              <HStack>
                <Image
                  src={PlusSign}
                  alt="heroImage"
                  className="bg-cover bg-no-repeat w-[50px] h-12 aspect-square"
                />
                <Image
                  src={PlusSign}
                  alt="heroImage"
                  className="bg-cover bg-no-repeat w-[50px] h-12 aspect-square"
                />
                <Image
                  src={PlusSign}
                  alt="heroImage"
                  className="bg-cover bg-no-repeat w-[50px] h-12 aspect-square"
                />
              </HStack>
            </HStack>
            <chakra.p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Provides you with the latest online learning system and material
              that help your knowledge growing.
            </chakra.p>
          </VStack>
        </HStack>
        <Box
          className="h-[80px] rounded-full bg-white"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          padding={10}
          px={"20px"}
          alignSelf={"start"}
          w={"clamp(400px, 100%, 100%)"}
        >
          <Search2Icon color={"gray"} />
          <Input
            width={"100%"}
            border="none"
            placeholder="Want to learn ?"
            _focusVisible={{
              border: "none",
              outline: "none",
              background: "none",
            }}
            background={"none"}
            color={"black"}
            fontWeight={"400"}
            p="20px"
            min={0}
          />
          <Button
            fontWeight={600}
            fontSize={{ sm: "xl", md: "3xl" }}
            color={"text"}
            bg={"#7F56D9"}
            p={"20px 40px"}
            className="rounded-full "
          >
            Explore
          </Button>
        </Box>
      </VStack>
      <Flex flex="6">
        <Image
          src={HeroImage}
          alt="heroImage"
          className="bg-cover bg-no-repeat object-cover w-[8  00px]"
        />
      </Flex>
    </HStack>
  );
};

export default Hero;
