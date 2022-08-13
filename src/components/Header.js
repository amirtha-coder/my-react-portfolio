import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

export const Header = () => {
  return (
    <Box
      sx={{
        height: 800,
        backgroundColor: "#8338ec",
      }}
    >
      <Typography
        variant="h1"
        component="h2"
        align="center"
        sx={{ color: "#ffffff" }}
      >
        Hello World
      </Typography>
      ;
    </Box>
  );
};
