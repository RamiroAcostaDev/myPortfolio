import { Container, Box } from "@mui/material";
import BlurCard from "./BlurCard";
import TitleSections from "./TitleSections";

const ProjectsList = [
  {
    title: "Project 1",
    description: "loremp ipsum dolor sit amet, consectetur adipiscing elit",
    img: "/img/project1.jpg",
  },
  {
    title: "Project 2",
    description: "loremp ipsum dolor sit amet, consectetur adipiscing elit",
    img: "/img/project2.jpg",
  },
  {
    title: "Project 3",
    description: "loremp ipsum dolor sit amet, consectetur adipiscing elit",
    img: "/img/project3.jpg",
  },
];

export default function Projects() {
  return (
    <Container sx={{ background: "#21293B" }} id="Proyectos">
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={5}
        paddingTop={{ xs: 5, md: 10 }}
        paddingBottom={{ xs: 5, md: 13 }}
      >
        <TitleSections titleContent={"Proyectos"} />
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {ProjectsList.map(({ title, description, img }, index) => (
            <BlurCard
              key={index}
              cardTitle={title}
              cardDescription={description}
              cardBackground={img}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
}
