import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { ContactMe } from "./components/Contact Me";
import { Footer } from "./components/Footer";
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
        <Divider />
        <ContactMe />
        <Footer />
      </main>
      <script src="path/to/particles.min.js"></script>
    </body>
  );
};
