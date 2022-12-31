//Next
import type { AppProps } from "next/app";
//NextUi
import { NextUIProvider } from "@nextui-org/react";
//Styles
import "../styles/globals.css";
import { darkTheme } from "../themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
