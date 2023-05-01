import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { styles } from "../styles";
import { categories } from "../constants";
import { Category } from "./Category";

function Categories() {
  return (
    <VStack
      mt={"500px"}
      className={`${styles.paddingX} flex items-center justify-between relative`}
      gap={"60px"}
      w={"100%"}
      bgColor="rgba(55, 38, 93, 0.43)"
      pb={"80px"}
    >
      <Box
        mt={"100px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        w={"100%"}
      >
        <Text className={`${styles.sectionHeadText} text-white`}>
          Most Popular <span className="text-[#915eff]"> Courses </span>
        </Text>
      </Box>

      <Flex mt={"100px"} w={"100%"} gap={10} wrap={"wrap"} justify={"center"}>
        {categories.map((category, index) => (
          <Category key={index} category={category} />
        ))}
      </Flex>
    </VStack>
  );
}

export default Categories;
