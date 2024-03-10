import { Container, Box, Typography } from "@mui/material";

import { Noto_Sans_Thai } from "next/font/google";

const NotoFont = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "700"],
});

const educationItem = [
  {
    title: "Full Stack JavaScrip - ReactJs",
    description: "Codo a Codo 4.0 - Gobierno de la Ciudad de Buenos Aires",
    date: "2023",
  },
  {
    title: "Full Stack Python - Django",
    description: "Codo a Codo 4.0 - Gobierno de la Ciudad de Buenos Aires",
    date: "2022",
  },
  {
    title: "Full Stack Python",
    description: "Codo a Codo 4.0 - Gobierno de la Ciudad de Buenos Aires",
    date: "2023",
  },
  {
    title: "Abogado ",
    description: "Universidad de Buenos Aires.",
    date: "2019",
  },
  {
    title: " Técnico en computación ",
    description:
      "Escuela de Educación Técnica Nro. 2 - Pbro. José María Colombo - Gualeguaychú, Entre Ríos.",
    date: "2008",
  },
];

export default function Education() {
  return (
    <Container id="Educación">
      <Box
        height={"100vh"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        gap={2}
      >
        <Typography
          variant="h4"
          fontSize={{ xs: 30, lg: 40 }}
          fontWeight="500"
          color={"#ffffff"}
          className={`${NotoFont.className} antialiased`}
        >
          Educacion
        </Typography>
        {educationItem.map(({ title, description, date }, index) => {
          const isEven = index % 2 === 0;
          const isLast = index === educationItem.length - 1;
          return (
            <Box
              display={"flex"}
              color={"white"}
              key={index}
              gap={4}
              flexDirection={isEven ? "row" : "row-reverse"}
              alignContent={"space-between"}
            >
              <Box width={"120px"} display={"flex"} flexDirection={"column"}>
                <Typography variant="h6" fontSize={8} textAlign={"center"}>
                  {title}
                </Typography>
                <Typography variant="p" fontSize={6} textAlign={"center"}>
                  {description}
                </Typography>
                <Typography variant="p" fontSize={6} textAlign={"center"}>
                  {date}
                </Typography>
              </Box>

              <Box
                width={"100px"}
                display={"flex"}
                justifyContent={isEven ? "flex-start" : "flex-end"}
              >
                <Box
                  width={"40px"}
                  height={"50px"}
                  sx={{
                    mt: "15px",
                    borderWidth: !isLast
                      ? isEven
                        ? "3px 3px 0 0"
                        : "3px 0 0 3px"
                      : 0,
                  }}
                ></Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
}
