import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  Tooltip,
  IconButton,
} from "@mui/material";
import { Noto_Sans_Thai } from "next/font/google";

import ConfigIcon from "../assets/svg/ConfigIcon";
import CssIcon from "../assets/svg/CssIcon";
import DataBaseIcon from "../assets/svg/DataBaseIcon";
import GitIcon from "../assets/svg/GitIcon";
import HtmlIcon from "../assets/svg/HtmlIcon";
import JavaScriptIcons from "../assets/svg/JavaScriptIcons";
import MaterialUIIcon from "../assets/svg/MaterialUIIcon";
import Zoom from "@mui/material/Zoom";

import MySQLIcon from "../assets/svg/MySQLIcon";
import NextjsIcon from "../assets/svg/NextjsIcon";
import NodejsIcon from "../assets/svg/NodejsIcon";
import ReactIcon from "../assets/svg/ReactIcon";
import TailwindIcon from "../assets/svg/TailwindIcon";
import TerminalIcon from "../assets/svg/TerminalIcon";
import MongoIcon from "../assets/svg/MongoIcon";

const NotoFont = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "700"],
});

const technologies = [
  {
    name: "Html",
    icon: <HtmlIcon IconColor={"#ffffff"} IconWidth={"40px"} />,
  },
  {
    name: "Css",
    icon: <CssIcon IconColor={"#ffffff"} IconWidth={"40px"} />,
  },
  {
    name: "JavaScript",
    icon: <JavaScriptIcons IconColor={"#ffffff"} IconWidth={"40px"} />,
  },
  {
    name: "React",
    icon: <ReactIcon IconColor={"#ffffff"} IconWidth={"40px"} />,
  },
  {
    name: "Nodejs",
    icon: <NodejsIcon IconColor={"#ffffff"} IconWidth={"40px"} />,
  },
  {
    name: "Nextjs",
    icon: <NextjsIcon IconColor={"#ffffff"} IconWidth={"40px"} />,
  },
];

const dataBase = [
  {
    name: "MySQL",
    icon: <MySQLIcon IconColor={"#ffffff"} IconWidth={"40px"} />,
  },
  {
    name: "MongoDB",
    icon: <MongoIcon IconColor={"#ffffff"} IconWidth={"40px"} />,
  },
];

const tools = [
  {
    name: "MaterialUI",
    icon: <MaterialUIIcon IconColor={"#ffffff"} IconWidth={"40px"} />,
  },
  {
    name: "Git",
    icon: <GitIcon IconColor={"#ffffff"} IconWidth={"40px"} />,
  },
  {
    name: "Tailwind",
    icon: <TailwindIcon IconColor={"#ffffff"} IconWidth={"40px"} />,
  },
];

// NotoFont

