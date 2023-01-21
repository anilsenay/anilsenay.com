import GithubIcon from "@/assets/github";
import InstagramIcon from "@/assets/instagram";
import LinkedinIcon from "@/assets/linkedin";
import TwitterIcon from "@/assets/twitter";
import { useTheme } from "next-themes";
import React from "react";
import styles from "./footer.module.scss";

type Props = {};

export default function Footer({}: Props) {
  const { theme } = useTheme();
  return (
    <footer className={styles.footer}>
      <p>All rights reserved © Anıl Şenay 2023</p>
      <div className={styles.icons}>
        <TwitterIcon fill={theme === "dark" ? "#fff" : "#000"} />
        <InstagramIcon fill={theme === "dark" ? "#fff" : "#000"} />
        <GithubIcon fill={theme === "dark" ? "#fff" : "#000"} />
        <LinkedinIcon fill={theme === "dark" ? "#fff" : "#000"} />
      </div>
    </footer>
  );
}
