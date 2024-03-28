import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </Box>
  );
}
