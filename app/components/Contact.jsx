import {
  Container,
  Box,
  Typography,
  TextField,
  IconButton,
  FormControl,
} from "@mui/material";
import LinkedinIcon from "../assets/svg/LinkedinIcon";
import GitHubIcon from "../assets/svg/GitHubIcon";
import MailIcon from "../assets/svg/MailIcon";

import { Noto_Sans_Thai } from "next/font/google";
const NotoFont = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "700"],
});

export default function Projects() {
  return (
    <Container id="Contacto">
      <Box
        paddingTop={{ xs: 5, lg: 20 }}
        paddingBottom={{ xs: 5, lg: 20 }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Typography
          pb={7}
          variant="h4"
          fontSize={{ xs: 30, lg: 40 }}
          fontWeight="500"
          color={"#ffffff"}
          className={`${NotoFont.className} antialiased`}
        >
          Contacto
        </Typography>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignContent={"center"}
          flexDirection={"column"}
          gap={4}
        >
          <Box display={"flex"} flexDirection={"column"} gap={2}>
            <Typography
              variant="h3"
              fontSize={24}
              fontWeight="500"
              color={"#ffffff"}
              className={`${NotoFont.className} antialiased`}
              textAlign={"center"}
            >
              Get in touch
            </Typography>
            <Typography
              width={250}
              variant="inherit"
              fontSize={14}
              fontWeight="300"
              color={"#ffffff"}
              className={`${NotoFont.className} antialiased`}
              textAlign={"justify"}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
              iusto velit ipsum repudiandae, aspernatur quia doloribus! Aperiam
              accusamus placeat ad eaque veniam minus accusantium. Ad quod
              architecto dolorum facilis commodi.
            </Typography>
          </Box>
          <Box
            component="form"
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            color="#ffffff"
          >
            <TextField
              id="Nombre"
              label="Nombre"
              variant="outlined"
              InputLabelProps={{
                style: {
                  color: "#ffffff",
                },
              }}
            />
            <TextField
              id="Email"
              label="Email"
              variant="outlined"
              InputLabelProps={{
                style: {
                  color: "#ffffff",
                },
              }}
            />
            <TextField
              id="Comentarios"
              label="Comentarios"
              multiline
              rows={4}
              InputLabelProps={{
                style: {
                  color: "#ffffff",
                },
              }}
            />

            <Box
              display={"flex"}
              justifyContent={"center"}
              alignContent={"center"}
              gap={4}
            >
              <IconButton
                size="small"
                href="https://www.youtube.com/watch?v=uIxLkXP-Ll8&ab_channel=Gabriela-Peengler"
              >
                <MailIcon IconColor={"#ffffff"} IconWidth={35} />
              </IconButton>
            </Box>
          </Box>
          <Box
            pt={2}
            display={"flex"}
            justifyContent={"center"}
            alignContent={"center"}
            gap={4}
          >
            <IconButton
              size="small"
              href="https://www.youtube.com/watch?v=uIxLkXP-Ll8&ab_channel=Gabriela-Peengler"
            >
              <LinkedinIcon IconColor={"#ffffff"} IconWidth={35} />
            </IconButton>
            <IconButton
              size="small"
              href="https://www.youtube.com/watch?v=uIxLkXP-Ll8&ab_channel=Gabriela-Peengler"
            >
              <GitHubIcon IconColor={"#ffffff"} IconWidth={30} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
