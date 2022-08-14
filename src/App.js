import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";

export const App = () => {
  return (
    <Box>
      <header>
        <NavBar />
        <Header />
      </header>
      <main>
        <Divider />
        <AboutMe />
      </main>
      <script src="path/to/particles.min.js"></script>
    </Box>
  );
};
