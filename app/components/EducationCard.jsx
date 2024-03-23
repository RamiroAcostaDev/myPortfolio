"use client";
import {
  Typography,
  CardMedia,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";

import "aos/dist/aos.css";
import { Noto_Sans_Thai } from "next/font/google";

const NotoFont = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "700"],
});

export default function EducationCard({
  courseTitle,
  courseDescription,
  courseDate,
  courseImg,
}) {
  return (
    <Card
      sx={{ maxWidth: 300, backgroundColor: "#181D2A" }}
      data-aos="zoom-in"
      raised={true}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="50"
          image={courseImg}
          alt="education image"
        />
        <CardContent>
          <Typography
            gutterBottom
            fontSize={17}
            variant="h5"
            component="div"
            className={`${NotoFont.className} antialiased`}
            align="center"
            color="#ffffff"
          >
            {courseTitle}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color="#ffffff"
            fontSize={12}
            fontWeight="300"
            className={`${NotoFont.className} antialiased`}
            align="center"
          >
            {courseDescription}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color="#ffffff"
            fontSize={14}
            fontWeight="300"
            className={`${NotoFont.className} antialiased`}
            align="center"
          >
            {courseDate}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
