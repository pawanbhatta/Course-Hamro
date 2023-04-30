import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { ArrowUpRight } from "../assets";

export const Category = ({ category }) => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      cursor={"pointer"}
      className="bg-transparent border border-gray-200 rounded-2xl shadow  dark:border-gray-700 px-5 py-3"
    >
      <HStack>
        <Image
          className="rounded-full h-[30px] w-[30px] cursor-pointer"
          src={category.icon}
          alt=""
        />

        <Text>{category.name} </Text>
      </HStack>

      <Box bg={"#7F56D9"} m={5} p={5} borderRadius={8}>
        <Image
          className="rounded-full h-[15px] w-[15px] cursor-pointer"
          src={ArrowUpRight}
          alt=""
        />{" "}
      </Box>
    </Flex>
  );
};
