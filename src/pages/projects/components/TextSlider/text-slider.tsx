import React from "react";
import styles from "./text-slider.module.scss";

type Props = {};

function Content() {
  return (
    <>
      <span>github.com/anilsenay</span>
      <span>javascript</span>
      <span>frontend</span>
      <span>golang</span>
      <span>backend</span>
      <span>typescript</span>
      <span>open source</span>
      <span>next</span>
      <span>graphql</span>
      <span>gatsby</span>
      <span>react native</span>
    </>
  );
}

export default function TextSlider({}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={`${styles.slideItem} ${styles.slideLeft}`}>
          <Content />
          <Content />
        </div>
        <div className={`${styles.slideItem} ${styles.slideRight}`}>
          <Content />
          <Content />
        </div>
      </div>
    </div>
  );
}
