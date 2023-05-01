import { useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { close, logo, menu, navVertical } from "../assets";
import { Link } from "react-router-dom";
import { Box, Button, Flex, HStack } from "@chakra-ui/react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <Box
      className={`${styles.paddingX} w-full flex items-center justify-between z-20 bg-primary`}
    >
      <Flex alignItems={"center"}>
        <Link
          className="mt-4"
          to={"/"}
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-30 h-20  object-contain" />
        </Link>
      </Flex>

      <Flex alignItems={"center"} justifyContent={"center"}>
        <img src={navVertical} alt="logo" width={"60px"} />
      </Flex>

      <Box ml={10}>
        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}> {link.title} </a>
            </li>
          ))}
        </ul>
      </Box>

      <HStack gap={10}>
        <Button
          fontWeight={600}
          fontSize={{ sm: "xl", md: "2xl" }}
          color={"text"}
          bg={"transparent"}
          p={"10px 20px"}
          className="rounded-full "
          border={"2px solid white"}
        >
          Login
        </Button>
        <Button
          fontWeight={600}
          fontSize={{ sm: "xl", md: "2xl" }}
          color={"text"}
          bg={"#7F56D9"}
          p={"12px"}
          px={"20px"}
          className="rounded-full "
        >
          Get Started
        </Button>
      </HStack>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={!toggle ? menu : close}
          alt="menu"
          className="w-[28px] h-[28px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 black-gradient top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className="list-none flex justify-end items-start flex-col gap-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setActive(link.title);
                  setToggle(!toggle);
                }}
              >
                <a href={`#${link.id}`}> {link.title} </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Box>
  );
};

export default Navbar;
