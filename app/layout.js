'use client'
import "./globals.css";
import { createTheme, ThemeProvider } from "@mui/material";

const theme=createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondaryText: {
      main: '#0000FF',
    },
    background: {
      default: '#181D2A',
    },
    primaryGradient: {
      main: 'linear-gradient(to right, #F220C4, #7761FF)',
    },
    invertPrimaryGradient: {
      main: 'linear-gradient(to right, #7761FF, #F220C4)',
    },
    secondaryGradient: {
      main: 'linear-gradient(to right, #F220C4, #342054)',
    },
    invertSecondaryGradient: {
      main: 'linear-gradient(to right, #342054, #F220C4)',
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
