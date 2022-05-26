import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  extendTheme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import Dashboard from "./components/Dashboard";
import MainContent from "./components/MainContent";

const customTheme = extendTheme({
  colors: {
    indigo: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81",
    },
  },
});

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <Box minH="100vh">
      <Dashboard>
        <MainContent />
      </Dashboard>
    </Box>
  </ChakraProvider>
);
