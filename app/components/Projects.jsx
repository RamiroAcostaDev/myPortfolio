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
    title: "Project 2",
    description: "loremp ipsum dolor sit amet, consectetur adipiscing elit",
    img: "/img/project3.jpg",
  },
];

export default function Projects() {
  return (
    <Container sx={{ background: "#181D2A" }} id="Proyectos">
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={{ xs: "column", lg: "row" }}
        gap={5}
        paddingTop={{ xs: 10, lg: 20 }}
        paddingBottom={{ xs: 10, lg: 20 }}
      >
        <TitleSections titleContent={"Proyectos"} />
        {ProjectsList.map(({ title, description, img }, index) => (
          <BlurCard
            key={index}
            cardTitle={title}
            cardDescription={description}
            cardBackground={img}
          />
        ))}
      </Box>
    </Container>
  );
}
