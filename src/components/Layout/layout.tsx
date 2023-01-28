import React from "react";
import Container from "../Container";
import Footer from "../Footer";
import Header from "../Header";
import { useRouter } from "next/router";
import PageTransition from "../PageTransition";
import { pages } from "@/consts/app-config";

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  const { asPath } = useRouter();
  const currentPage = pages.find((i) => i.path === asPath);
  let path = currentPage?.path;
  if (path === undefined) {
    path = Math.random().toString(36).slice(2, 7); //random string
  }

  return (
    <>
      <Header pages={pages} />
      <PageTransition key={path}>
        <Container>{children}</Container>
      </PageTransition>
      <Footer />
    </>
  );
}
