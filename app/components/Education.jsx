"use client";
import {
  Container,
  Box,
  Typography,
  Tooltip,
  IconButton,
  Zoom,
  Paper,
  CardMedia,
  Card,
  CardContent,
} from "@mui/material";
import CvIcon from "../assets/svg/CvIcon";
import { Noto_Sans_Thai } from "next/font/google";
import { useState } from "react";

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
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
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
          variant="h4"
          fontSize={{ xs: 30, lg: 40 }}
          fontWeight="500"
          color={"#ffffff"}
          className={`${NotoFont.className} antialiased`}
        >
          Educacion
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            m: 1,
            position: "relative", // Added to position the overlay
          }}
        >
          <Box
            sx={{
              width: 300,
              height: 128,
              borderRadius: 2,
              position: "relative", // Added to position the overlay
            }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            onClick={handleClick}
            tabIndex={0} // Make the Box focusable
          >
            <Box
              sx={{
                backgroundImage: `url(/img/project1.jpg)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "100%",
                height: "100%",
                filter: isClicked ? "blur(5px)" : "none",
                transition: "filter 0.3s ease",
                position: "absolute",
                borderRadius: 2,
              }}
            />
            {isClicked && (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  borderRadius: 2,
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay with 50% opacity
                }}
              />
            )}
          </Box>
          {isClicked ? (
            <Typography
              variant="inherit"
              color={"#ffffff"}
              sx={{
                position: "absolute", // Position Typography over the blurred Box
                opacity: 1,
                transition: "opacity 0.3s ease",
              }}
              textAlign={"center"}
              fontSize={14}
              fontWeight="300"
              className={`${NotoFont.className} antialiased`}
            >
              hola
            </Typography>
          ) : (
            <Typography
              variant="p"
              color={"#ffffff"}
              className={`${NotoFont.className} antialiased`}
              sx={{
                position: "absolute", // Position Typography over the blurred Box
                opacity: 0,
                transition: "opacity 0.3s ease",
              }}
            >
              Hola
            </Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
}

// <Typography
// pb={7}
// variant="h4"
// fontSize={{ xs: 30, lg: 40 }}
// fontWeight="500"
// color={"#ffffff"}
// className={`${NotoFont.className} antialiased`}
// >
// Educacion
// </Typography>
// {educationItem.map(({ title, description, date }, index) => {
// const isEven = index % 2 === 0;
// const isLast = index === educationItem.length - 1;
// return (
//   <Box
//     display={"flex"}
//     color={"white"}
//     key={index}
//     gap={4}
//     flexDirection={isEven ? "row" : "row-reverse"}
//     alignContent={"space-between"}
//   >
//     <Box width={"120px"} display={"flex"} flexDirection={"column"}>
//       <Typography
//         textAlign={"center"}
//         variant="inherit"
//         fontSize={14}
//         fontWeight="300"
//         color={"#ffffff"}
//         className={`${NotoFont.className} antialiased`}
//       >
//         {title}
//       </Typography>
//       <Typography
//         variant="inherit"
//         fontSize={14}
//         fontWeight="300"
//         color={"#ffffff"}
//         className={`${NotoFont.className} antialiased`}
//         textAlign={"center"}
//       >
//         {description}
//       </Typography>
//       <Typography
//         variant="inherit"
//         fontSize={14}
//         fontWeight="300"
//         color={"#ffffff"}
//         className={`${NotoFont.className} antialiased`}
//         textAlign={"center"}
//       >
//         {date}
//       </Typography>
//     </Box>

//     <Box
//       width={"100px"}
//       display={"flex"}
//       justifyContent={isEven ? "flex-start" : "flex-end"}
//     >
//       <Box
//         width={"40px"}
//         height={"50px"}
//         sx={{
//           mt: "50px",

//           borderWidth: !isLast
//             ? isEven
//               ? "3px 3px 0 0"
//               : "3px 0 0 3px"
//             : 0,
//         }}
//       ></Box>
//     </Box>
//   </Box>
// );
// })}

// <Box
// display={"flex"}
// alignItems={"center"}
// justifyContent={"center"}
// pt={6}
// >
// <Tooltip title={"Curriculum Vitae"} TransitionComponent={Zoom} arrow>
//   <IconButton
//     size="small"
//     href="https://www.youtube.com/watch?v=uIxLkXP-Ll8&ab_channel=Gabriela-Peengler"
//   >
//     <CvIcon IconColor={"#ffffff"} IconWidth={"60px"} />
//   </IconButton>
// </Tooltip>
// </Box>
