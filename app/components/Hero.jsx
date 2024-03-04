"use client";
import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { Allerta_Stencil, Bruno_Ace, Roboto } from "next/font/google";

const allertaStencil = Allerta_Stencil({ subsets: ["latin"], weight: ["400"] });
const BrunoAce = Bruno_Ace({ subsets: ["latin"], weight: ["400"] });
const RobotoFont = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Hero() {
  return (
    <Container sx={{ background: "#181D2A" }} id="Inicio">
      <Box
        // height={"93.5vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        paddingTop={{ xs: 35, lg: 20 }}
        paddingBottom={{ xs: 40, lg: 20 }}
      >
        <Typography
          variant="h3"
          fontSize={20}
          fontWeight="Bold"
          color={"primary"}
          className={`${BrunoAce.className} antialiased`}
        >
          Hola, soy
        </Typography>

        <Typography
          variant="h1"
          fontSize={90}
          fontWeight="Bold"
          lineHeight={1}
          className={`${allertaStencil.className} antialiased`}
          sx={{
            background: "linear-gradient(270deg, #F220C4, #7761FF)",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "gradient 4s ease infinite",
            "@keyframes gradient": {
              "0%": {
                backgroundPosition: "0% 50%",
              },
              "50%": {
                backgroundPosition: "100% 50%",
              },
              "100%": {
                backgroundPosition: "0% 50%",
              },
            },
          }}
        >
          Ramiro
        </Typography>

        <Typography
          variant="h1"
          fontSize={90}
          fontWeight="Bold"
          color={"primaryText"}
          className={`${allertaStencil.className} antialiased`}
          lineHeight={1}
          sx={{
            background: "linear-gradient(270deg, #F220C4, #7761FF)",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "gradient 4s ease infinite",
            "@keyframes gradient": {
              "0%": {
                backgroundPosition: "0% 50%",
              },
              "50%": {
                backgroundPosition: "100% 50%",
              },
              "100%": {
                backgroundPosition: "0% 50%",
              },
            },
          }}
        >
          Acosta
        </Typography>

        <Typography
          variant="h2"
          fontSize={25}
          fontWeight={500}
          color={"primary"}
          lineHeight={2}
          className={`${RobotoFont.className} antialiased`}
        >
          Software Developer
        </Typography>
      </Box>
    </Container>
  );
}
