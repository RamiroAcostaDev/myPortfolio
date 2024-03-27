"use client";
import { Container, Box, IconButton, Typography } from "@mui/material";
import TitleSections from "./TitleSections";
import EducationCard from "./EducationCard";
import CvIcon from "../assets/svg/CvIcon";

import "aos/dist/aos.css";
import { Noto_Sans_Thai } from "next/font/google";
const NotoFont = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "700"],
});

const educationItem = [
  {
    title: "Full Stack JavaScrip ReactJs",
    description: "Codo a Codo 4.0 - Gobierno de la Ciudad de Buenos Aires",
    date: "2023",
    img: "/img/project2.jpg",
  },
  {
    title: "Full Stack Python Django",
    description: "Codo a Codo 4.0 - Gobierno de la Ciudad de Buenos Aires",
    date: "2022",
    img: "/img/project2.jpg",
  },
  {
    title: "Full Stack Python",
    description: "Codo a Codo 4.0 - Gobierno de la Ciudad de Buenos Aires",
    date: "2022",
    img: "/img/project2.jpg",
  },
  {
    title: "Abogado",
    description: "Universidad de Buenos Aires.",
    date: "2019",
    img: "/img/project2.jpg",
  },
  {
    title: "Técnico en computación",
    description:
      "Escuela de Educación Técnica Nro. 2 - Pbro. José María Colombo - Gualeguaychú, Entre Ríos.",
    date: "2008",
    img: "/img/project2.jpg",
  },
];

export default function Education() {
  return (
    <Container id="Educación">
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={5}
        paddingTop={{ xs: 5, md: 10 }}
        paddingBottom={{ xs: 10, md: 5 }}
      >
        <Box>
          <TitleSections titleContent={"Educación"} />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          gap={3}
          flexWrap={"wrap"}
        >
          {educationItem.map(({ title, description, date, img }, index) => (
            <EducationCard
              key={index}
              courseTitle={title}
              courseDescription={description}
              courseDate={date}
              courseImg={img}
            />
          ))}
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          p={2}
        >
          <IconButton size="small" href={"/ConstructionPage"}>
            <CvIcon IconColor={"#ffffff"} IconWidth={"40px"} />
          </IconButton>
          <Typography
            variant="p"
            color="#ffffff"
            fontSize={14}
            fontWeight="300"
            className={`${NotoFont.className} antialiased`}
            data-aos="zoom-in"
          >
            Descargar CV
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
