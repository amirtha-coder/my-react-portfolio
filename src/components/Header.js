import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import "../App.css";

export const Header = () => {
  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 800,
        backgroundColor: "#8338ec",
      }}
    >
      <Avatar
        alt="Amirtha Muthirulandi"
        src="https://media-exp1.licdn.com/dms/image/C4E03AQE47fXs0fJI4w/profile-displayphoto-shrink_400_400/0/1660421883960?e=1665619200&v=beta&t=KBjzL6srLhGe7TWottfME3Eqz8EQzaC-Tw1Nxgw9DRY"
        sx={{ width: 300, height: 300 }}
      />
      <Typography
        variant="h3"
        component="h2"
        align="center"
        sx={{ color: "#ffffff" }}
      >
        <h1>
          <span className="wave">&#128075;</span> Hello, I am Amirtha
        </h1>
      </Typography>
      ;
    </Stack>
  );
};
