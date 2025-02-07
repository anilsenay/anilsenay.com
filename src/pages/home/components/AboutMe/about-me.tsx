import React from "react";
import styles from "./about-me.module.scss";

type Props = {};

export default function AboutMe({}: Props) {
  return (
    <div className={styles.container}>
      <h4 id="about">About Me</h4>
      <div className={styles.text}>
        <p>
          Hi, I am Anıl. I am a software engineer at Cimri.
          <br />
          <br />
          I can describe myself as a Geek. Computer games, movies, comics,
          science fiction and fantasy books are my interests that I spare time
          in my daily life.
          <br />
          <br />I am mainly interested in front-end development by using{" "}
          <b>React</b>, <b>React Native</b> and back-end development by using{" "}
          <b>Golang</b>.
          <br />
          <br />
          As a software developer, my primary focus is building efficient and
          scalable applications that provide a seamless user experience.
          <br />
          <br />
          My expertise also extends to system architecture, backend development,
          and optimizing performance to ensure every component is both robust
          and maintainable.
        </p>
      </div>
    </div>
  );
}
