import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import "../App.css";

import { Stack } from "@mui/system";

export const AboutMe = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "100vw",
          height: "100%",
          borderRadius: "5%",
        },
      }}
    >
      <canvas class="background"></canvas>
      <Stack
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          //   backgroundColour: "#ffbe0b",
        }}
      >
        <Typography variant="h6" component="h4" sx={{}}>
          <strong>About Me</strong>
          <ul>
            <li>
              I have volunteered in hospital and been part of explaining impacts
              of a new technological system introduction to patients. By doing
              this I have become a strong communuicator- which I know could be
              overlooked when applying in IT.
            </li>
            <li>
              Through duke of edinburgh, I have gained experience working
              collabratively which has enhanced my communication abilities and
              listening skills.
            </li>
            <li>
              I am currently undertaking a coding bootcamp course; prior to
              this, I have done functional skills qualifications level 1 and 2
              in IT and an ict technology GCSE at a grade A.
            </li>
          </ul>
        </Typography>
      </Stack>
    </Box>
  );
};
