import { Box, IconButton, TextField } from "@mui/material";
import MailIcon from "../assets/svg/MailIcon";

export default function ContactForm() {
  return (
    <Box
      component="form"
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      color="#ffffff"
    >
      <TextField
        id="Nombre"
        label="Nombre"
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
        }}
        InputLabelProps={{
          style: {
            color: "#ffffff",
          },
        }}
      />
      <TextField
        id="Email"
        label="Email"
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
        }}
        InputLabelProps={{
          style: {
            color: "#ffffff",
          },
        }}
      />
      <TextField
        id="Comentarios"
        label="Comentarios"
        multiline
        rows={4}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
        }}
        InputLabelProps={{
          style: {
            color: "#ffffff",
          },
        }}
      />

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
        gap={4}
      >
        <IconButton
          size="small"
          href="https://www.youtube.com/watch?v=uIxLkXP-Ll8&ab_channel=Gabriela-Peengler"
        >
          <MailIcon IconColor={"#ffffff"} IconWidth={35} />
        </IconButton>
      </Box>
    </Box>
  );
}
