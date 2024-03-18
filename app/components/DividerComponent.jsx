import { Box, Divider } from "@mui/material";

export default function DividerSection() {
  return (
    <Box
      sx={{
        width: "300px",
        height: "1px",
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
      <Divider
        sx={{
          width: "100%",
          height: "1px",
          backgroundColor: "transparent",
        }}
      />
    </Box>
  );
}
