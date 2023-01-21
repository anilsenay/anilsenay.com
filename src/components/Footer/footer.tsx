import GithubIcon from "@/assets/github";
import InstagramIcon from "@/assets/instagram";
import LinkedinIcon from "@/assets/linkedin";
import TwitterIcon from "@/assets/twitter";
import React from "react";
import styles from "./footer.module.scss";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className={styles.footer}>
      <p>All rights reserved © Anıl Şenay 2023</p>
      <div className={styles.icons}>
        <TwitterIcon />
        <InstagramIcon />
        <GithubIcon />
        <LinkedinIcon />
      </div>
    </footer>
  );
}
