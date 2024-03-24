import { Box, Typography } from "@mui/material";
import "aos/dist/aos.css";

import { Noto_Sans_Thai } from "next/font/google";
const NotoFont = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "700"],
});

export default function SkillsCard({ titleIcon, titleCard, iconsList }) {
  return (
    <Box
      width={{ xs: "300px", md: "500px" }}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={1}
      data-aos="zoom-in"
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        data-aos="zoom-in"
      >
        {titleIcon}
        <Typography
          variant="p"
          color="#ffffff"
          fontSize={12}
          fontWeight="300"
          className={`${NotoFont.className} antialiased`}
          align="center"
          data-aos="zoom-in"
        >
          {titleCard}
        </Typography>
      </Box>

      <Box
        width={{ xs: "300px", lg: "500px" }}
        display={"flex"}
        border={"2px solid white"}
        borderRadius={2}
        gap={3}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
        p={2}
      >
        {iconsList &&
          iconsList.map(({ icon, name }, index) => (
            <>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column"}
                gap={1}
              >
                <Box key={index} data-aos="zoom-in">
                  {icon}
                </Box>
                <Typography
                  variant="p"
                  color="#ffffff"
                  fontSize={12}
                  fontWeight="300"
                  className={`${NotoFont.className} antialiased`}
                  align="center"
                >
                  {name}
                </Typography>
              </Box>
            </>
          ))}
      </Box>
    </Box>
  );
}
