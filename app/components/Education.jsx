import {
  Container,
  Box,
  Typography,
  Tooltip,
  IconButton,
  Zoom,
} from "@mui/material";
import CvIcon from "../assets/svg/CvIcon";
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
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        paddingTop={{ xs: 5, lg: 20 }}
        paddingBottom={{ xs: 5, lg: 20 }}
      >
        <Typography
          pb={7}
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
                <Typography
                  textAlign={"center"}
                  variant="inherit"
                  fontSize={14}
                  fontWeight="300"
                  color={"#ffffff"}
                  className={`${NotoFont.className} antialiased`}
                >
                  {title}
                </Typography>
                <Typography
                  variant="inherit"
                  fontSize={14}
                  fontWeight="300"
                  color={"#ffffff"}
                  className={`${NotoFont.className} antialiased`}
                  textAlign={"center"}
                >
                  {description}
                </Typography>
                <Typography
                  variant="inherit"
                  fontSize={14}
                  fontWeight="300"
                  color={"#ffffff"}
                  className={`${NotoFont.className} antialiased`}
                  textAlign={"center"}
                >
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
                    mt: "50px",

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

        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          pt={6}
        >
          <Tooltip title={"Curriculum Vitae"} TransitionComponent={Zoom} arrow>
            <IconButton
              size="small"
              href="https://www.youtube.com/watch?v=uIxLkXP-Ll8&ab_channel=Gabriela-Peengler"
            >
              <CvIcon IconColor={"#ffffff"} IconWidth={"60px"} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Container>
  );
}
