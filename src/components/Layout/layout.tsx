import React from "react";
import Container from "../Container";
import Footer from "../Footer";
import Header from "../Header";
import { useRouter } from "next/router";
import PageTransition from "../PageTransition";
import { pages } from "@/consts/app-config";
import Head from "next/head";

type Props = {
  children: JSX.Element;
};

let path: string;

export default function Layout({ children }: Props) {
  const { asPath } = useRouter();
  const currentPage = pages.find((i) => i.path === asPath);

  const title = currentPage?.metadata.title || "Anıl Şenay";
  const description =
    currentPage?.metadata.description || "Anıl Şenay Personal Website";

  return (
    <>
      <Head>
        <title>{currentPage?.metadata.title || "Anıl Şenay"}</title>
        <meta name="description" content={currentPage?.metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://anilsenay.com" />
        <meta property="og:url" content="https://anilsenay.com" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@anilsenay" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <Header pages={pages} />
      <PageTransition path={asPath}>
        <Container>{children}</Container>
      </PageTransition>
      <Footer />
    </>
  );
}
