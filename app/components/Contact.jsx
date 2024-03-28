import { Container, Box, Typography, IconButton } from "@mui/material";

import TitleSections from "./TitleSections";
import LinkedinIcon from "../assets/svg/LinkedinIcon";
import GitHubIcon from "../assets/svg/GitHubIcon";
import MailIcon from "../assets/svg/MailIcon";

import { Noto_Sans_Thai } from "next/font/google";
const NotoFont = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "700"],
});

export default function Projects() {
  return (
    <Container id="Contacto" sx={{ backgroundColor: "#21293B" }}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={5}
        paddingTop={{ xs: 5, md: 10 }}
        paddingBottom={{ xs: 10, md: 10 }}
      >
        <TitleSections titleContent={"Contacto"} />
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
          flexDirection={"column"}
          gap={4}
        >
          <Box display={"flex"} flexDirection={"column"}>
            <Typography
              variant="p"
              color="#ffffff"
              fontSize={14}
              fontWeight="300"
              width={{ xs: 300, lg: 500 }}
              className={`${NotoFont.className} antialiased`}
              align={"justify"}
              data-aos="zoom-in"
            >
              ¡Hablemos! Envíame un correo electrónico o contáctame a través de
              mis redes sociales. Estoy emocionado por conocer tus ideas y
              trabajar juntos en futuros proyectos.
            </Typography>
          </Box>

          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            color="#ffffff"
            backgroundColor="#181D2A"
            justifyContent={"center"}
            alignItems={"center"}
            padding={5}
            borderRadius={2}
            // boxShadow={5}
            data-aos="zoom-in"
          >
            <IconButton size="small" href={"/ConstructionPage"}>
              <GitHubIcon IconColor={"#ffffff"} IconWidth={"40px"} />
            </IconButton>

            <Typography
              variant="p"
              color="#ffffff"
              fontSize={14}
              fontWeight="300"
              className={`${NotoFont.className} antialiased`}
              data-aos="zoom-in"
            >
              Github.com/RamiroAcostaDev
            </Typography>
            <IconButton size="small" href={"/ConstructionPage"}>
              <LinkedinIcon IconColor={"#ffffff"} IconWidth={"40px"} />
            </IconButton>
            <Typography
              variant="p"
              color="#ffffff"
              fontSize={14}
              fontWeight="300"
              className={`${NotoFont.className} antialiased`}
              data-aos="zoom-in"
            >
              Linkedin.com/in/ramiroacostadev
            </Typography>
            <IconButton size="small" href={"/ConstructionPage"}>
              <MailIcon IconColor={"#ffffff"} IconWidth={"40px"} />
            </IconButton>
            <Typography
              variant="p"
              color="#ffffff"
              fontSize={14}
              fontWeight="300"
              className={`${NotoFont.className} antialiased`}
              data-aos="zoom-in"
            >
              Ramiroacosta.dev@gmail.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
