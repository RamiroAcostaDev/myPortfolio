import { Box, IconButton, TextField, Typography } from "@mui/material";
import MailIcon from "../assets/svg/MailIcon";
import { Noto_Sans_Thai } from "next/font/google";

const NotoFont = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "700"],
});
export default function ContactForm() {
  return (
    <Box
      component="form"
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      color="#ffffff"
      backgroundColor="#21293B"
      padding={2}
      borderRadius={2}
      boxShadow={5}
      data-aos="zoom-in"
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
        flexDirection={"column"}
      >
        <IconButton
          size="small"
          href="https://www.youtube.com/watch?v=uIxLkXP-Ll8&ab_channel=Gabriela-Peengler"
        >
          <MailIcon IconColor={"#ffffff"} IconWidth={35} />
        </IconButton>
        <Typography
          variant="p"
          color="#ffffff"
          fontSize={12}
          fontWeight="300"
          className={`${NotoFont.className} antialiased`}
          align="center"
        >
          Enviar
        </Typography>
      </Box>
    </Box>
  );
}
