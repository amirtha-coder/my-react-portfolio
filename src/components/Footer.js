import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import GitHubIcon from "@mui/icons-material/GitHub";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";

export const Footer = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "100vw" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          onClick={() => {
            window.open(
              "https://github.com/amirtha-coder",
              "_blank",
              "noopener,noreferrer"
            );
          }}
          label="GitHub"
          icon={<GitHubIcon />}
        />
        <BottomNavigationAction label="Email" icon={<MarkEmailUnreadIcon />} />
        <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} />
      </BottomNavigation>
      //{" "}
    </Box>
    // <Box sx={{ "& > :not(style)": { m: 1 } }}>
    //   <Fab color="primary">
    //     <Link
    //       component="button"
    //       variant="body2"
    //       onClick={() => {
    //         location.href = "https://google.com";
    //       }}
    //     >
    //       <GitHubIcon />
    //     </Link>
    //   </Fab>
    //   <Fab color="secondary" aria-label="edit">
    //     <EditIcon />
    //   </Fab>
    //   <Fab variant="extended">
    //     <NavigationIcon sx={{ mr: 1 }} />
    //     Navigate
    //   </Fab>
    //   <Fab disabled aria-label="like">
    //     <FavoriteIcon />
    //   </Fab>
    // </Box>
  );
};
