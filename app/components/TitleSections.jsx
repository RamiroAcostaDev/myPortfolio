import { Typography } from "@mui/material";
import { Noto_Sans_Thai } from "next/font/google";
import "aos/dist/aos.css";

const NotoFont = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "700"],
});

export default function TitleSections({ titleContent }) {
  return (
    <Typography
      variant="h4"
      fontSize={{ xs: 30, lg: 40 }}
      fontWeight="500"
      color={"#ffffff"}
      className={`${NotoFont.className} antialiased`}
      data-aos="zoom-in"
    >
      {titleContent}
    </Typography>
  );
}
