import {
  Container,
  Box,
  Typography,
  Tooltip,
  IconButton,
  Divider,
} from "@mui/material";
import { Allerta_Stencil, Bruno_Ace, Roboto } from "next/font/google";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import GitHubIcon from "../assets/svg/GitHubIcon";
import NetworkIcon from "../assets/svg/NetworkIcon";
import Zoom from "@mui/material/Zoom";

import { Noto_Sans_Thai } from "next/font/google";
const NotoFont = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "700"],
});

const ProjectsList = [
  {
    title: "Project 1",
    description:
      "loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    img: "/img/project1.jpg",
  },
  {
    title: "Project 2",
    description:
      "loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
    img: "/img/project2.jpg",
  },
  {
    title: "Project 2",
    description:
      "loremp ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
    img: "/img/project3.jpg",
  },
];

const LinksIcons = [
  {
    name: "GitHub",
    svg: <GitHubIcon IconColor={"#ffffff"} IconWidth={"30px"} />,
    link: "https://github.com",
  },
  {
    name: "Web",
    svg: <NetworkIcon IconColor={"#ffffff"} IconWidth={"30px"} />,
    link: "https://github.com",
  },
];

export default function Projects() {
  return (
    <Container sx={{ background: "#181D2A" }} id="Proyectos">
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={5}
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
          Proyectos
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          {ProjectsList.map(({ title, description, img }, index) => (
            <Card
              sx={{
                maxWidth: 300,
                background: "#181D2A",
                border: "3px solid #ffffff",
                borderRadius: "10px",
                m: 1,
              }}
              key={index}
              elevation={0}
            >
              <CardMedia component="img" alt={title} height="140" image={img} />
              <CardContent sx={{ backgroundColor: "#181D2A" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  textAlign={"center"}
                  fontSize={20}
                  fontWeight="400"
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
                  textAlign={"justify"}
                >
                  {description}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                {LinksIcons.map(({ name, svg, link }, index) => (
                  <Tooltip
                    title={name}
                    key={index}
                    TransitionComponent={Zoom}
                    arrow
                  >
                    <IconButton size="small" href={link}>
                      {svg}
                    </IconButton>
                  </Tooltip>
                ))}
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
