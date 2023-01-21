import RightArrow from "@/assets/right-arrow";
import Link from "next/link";
import React from "react";
import styles from "./cta.module.scss";

type Props = {
  href: string;
  text: string;
  full?: boolean;
};

export default function CtaLink({ href, text, full }: Props) {
  return (
    <Link
      href={href}
      className={styles.cta}
      style={{ width: full ? "100%" : undefined }}
    >
      <span className={styles.ctaText}>{text}</span>
      <RightArrow />
    </Link>
  );
}