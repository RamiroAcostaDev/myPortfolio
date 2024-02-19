'use client'
import "./globals.css";
import { createTheme, ThemeProvider } from "@mui/material";

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
