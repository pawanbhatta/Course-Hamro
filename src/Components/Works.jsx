import {
  Box,
  chakra,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { styles } from "../styles";
import {
  GraduationCap,
  HeroImage2,
  StarImage,
  Users,
  VideoCamera,
  WaveImage,
} from "../assets";

const info = [
  {
    name: "Instructor",
    number: "5+",
    image: GraduationCap,
  },
  {
    name: "Students",
    number: "1000+",
    image: Users,
  },
  {
    name: "Videos",
    number: "100+",
    image: VideoCamera,
  },
];

const Works = () => {
  return (
    <HStack
      className={`${styles.paddingX} w-full flex items-center justify-between relative`}
      pt={"150px"}
      gap={100}
    >
      <chakra.div flex="6" className="hidden md:flex">
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
      </chakra.div>

      <VStack w={"100%"} gap={50} flex="10">
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
              className="@container"
            >
              {info.map((data) => {
                return (
                  <chakra.div
                    gap={10}
                    className="flex flex-col @md:flex-row items-center"
                  >
                    <Box
                      bg={"linear-gradient(180deg, #A582F7 0%, #7747EC 100%)"}
                      borderRadius={"50%"}
                      p={10}
                    >
                      <Image
                        src={data.image}
                        alt="GraduationCap"
                        className="bg-cover bg-no-repeat object-cover w-[40px]"
                      />
                    </Box>
                    <Stack className="items-center @md:items-start">
                      <Text color={"white"} fontSize={"25px"} fontWeight={700}>
                        {data.number}
                      </Text>
                      <Text
                        fontWeight={400}
                        fontSize={"16px"}
                        color={"#B0B0D1"}
                      >
                        {data.name}
                      </Text>
                    </Stack>
                  </chakra.div>
                );
              })}
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
