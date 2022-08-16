import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

export const ContactMe = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        background:
          "radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)",
        margin: "1rem",
        padding: "1rem",
        borderRadius: "5%",
      }}
      noValidate
      autoComplete="off"
    >
      <Typography component="h3" variant="h2" align="center">
        Contact Me
      </Typography>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <TextField
          id="filled-multiline-flexible"
          label="Name"
          multiline
          maxRows={6}
          value={value}
          onChange={handleChange}
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Email"
          placeholder="Placeholder"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Message"
          multiline
          rows={4}
          variant="filled"
        />
      </Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Button variant="contained" type="submit" endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
    </Box>
  );
};