export default function Skills() {
  return (
    <Container
      id="Habilidades"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        paddingTop={{ xs: 5, lg: 20 }}
        paddingBottom={{ xs: 4.5, lg: 20 }}
      >
        <Typography
          variant="h4"
          fontSize={{ xs: 30, lg: 40 }}
          fontWeight="500"
          color={"#ffffff"}
          className={`${NotoFont.className} antialiased`}
        >
          Habilidades
        </Typography>
        {/* elements container */}
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={{ xs: "column", md: "row" }}
          gap={1}
        >
          {/* code container */}
          <Box
            height={{ xs: "240px", lg: "500px" }}
            width={{ xs: "300px", lg: "500px" }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            gap={1}
          >
            <Box
              width={{ xs: "300px", lg: "500px" }}
              height={"50px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <TerminalIcon IconColor={"#ffffff"} IconWidth={"40px"} />
            </Box>
            <Box
              width={{ xs: "300px", lg: "450px" }}
              height={{ xs: "200px", lg: "400px" }}
              border={"3px solid white"}
              borderRadius={"10px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexWrap={"wrap"}
              gap={4}
              padding={2}
            >
              {technologies.map((icon, index) => (
                <Tooltip title={icon.name} TransitionComponent={Zoom} arrow>
                  <IconButton>{icon.icon}</IconButton>
                </Tooltip>
              ))}
            </Box>
          </Box>
          {/* database and tools container */}
          <Box
            width={{ xs: "300px", lg: "500px" }}
            display={"flex"}
            flexDirection={"column"}
            gap={1}
          >
            {/* database container */}
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              width={{ xs: "300px", lg: "500px" }}
              height={{ xs: "150px", lg: "250" }}
              gap={1}
            >
              {/* database box */}
              <Box
                width={{ xs: "300px", lg: "500px" }}
                height={"50px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <DataBaseIcon IconColor={"#ffffff"} IconWidth={"40px"} />
              </Box>
              <Box
                width={{ xs: "300px", lg: "450px" }}
                height={{ xs: "100px", lg: "150" }}
                border={"3px solid white"}
                borderRadius={"10px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexWrap={"wrap"}
                gap={4}
              >
                {dataBase.map((icon, index) => (
                  <Tooltip title={icon.name} TransitionComponent={Zoom} arrow>
                    <IconButton>{icon.icon}</IconButton>
                  </Tooltip>
                ))}
              </Box>
            </Box>
            {/* tools container */}
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              flexDirection={"column"}
              width={{ xs: "300px", lg: "500px" }}
              height={{ xs: "150px", lg: "250" }}
              gap={1}
            >
              {/* tools box */}
              <Box
                width={{ xs: "300px", lg: "500px" }}
                height={"50px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <ConfigIcon IconColor={"#ffffff"} IconWidth={"40px"} />
              </Box>
              <Box
                width={{ xs: "300px", lg: "450px" }}
                height={{ xs: "100px", lg: "150px" }}
                borderRadius={"10px"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  background: "linear-gradient(270deg, #F220C4, #7761FF)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "box",
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
                <Box
                  width={{ xs: "300px", lg: "450px" }}
                  height={{ xs: "100px", lg: "150px" }}
                  border={"3px solid transparent"}
                  borderRadius={"10px"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  flexWrap={"wrap"}
                  gap={4}
                >
                  {tools.map((icon, index) => (
                    <Tooltip title={icon.name} TransitionComponent={Zoom} arrow>
                      <IconButton>{icon.icon}</IconButton>
                    </Tooltip>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

{
  /* <Box
        height={"100vh"}
        display={"flex"}
        flexDirection={"column"}
        sx={{ border: "2px solid blue" }}
      >
        <Box
          height={"30vh"}
          width={"100%"}
          sx={{ pt: "15vh" }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography
            variant="h3"
            sx={{ fontFamily: BrunoAce }}
            color={"#ffffff"}
            fontSize={30}
          >
            Habilidades
          </Typography>
        </Box>

        <Box
          sx={{ border: "2px solid grey" }}
          display={"flex"}
          height={"70%"}
          width={"100%"}
          padding={2}
          gap={2}
        >
          <Box
            height={"100%"}
            width={"50%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box>
              <TerminalIcon IconColor={"#ffffff"} IconWidth={"50px"} />
            </Box>
            <Box
              sx={{ border: "2px solid grey", borderRadius: "10px" }}
              height={"100%"}
              width={"100%"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={4}
            >
              <Grid container spacing={4} justifyContent={"center"}>
                {technologies.map((icon, index) => (
                  <Grid
                    key={index}
                    item
                    md={4}
                    sm={4}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <Tooltip title={icon.name} TransitionComponent={Zoom} arrow>
                      <IconButton>{icon.icon}</IconButton>
                    </Tooltip>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>

          <Box
            height={"100%"}
            width={"50%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ border: "2px solid blue" }}
          >
            <Box
              height={"50%"}
              width={"100%"}
              sx={{ border: "2px solid orange" }}
            >
              <Box>
                <DataBaseIcon IconColor={"#ffffff"} IconWidth={"50px"} />
              </Box>
              <Box
                sx={{ border: "2px solid grey", borderRadius: "10px" }}
                height={"75%"}
                width={"100%"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Grid container spacing={3} justifyContent={"center"}>
                  {dataBase.map((icon, index) => (
                    <Grid
                      key={index}
                      item
                      md={4}
                      sm={4}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Tooltip
                        title={icon.name}
                        TransitionComponent={Zoom}
                        arrow
                      >
                        <IconButton>{icon.icon}</IconButton>
                      </Tooltip>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>

            <Box
              height={"50%"}
              width={"100%"}
              sx={{ border: "2px solid green" }}
            >
              <Box>
                <ConfigIcon IconColor={"#ffffff"} IconWidth={"50px"} />
              </Box>
              <Box
                sx={{ border: "2px solid grey", borderRadius: "10px" }}
                height={"75%"}
                width={"100%"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Grid container spacing={3} justifyContent={"center"}>
                  {tools.map((icon, index) => (
                    <Grid
                      key={index}
                      item
                      md={4}
                      sm={4}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <Tooltip
                        title={icon.name}
                        TransitionComponent={Zoom}
                        arrow
                      >
                        <IconButton>{icon.icon}</IconButton>
                      </Tooltip>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box> */
}
