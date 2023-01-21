import React from "react";
import styles from "./connect.module.scss";

type Props = {};

function Link({ text, href }: { text: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {text}
    </a>
  );
}

export default function Connect({}: Props) {
  return (
    <div className={styles.container}>
      <h3 id="connect">Connect</h3>
      <div className={styles.links}>
        <Link href="https://twitter.com/anilsenay" text={"Twitter"} />
        <Link href="https://linkedin.com/in/anilsenay" text={"Linkedin"} />
        <Link href="https://github.com/anilsenay" text={"Github"} />
        <Link href="https://instagram.com/anilsenay" text={"Instagram"} />
        <Link
          href="mailto:anilsenay3@gmail.com"
          text={"anilsenay3@gmail.com"}
        />
      </div>
    </div>
  );
}
