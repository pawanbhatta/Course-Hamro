/* eslint-disable react/prop-types */
import { Box, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { WhiteStar, YellowStar } from "../assets";

export const Course = (props) => {
  const {
    title,
    tag,
    image,
    noOfLessons,
    noOfStudents,
    userImage,
    userName,
    userTitle,
  } = props.course;
  return (
    <Box className="bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg cursor-pointer" src={image} alt="" />

      <Box className="p-5">
        <HStack alignItems={"center"} justifyContent={"space-between"} mb={25}>
          <HStack>
            <Flex
              alignItems={"center"}
              justifyContent={"center"}
              h={"20px"}
              w={"20px"}
              borderRadius={"50%"}
              bg={"#7966EA"}
            >
              <Box
                h={0}
                w={0}
                borderTop={"7px solid transparent"}
                borderBottom={"7px solid transparent"}
                borderLeft={"7px solid white"}
                borderRadius={3}
              ></Box>
            </Flex>
            <Text cursor="pointer"> {noOfLessons}x Lessons</Text>
          </HStack>
          <Text cursor="pointer">{tag}</Text>
        </HStack>

        <Text
          fontSize="20px"
          color={"#D9ECFF"}
          className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer"
        >
          {title}
        </Text>

        <VStack
          py={"15px"}
          mt={20}
          border={"1px solid rgba(218, 218, 247, 0.32)"}
          borderLeft={"none"}
          borderRight={"none"}
        >
          <HStack
            w={"100%"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <HStack justifyContent={"flex-start"}>
              <Image
                className="rounded-full h-[40px] w-[40px] cursor-pointer"
                src={userImage}
                alt=""
              />

              <VStack alignItems={"flex-start"} justifyContent={"center"}>
                <Text
                  cursor={"pointer"}
                  fontSize={"16px"}
                  color={"#D9ECFF"}
                  fontWeight={600}
                >
                  {userName}
                </Text>
                <Text fontSize={"12px"} color={"#D9ECFF"} fontWeight={400}>
                  {userTitle}
                </Text>
              </VStack>
            </HStack>

            <Box
              borderLeft={"1px solid rgba(218, 218, 247, 0.32)"}
              h={"50px"}
            ></Box>

            <Text fontSize={"14px"} color={"#D9ECFF"} fontWeight={500}>
              {noOfStudents}+ Students
            </Text>
          </HStack>
        </VStack>
        <HStack
          mt={10}
          w={"100%"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Flex>
            <Image
              className="cursor-pointer rounded-full h-[40px] w-[40px]"
              src={YellowStar}
              alt="Rating"
              h={"20px"}
              w={"20px"}
            />
            <Image
              className="cursor-pointer rounded-full h-[40px] w-[40px]"
              src={YellowStar}
              alt="Rating"
              h={"20px"}
              w={"20px"}
            />
            <Image
              className="cursor-pointer rounded-full h-[40px] w-[40px]"
              src={YellowStar}
              alt="Rating"
              h={"20px"}
              w={"20px"}
            />
            <Image
              className="cursor-pointer rounded-full h-[40px] w-[40px]"
              src={YellowStar}
              alt="Rating"
              h={"20px"}
              w={"20px"}
            />
            <Image
              className="cursor-pointer rounded-full h-[40px] w-[40px]"
              src={WhiteStar}
              alt="Rating"
              h={"20px"}
              w={"20px"}
            />
          </Flex>

          <Text cursor={"pointer"} as="u" fontSize={"16px"} color={"#D9ECFF"}>
            Enroll Now
          </Text>
        </HStack>
      </Box>
    </Box>
  );
};
