import { Button, chakra, Stack, Text, VStack } from "@chakra-ui/react";
import { styles } from "../styles";
import { DotsPNG } from "../assets";

const JoinUs = () => {
  return (
    <chakra.div
      className={`${styles.paddingX} w-full flex items-center flex-col md:flex-row justify-between relative`}
      bgColor="rgba(55, 38, 93, 0.43)"
      gap="20"
      bg={`url(${DotsPNG}),url(${DotsPNG})`}
      bgRepeat="no-repeat,no-repeat"
      bgPos="-100px center, calc(100% + 100px) center"
    >
      <VStack w={"60%"} justifyContent={"flex-start"}>
        <Text
          w={"100%"}
          mb={30}
          className={`${styles.sectionHeadText} text-white`}
        >
          Join our
          <span className="text-[#915eff]"> world&apos;s largest </span>
          learning platform today
        </Text>

        <Text
          w={"100%"}
          className={`${styles.sectionSubText} `}
          color="#B0B0D1"
          fontSize={"16px"}
          fontWeight={500}
        >
          Start learning by registering and get 30 days free trial
        </Text>
      </VStack>
      <Stack
        className="flex-col items-center md:items-end"
        h={"100%"}
        w={"40%"}
        justifyContent={"space-between"}
        gap={20}
      >
        <Button
          fontWeight={500}
          fontSize={"20px"}
          color={"text"}
          bg={"#FF5156"}
          p={"15px 60px"}
          className="rounded-full "
        >
          Join as Instructor
        </Button>
        <Button
          fontWeight={600}
          fontSize={"20px"}
          color={"text"}
          bg={"#7F56D9"}
          p={"15px 60px"}
          className="rounded-full "
        >
          Join as Student
        </Button>
      </Stack>
    </chakra.div>
  );
};

export default JoinUs;
