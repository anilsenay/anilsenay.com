import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./home.module.scss";
import Layout from "@/components/Layout";
import CtaLink from "@/components/CtaLink";
import Link from "next/link";
import Projects from "./components/Projects";
import { useTheme } from "next-themes";
import Image from "next/image";
import BlurryBackground from "@/assets/blurry-bg.png";
import Describe from "./components/Describe";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Connect from "./components/Connect";

type Props = {};

export default function HomePage({}: Props) {
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <>
      <Head>
        <title>Anıl Şenay</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <Image
            className={styles.background}
            src={BlurryBackground}
            alt="Blurry Background"
            priority
          />
          <div className={styles.titleContainer}>
            <h1>Hey, I'm Anıl 👋</h1>
            <h1
              className={`${styles.title} ${
                currentTheme === "dark" ? styles.dark : ""
              }`}
            >
              {"software engineer "}
            </h1>
          </div>
          <Describe />
          <AboutMe />
          <Experience />
          <Connect />
        </main>
      </Layout>
    </>
  );
}
