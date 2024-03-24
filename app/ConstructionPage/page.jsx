import { Box, Typography } from "@mui/material";
import { Noto_Sans_Thai } from "next/font/google";
import AtentionIcon from "./AtentionIcon";
const NotoFont = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "700"],
});
export default function page() {
  return (
    <Box
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <AtentionIcon />
      <Typography
        variant="p"
        color="#ffffff"
        className={`${NotoFont.className} antialiased`}
      >
        Page under construction
      </Typography>
    </Box>
  );
}
