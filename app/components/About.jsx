import { Container, Box, Typography, Avatar } from "@mui/material";
import TitleSections from "./TitleSections";

import "aos/dist/aos.css";
import { Noto_Sans_Thai } from "next/font/google";

const NotoFont = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "700"],
});

export default function About() {
  return (
    <Container id="Sobre mi" sx={{ backgroundColor: "#21293B" }}>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={5}
        paddingTop={{ xs: 5, md: 10 }}
        paddingBottom={{ xs: 10, md: 20 }}
      >
        <TitleSections titleContent={"Sobre mi"} />
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={{ xs: "column", md: "row" }}
          gap={5}
        >
          <Avatar
            alt="m"
            src="/img/me.jpg"
            sx={{
              width: "200px",
              height: "200px",
            }}
            data-aos="zoom-in"
          ></Avatar>
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
            Como programador, poseo experiencia sólida en el desarrollo web
            utilizando tecnologías de vanguardia como React.js y Next.js, junto
            con un dominio profundo de JavaScript. Mi enfoque se centra en la
            creación de interfaces de usuario intuitivas y atractivas, haciendo
            uso de bibliotecas como Material UI y metodologías como Tailwind
            para garantizar un diseño eficiente y escalable. Además, estoy
            familiarizado con el control de versiones mediante Git y tengo
            habilidades avanzadas en la manipulación de bases de datos,
            especialmente MySQL, lo que me permite crear aplicaciones web
            dinámicas y funcionales con un alto nivel de rendimiento y
            seguridad.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
