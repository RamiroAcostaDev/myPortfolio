// import { Noto_Sans_Thai_Looped, Roboto} from "next/font/google";
// import { Allerta_Stencil } from "next/font/google";
// import { Bruno_Ace } from "next/font/google";
'use client'
import "./globals.css";
import { createTheme, ThemeProvider } from "@mui/material";



// const notoSansThaiLooped = Noto_Sans_Thai_Looped({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"],});
// const allertaStencil = Allerta_Stencil({ subsets: ["latin"], weight: ["400"],});
// const BrunoAce= Bruno_Ace({ subsets: ["latin"], weight: ["400"],});
// const RobotoFont = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"],});


const theme=createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#0000FF',
    },
    background: {
      default: '#181D2A',
    },
  },
}
  
);



// export const metadata = {};

export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
