import React from "react";
import Container from "../Container";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./layout.module.scss";

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}
