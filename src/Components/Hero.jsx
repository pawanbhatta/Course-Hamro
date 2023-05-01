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
      className={`${styles.paddingX} w-full flex items-center justify-between bg-primary relative`}
      bg={"radial-gradient(circle at right, #3D5CFFAA 0, #0000 50%)"}
      bgSize={"25% 70%"}
      bgRepeat={"no-repeat"}
      backgroundPosition={"right"}
    >
      <VStack w={"100%"} gap={50} flex="10">
        <HStack alignItems={"flex-start"}>
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
            <HStack m={0} p="0" noOfLines={1} w="max-content" gap="1em">
              <Text
                m={0}
                p="0"
                noOfLines={1}
                w="max-content"
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                gap={"3rem"}
              >
                your skill{" "}
                <HStack gap={"1rem"}>
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
              </Text>
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
