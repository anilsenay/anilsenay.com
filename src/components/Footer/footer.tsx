import GithubIcon from "@/assets/github";
import InstagramIcon from "@/assets/instagram";
import LinkedinIcon from "@/assets/linkedin";
import TwitterIcon from "@/assets/twitter";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import SocialMediaIcons from "../SocialMediaIcons";
import styles from "./footer.module.scss";

type Props = {};

export default function Footer({}: Props) {
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <footer className={styles.footer}>
      <p>All rights reserved © Anıl Şenay 2023</p>
      <SocialMediaIcons theme={currentTheme} />
    </footer>
  );
}
