import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Providers } from "../globalRedux/provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <Providers>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Providers>
  );
}
