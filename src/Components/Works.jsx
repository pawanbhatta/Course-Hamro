import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { styles } from "../styles";
import {
  GraduationCap,
  HeroImage2,
  StarImage,
  Users,
  VideoCamera,
  WaveImage,
} from "../assets";

const Works = () => {
  return (
    <HStack
      className={`${styles.paddingX} w-full flex items-center justify-between relative`}
      px={"150px"}
      gap={100}
    >
      <Flex marginTop={"200px"}>
        <Image
          src={WaveImage}
          alt="heroImage"
          position={"absolute"}
          left={150}
          top={200}
          className="bg-cover bg-no-repeat object-cover w-[200px]"
        />
        <Image
          src={HeroImage2}
          alt="heroImage"
          className="bg-cover bg-no-repeat object-cover w-[800px]"
        />
      </Flex>

      <VStack w={"100%"} gap={50}>
        <HStack w={"100%"} alignItems={"flex-start"}>
          <VStack w={"100%"} justifyContent={"flex-start"}>
            <Text
              w={"100%"}
              mb={30}
              className={`${styles.sectionHeadText} text-white`}
            >
              What is our <span className="text-[#915eff]"> difference </span>
            </Text>

            <Text
              w={"100%"}
              className={`${styles.sectionSubText} `}
              color="#B0B0D1"
              fontSize={"16px"}
              fontWeight={500}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. ex ea
              commodo consequat.
            </Text>
            <Text
              w={"100%"}
              className={`${styles.sectionSubText} `}
              color="#B0B0D1"
              fontSize={"16px"}
              fontWeight={500}
              pt={40}
            >
              ut labore et dolore magna aliqua. ex ea commodo consequat.
            </Text>

            <HStack
              p={"80px 0px"}
              w={"100%"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <HStack gap={10}>
                <Box
                  bg={"linear-gradient(180deg, #A582F7 0%, #7747EC 100%)"}
                  borderRadius={"50%"}
                  p={10}
                >
                  <Image
                    src={GraduationCap}
                    alt="GraduationCap"
                    className="bg-cover bg-no-repeat object-cover w-[40px]"
                  />
                </Box>
                <VStack alignItems={"flex-start"}>
                  <Text color={"white"} fontSize={"25px"} fontWeight={700}>
                    300
                  </Text>
                  <Text fontWeight={400} fontSize={"16px"} color={"#B0B0D1"}>
                    Instructors
                  </Text>
                </VStack>
              </HStack>
              <HStack gap={10}>
                <Box
                  bg={"linear-gradient(180deg, #A582F7 0%, #7747EC 100%)"}
                  borderRadius={"50%"}
                  p={10}
                >
                  <Image
                    src={Users}
                    alt="Users"
                    className="bg-cover bg-no-repeat object-cover w-[40px]"
                  />
                </Box>
                <VStack alignItems={"flex-start"}>
                  <Text color={"white"} fontSize={"25px"} fontWeight={700}>
                    1000+
                  </Text>
                  <Text fontWeight={400} fontSize={"16px"} color={"#B0B0D1"}>
                    Students
                  </Text>
                </VStack>
              </HStack>
              <HStack gap={10}>
                <Box
                  bg={"linear-gradient(180deg, #A582F7 0%, #7747EC 100%)"}
                  borderRadius={"50%"}
                  p={10}
                >
                  <Image
                    src={VideoCamera}
                    alt="VideoCamera"
                    className="bg-cover bg-no-repeat object-cover w-[40px]"
                  />
                </Box>
                <VStack alignItems={"flex-start"}>
                  <Text color={"white"} fontSize={"25px"} fontWeight={700}>
                    500+
                  </Text>
                  <Text fontWeight={400} fontSize={"16px"} color={"#B0B0D1"}>
                    Videos
                  </Text>
                </VStack>
              </HStack>
            </HStack>
          </VStack>
          <Box className="flex flex-col justify-center items-center mt-5">
            <Box className="w-5 h-5 rounded-full bg-[#915eff]" />
            <Box className="w-1 sm:h-80 h-40 violet-gradient" />
          </Box>
        </HStack>

        <Image
          src={StarImage}
          alt="heroImage"
          position={"absolute"}
          right={150}
          top={0}
          className="bg-cover bg-no-repeat object-cover w-[60px]"
        />
      </VStack>
    </HStack>
  );
};

export default Works;
