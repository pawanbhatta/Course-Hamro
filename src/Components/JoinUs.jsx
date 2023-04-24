import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import { styles } from "../styles";

const JoinUs = () => {
  return (
    <HStack
      className={`${styles.paddingX} w-full flex items-center justify-between relative`}
      p={"100px 150px"}
      gap={100}
    >
      <VStack w={"100%"} gap={50}>
        <HStack
          w={"100%"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <VStack w={"60%"} justifyContent={"flex-start"}>
            <Text
              w={"100%"}
              mb={30}
              className={`${styles.sectionHeadText} text-white`}
            >
              Join our{" "}
              <span className="text-[#915eff]"> world&apos;s largest </span>{" "}
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

          <VStack
            h={"100%"}
            w={"40%"}
            alignItems={"center"}
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
          </VStack>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default JoinUs;
