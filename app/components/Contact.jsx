import { Container, Box, Typography, IconButton } from "@mui/material";
import ContactForm from "./ContactForm";
import TitleSections from "./TitleSections";
import LinkedinIcon from "../assets/svg/LinkedinIcon";
import GitHubIcon from "../assets/svg/GitHubIcon";

import { Noto_Sans_Thai } from "next/font/google";
const NotoFont = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "700"],
});

export default function Projects() {
  return (
    <Container id="Contacto">
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={5}
        paddingTop={{ xs: 5, md: 10 }}
        paddingBottom={{ xs: 10, md: 20 }}
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
              Si tienes alguna pregunta, sugerencia o simplemente quieres
              ponerte en contacto, no dudes en enviar un mensaje a través de
              este formulario. Estoy emocionado por conocer tus ideas y trabajar
              juntos en futuros proyectos.
            </Typography>
          </Box>
          <ContactForm />

          <Box
            pt={2}
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            gap={4}
          >
            <IconButton
              size="small"
              href="https://www.youtube.com/watch?v=uIxLkXP-Ll8&ab_channel=Gabriela-Peengler"
            >
              <LinkedinIcon IconColor={"#ffffff"} IconWidth={35} />
            </IconButton>
            <IconButton
              size="small"
              href="https://www.youtube.com/watch?v=uIxLkXP-Ll8&ab_channel=Gabriela-Peengler"
            >
              <GitHubIcon IconColor={"#ffffff"} IconWidth={30} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
