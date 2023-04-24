import { BrowserRouter } from "react-router-dom";
import Hero from "./Components/Hero";
import Works from "./Components/Works";
import Navbar from "./Components/Navbar";
import { Box, ThemeProvider, VStack } from "@chakra-ui/react";
import { styles } from "./styles";
import { Courses } from "./Components/Courses";
import Categories from "./Components/Categories";
import JoinUs from "./Components/JoinUs";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <BrowserRouter>
        <Box bg="#2C1F4A">
          <Navbar />
          <Hero />
          <VStack
            paddingX={styles.paddingX}
            w={"100%"}
            position={"relative"}
            overflow={"hidden"}
          >
            <Courses />
            <Categories />
            <Works />
            <JoinUs />
            <Footer />
          </VStack>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
