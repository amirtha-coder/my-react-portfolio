import { Box } from "@mui/system";
import "./App.css";
import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";

export const App = () => {
  return (
    <Box>
      <Box>
        <NavBar />
      </Box>
      <Header />
    </Box>
  );
};
