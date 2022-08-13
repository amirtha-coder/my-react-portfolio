import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import "./App.css";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";

export const App = () => {
  return (
    <Box>
      <header>
        <NavBar></NavBar>
        <Header></Header>
      </header>
      <main>
        <Divider></Divider>
      </main>
    </Box>
  );
};
