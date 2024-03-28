import { Box, Typography } from "@mui/material";
import { Noto_Sans_Thai } from "next/font/google";
const NotoFont = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "700"],
});

export default function Footer() {
  return (
    <Box p={2}>
      <Typography
        variant="p"
        color="#ffffff"
        fontSize={11}
        fontWeight="300"
        className={`${NotoFont.className} antialiased`}
      >
        © 2024 | Diseñado y codeado con 🤍 por Rama (Ramiro Acosta)
      </Typography>
    </Box>
  );
}
