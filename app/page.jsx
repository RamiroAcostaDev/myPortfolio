import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { Divider, Box } from "@mui/material";

export default function Home() {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <NavBar />
      <Hero />
      <Divider
        sx={{
          width: "300px",
          height: "1px",
          backgroundColor: "#F220C4",
        }}
      />
      <About />
      <Divider
        sx={{
          width: "300px",
          height: "1px",
          backgroundColor: "#F220C4",
        }}
      />
      <Skills />
      <Divider
        sx={{
          width: "300px",
          height: "1px",
          backgroundColor: "#F220C4",
        }}
      />
      <Projects />
      <Divider
        sx={{
          width: "300px",
          height: "1px",
          backgroundColor: "#F220C4",
        }}
      />
      <Education />
      <Divider
        sx={{
          width: "300px",
          height: "1px",
          backgroundColor: "#F220C4",
        }}
      />
      <Contact />
    </Box>
  );
}
