import {
  Box,
  Button,
  Flex,
  Grid,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { styles } from "../styles";
import { courseTopics, courses } from "../constants";
import { Course } from "./Course";
import { RightSideCircleDesign, SideDesign } from "../assets";

export const Courses = () => {
  const [steps, setSteps] = useState(courseTopics);

  const selectHandler = (index) => {
    const newSteps = steps.map((step) => {
      if (step.index == index) return { ...step, selected: true };
      return { ...step, selected: false };
    });
    setSteps(newSteps);
  };

  return (
    <VStack
      mt={"100px"}
      className={`${styles.paddingX} w-full flex items-center justify-between bg-primary relative`}
      gap={"60px"}
    >
      <Flex className="w-[100%] flex-col md:flex-row items-center justify-between">
        <Text className={`${styles.sectionHeadText} text-white`}>
          Popular <span className="text-[#915eff]"> Courses </span>
        </Text>

        <Box
          p={{ sm: 1, lg: "none" }}
          mt={{ sm: 10, lg: 20 }}
          height={80}
          border="2px solid"
          borderColor="gray"
          bg="linear-gradient(109.46deg, rgba(201, 201, 201, 0.15) 1.57%, rgba(196, 196, 196, 0.05) 100%)"
          borderRadius="50px"
          backdropBlur={"25px"}
        >
          <HStack p={"5px"} height={"100%"} alignItems={"center"}>
            {steps.map((item, index) => {
              return (
                <Box
                  cursor={"pointer"}
                  p={"1em 20px"}
                  key={index}
                  display={"flex"}
                  bg={item.selected ? "#7F56D9" : "none "}
                  borderRadius={"50px"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  onClick={() => selectHandler(index)}
                >
                  <Text
                    fontSize="14px"
                    color={item.selected ? "white" : "#6F6C8F"}
                  >
                    {item.title}
                  </Text>
                </Box>
              );
            })}
          </HStack>
        </Box>
      </Flex>

      <Grid
        mt={"100px"}
        w={"100%"}
        templateColumns="repeat(auto-fit, minmax(calc(200px + 9vw), 1fr))"
        gap={15}
      >
        {courses.map((course, index) => (
          <Course key={index} course={course} />
        ))}
      </Grid>

      <Button
        fontWeight={600}
        fontSize={{ sm: "xl", md: "xl" }}
        color={"text"}
        bg={"#7F56D9"}
        p={"15px 40px"}
        className="rounded-full "
      >
        Explore All Courses
      </Button>

      <Image
        position={"absolute"}
        left={-60}
        bottom={-150}
        h={"200px"}
        w={"450px"}
        src={SideDesign}
        alt=""
      />
      <Image
        position="absolute"
        bottom={-250}
        right={0}
        transform={"translate(50%, -50%) rotate(-45deg)"}
        overflow="hidden"
        h={"180px"}
        w={"400px"}
        src={RightSideCircleDesign}
        alt=""
      />
    </VStack>
  );
};
