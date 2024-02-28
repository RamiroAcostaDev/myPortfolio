import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
  Tooltip,
  IconButton,
} from "@mui/material";
import { Allerta_Stencil, Bruno_Ace, Roboto } from "next/font/google";
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

const BrunoAce = Bruno_Ace({ subsets: ["latin"], weight: ["400"] });

const tecnologias = [
  {
    name: "Html",
    icon: <HtmlIcon IconColor={"#ffffff"} IconWidth={"50px"} />,
  },
  {
    name: "Css",
    icon: <CssIcon IconColor={"#ffffff"} IconWidth={"50px"} />,
  },
  {
    name: "JavaScript",
    icon: <JavaScriptIcons IconColor={"#ffffff"} IconWidth={"50px"} />,
  },
  {
    name: "React",
    icon: <ReactIcon IconColor={"#ffffff"} IconWidth={"50px"} />,
  },
  {
    name: "Nodejs",
    icon: <NodejsIcon IconColor={"#ffffff"} IconWidth={"50px"} />,
  },
  {
    name: "Nextjs",
    icon: <NextjsIcon IconColor={"#ffffff"} IconWidth={"50px"} />,
  },
];

const dataBase = [
  {
    name: "MySQL",
    icon: <MySQLIcon IconColor={"#ffffff"} IconWidth={"50px"} />,
  },
  {
    name: "MongoDB",
    icon: <MongoIcon IconColor={"#ffffff"} IconWidth={"50px"} />,
  },
];

const tools = [
  {
    name: "MaterialUI",
    icon: <MaterialUIIcon IconColor={"#ffffff"} IconWidth={"50px"} />,
  },
  {
    name: "Git",
    icon: <GitIcon IconColor={"#ffffff"} IconWidth={"50px"} />,
  },
  {
    name: "Tailwind",
    icon: <TailwindIcon IconColor={"#ffffff"} IconWidth={"50px"} />,
  },
];

export default function Skills() {
  return (
    <Container
      sx={{ background: "red" }}
      id="Habilidades"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      height={"100vh"}
    >
      <Box
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
        {/* tecnologi box */}
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
                {tecnologias.map((icon, index) => (
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
          {/* End tecnologi box */}

          {/* Database box */}
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
            {/* End Database box */}

            {/* Tools box */}
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
            {/* End Tools box */}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
