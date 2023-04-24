import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { styles } from "../styles";
import { HeroImage, PlusSign } from "../assets";
import { Search2Icon } from "@chakra-ui/icons";

const Hero = () => {
  return (
    <HStack
      mt={"10px"}
      className={`${styles.paddingX} w-full flex items-center justify-between bg-primary relative`}
      px={"150px"}
    >
      <Box
        w={"100px"}
        h={"100px"}
        borderRadius={"50%"}
        bg={"#1A52B9"}
        pos={"absolute"}
        left={"-50px"}
        top={"10px"}
      ></Box>
      <VStack w={"100%"} gap={50}>
        <HStack alignItems={"flex-start"}>
          <Box className="flex flex-col justify-center items-center mt-5">
            <Box className="w-5 h-5 rounded-full bg-[#915eff]" />
            <Box className="w-1 sm:h-80 h-40 violet-gradient" />
          </Box>

          <VStack gap={15}>
            <Text className={`${styles.heroHeadText} text-white`}>
              <span className="text-[#915eff]">Best courses </span>
              are <br className="sm:block hidden" />
              waiting to enrich <br className="sm:block hidden" />{" "}
              <Text
                display="flex"
                alignItems={"center"}
                justifyContent={"flex-start"}
                gap={100}
              >
                your skill{" "}
                <HStack>
                  <Image
                    src={PlusSign}
                    alt="heroImage"
                    className="bg-cover bg-no-repeat object-cover w-[50px] h-12"
                  />
                  <Image
                    src={PlusSign}
                    alt="heroImage"
                    className="bg-cover bg-no-repeat object-cover w-[50px] h-12"
                  />
                  <Image
                    src={PlusSign}
                    alt="heroImage"
                    className="bg-cover bg-no-repeat object-cover w-[50px] h-12"
                  />
                </HStack>
              </Text>
            </Text>

            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              {" "}
              Provides you with the latest online learning system and material
              that help your knowledge growing.
            </p>
          </VStack>
        </HStack>
        <Box
          className="h-[80px] w-11/12 rounded-full bg-white"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          padding={10}
          px={"20px"}
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
      <Flex>
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
