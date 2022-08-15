import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";

export const App = () => {
  return (
    <body>
      <header>
        <NavBar />
        <Header />
      </header>
      <main>
        <Divider />
        <AboutMe />
        <Divider />
        <Projects />
      </main>
      <script src="path/to/particles.min.js"></script>
    </body>
  );
};
