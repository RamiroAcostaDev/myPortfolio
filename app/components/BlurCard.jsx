"use client";
import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { Noto_Sans_Thai } from "next/font/google";
import GitHubIcon from "../assets/svg/GitHubIcon";
import NetworkIcon from "../assets/svg/NetworkIcon";

import "aos/dist/aos.css";

const NotoFont = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "700"],
});
export default function BlurCard({
  cardTitle,
  cardDescription,
  cardBackground,
}) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
      paddingBottom={{ xs: 5, md: 2 }}
    >
      <Box
        onClick={handleClick}
        tabIndex={0}
        sx={{
          position: "relative",
          width: 300,
          height: 230,
          m: 1,
        }}
        data-aos="zoom-in"
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          sx={{
            backgroundImage: `url(${cardBackground})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "100%",
            height: "100%",
            filter: isClicked ? "blur(3px)" : "none",
            transition: "filter 0.3s ease",
            boxShadow: 10,
            borderRadius: 2,
            position: "absolute",
            top: 0,
            left: 0,
          }}
        ></Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            borderRadius: 2,
            zIndex: 1,
            transition: "opacity 0.8s ease, visibility 0.8s  ease",
            opacity: isClicked ? 1 : 0,
            visibility: isClicked ? "visible" : "hidden",
          }}
        >
          <Typography
            variant="p"
            color="#ffffff"
            textAlign={"center"}
            width={200}
            className={`${NotoFont.className} antialiased`}
            sx={{
              transition: "opacity 0.8s  ease",
            }}
          >
            {cardDescription}
          </Typography>
          <Box display={"flex"} gap={4}>
            <IconButton
              sx={{
                transition: "opacity 0.8s ease",
              }}
              size="small"
              href={"/ConstructionPage"}
            >
              <GitHubIcon IconColor={"#ffffff"} IconWidth={"30px"} />
            </IconButton>
            <IconButton
              sx={{
                transition: "opacity 0.8s  ease",
              }}
              size="small"
              href={"/ConstructionPage"}
            >
              <NetworkIcon IconColor={"#ffffff"} IconWidth={"30px"} />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography
          variant="h6"
          color="#ffffff"
          className={`${NotoFont.className} antialiased`}
          data-aos="zoom-in"
        >
          {cardTitle}
        </Typography>
      </Box>
    </Box>
  );
}
