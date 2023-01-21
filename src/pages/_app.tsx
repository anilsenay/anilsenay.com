import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Manrope } from "@next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${manrope.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
