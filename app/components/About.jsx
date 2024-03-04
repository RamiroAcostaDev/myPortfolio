import { Container, Box, Typography, Avatar } from "@mui/material";
import { red } from "@mui/material/colors";
import { Noto_Sans_Thai } from "next/font/google";

const NotoFont = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "700"],
});

export default function About() {
  return (
    <Container id="Sobre mi">
      <Box
        height={"93.5vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={2}
      >
        <Typography
          variant="h4"
          fontSize={{ xs: 30, lg: 40 }}
          fontWeight="500"
          color={"#ffffff"}
          className={`${NotoFont.className} antialiased`}
        >
          Sobre mi
        </Typography>
        <Box
          height={{ xs: "700px", lg: "856px" }}
          width={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={{ xs: 5, lg: 10 }}
          flexDirection={{ xs: "column", md: "row" }}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"200px"}
            width={"200px"}
          >
            <Avatar
              alt="m"
              src="https://as1.ftcdn.net/v2/jpg/02/43/12/34/1000_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
              sx={{
                width: "200px",
                height: "200px",
              }}
            ></Avatar>
          </Box>
          <Box
            height={"400px"}
            width={{ xs: "300px", lg: "500px" }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography
              variant="inherit"
              fontSize={14}
              fontWeight="300"
              color={"#ffffff"}
              className={`${NotoFont.className} antialiased`}
              align={"justify"}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              minima quia eligendi molestias placeat, rem atque, assumenda
              explicabo at quos aperiam consequatur porro. Molestiae odit
              distinctio iure sed, culpa laudantium. Aperiam delectus quis nulla
              aut omnis molestiae tenetur obcaecati quam, perspiciatis expedita
              repellat voluptate quae tempora sed ducimus et, nostrum quos
              maiores sint! Temporibus minima dolorem autem ullam! Voluptates,
              eos. Ipsum modi obcaecati sit, excepturi commodi ea quia, laborum
              libero esse quaerat, beatae ipsam necessitatibus provident eos
              veritatis assumenda fugiat corrupti iste eum. Reprehenderit autem
              porro sit corrupti. Incidunt, dolores. Eos perspiciatis.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
