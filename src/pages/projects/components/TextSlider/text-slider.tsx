import React, { useEffect, useState } from "react";
import styles from "./text-slider.module.scss";

type Props = {
  theme?: string;
};

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

export default function TextSlider({ theme }: Props) {
  const textOpacity = theme === "light" ? 0.4 : 0.2;
  const [showCustomCursor, setShowCustomCursor] = useState(false);

  useEffect(() => {
    let element = document?.getElementById("custom-cursor");

    const handleMouseMove = (event: MouseEvent) => {
      if (!element) {
        element = document?.getElementById("custom-cursor");
      }
      document.getElementById("custom-cursor")!.style.transform =
        "translate(" + event.clientX + "px," + event.clientY + "px)";
    };

    if (window.innerWidth >= 992) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // easter egg
  const handleClick = () => {
    document.body.style.cursor = showCustomCursor ? "initial" : "none";
    setShowCustomCursor((s) => !s);
  };

  return (
    <div
      className={styles.container}
      onClick={theme === "dark" ? handleClick : undefined}
    >
      <div className={styles.content}>
        <div
          className={`${styles.slideItem} ${styles.slideLeft}`}
          style={{ opacity: textOpacity }}
        >
          <Content />
          <Content />
        </div>
        <div
          className={`${styles.slideItem} ${styles.slideRight}`}
          style={{ opacity: textOpacity }}
        >
          <Content />
          <Content />
        </div>
      </div>
      <div
        id="custom-cursor"
        className={styles.customCursor}
        style={{ opacity: showCustomCursor ? 1 : 0 }}
      />
    </div>
  );
}
