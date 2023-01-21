import RightArrow from "@/assets/right-arrow";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./cta.module.scss";

type Props = {
  href: string;
  text: string;
  full?: boolean;
};

export default function CtaLink({ href, text, full }: Props) {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Link
      href={href}
      className={styles.cta}
      style={{ width: full ? "100%" : undefined }}
    >
      <span className={styles.ctaText}>{text}</span>
      <RightArrow fill={theme === "dark" ? "#fff" : "#000"} />
    </Link>
  );
}
