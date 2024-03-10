import { Container, Box, Typography } from "@mui/material";

import { Allerta_Stencil, Bruno_Ace, Roboto } from "next/font/google";

const BrunoAce = Bruno_Ace({ subsets: ["latin"], weight: ["400"] });

const EducationItem = [
  {
    title: "Full Stack JavaScrip - ReactJs",
    description: "Codo a Codo 4.0 - Gobierno de la Ciudad de Buenos Aires",
    date: "2023",
    direction: { borderWidth: "3px 3px 0 0" },
  },
];

export default function Education() {
  return (
    <Container id="Educación">
      <Box
        height={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          display={"flex"}
          alignContent={"center"}
          justifyContent={"center"}
          gap={4}
          color={"white"}
        >
          <Box
            width={"100px"}
            display={"flex"}
            alignContent={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <Typography variant="h6" fontSize={7} textAlign={"center"}>
              Full Stack JavaScrip - ReactJs
            </Typography>
            <Typography variant="p" fontSize={5} textAlign={"center"}>
              Codo a Codo 4.0 - Gobierno de la Ciudad de Buenos Aires
            </Typography>
            <Typography variant="p" fontSize={5} textAlign={"center"}>
              2023
            </Typography>
          </Box>

          <Box width={"100px"}>
            <Box
              width={"50px"}
              height={"100%"}
              sx={{
                borderWidth: "3px 3px 0 0",
                borderRadius: " 0 5px 0 0 ",
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
