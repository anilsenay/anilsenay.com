import React from "react";
import Head from "next/head";
import styles from "./about.module.scss";
import Layout from "@/components/Layout";

type Props = {};

export default function AboutPage({}: Props) {
  return (
    <>
      <Head>
        <title>About | Anıl Şenay</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main className={styles.main}>
          <h1 className="text-3xl font-bold underline">About</h1>
        </main>
      </Layout>
    </>
  );
}
