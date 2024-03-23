import { Container, Box, Typography } from "@mui/material";
import TitleSections from "./TitleSections";

import SkillCard from "./SkillsCard";

import ConfigIcon from "../assets/svg/ConfigIcon";
import CssIcon from "../assets/svg/CssIcon";
import DataBaseIcon from "../assets/svg/DataBaseIcon";
import GitIcon from "../assets/svg/GitIcon";
import HtmlIcon from "../assets/svg/HtmlIcon";
import JavaScriptIcons from "../assets/svg/JavaScriptIcons";
import MaterialUIIcon from "../assets/svg/MaterialUIIcon";

import MySQLIcon from "../assets/svg/MySQLIcon";
import NextjsIcon from "../assets/svg/NextjsIcon";
import NodejsIcon from "../assets/svg/NodejsIcon";
import ReactIcon from "../assets/svg/ReactIcon";
import TailwindIcon from "../assets/svg/TailwindIcon";
import TerminalIcon from "../assets/svg/TerminalIcon";
import MongoIcon from "../assets/svg/MongoIcon";

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
        gap={5}
        paddingTop={{ xs: 5, lg: 20 }}
        paddingBottom={{ xs: 5, lg: 20 }}
      >
        <TitleSections titleContent={"Mis habilidades"} />

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={{ xs: "center", md: "flex-start" }}
          flexDirection={{ xs: "column", md: "row" }}
          flexWrap={"wrap"}
          gap={{ xs: 4, md: 7 }}
        >
          <SkillCard
            titleIcon={
              <TerminalIcon IconColor={"#ffffff"} IconWidth={"50px"} />
            }
            titleCard={"Tecnologias"}
            iconsList={technologies}
          />

          <SkillCard
            titleIcon={
              <DataBaseIcon IconColor={"#ffffff"} IconWidth={"50px"} />
            }
            titleCard={"Bases de datos"}
            iconsList={dataBase}
          />
          <SkillCard
            titleIcon={<ConfigIcon IconColor={"#ffffff"} IconWidth={"50px"} />}
            titleCard={"Herramientas"}
            iconsList={tools}
          />
        </Box>
      </Box>
    </Container>
  );
}
