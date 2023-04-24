import { Box } from "@chakra-ui/react";
import { styles } from "./styles";
import React from "react";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <Box className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </Box>
    );
  };

export default SectionWrapper;
