import React from "react";
import styles from "./about-me.module.scss";

type Props = {};

export default function AboutMe({}: Props) {
  return (
    <div className={styles.container}>
      <h3>About Me</h3>
      <div className={styles.text}>
        <p>Hi, I am Anıl. I am a software engineer at Cimri.</p>
        <p>
          I graduated from Marmara University Computer Science & Engineering at
          2022.I&apos;ve been interested in computers and programming since my
          childhood. Coding and design, which I started with curiosity and
          passion, is now a big part of my life.
        </p>
        <p>
          I can describe myself as a Geek. Computer games, movies, comics,
          science fiction and fantasy books are my interests that I spare time
          in my daily life.
        </p>
        <p>
          I took the first step into the software world with web designing at my
          early ages. After dealing with web design for a few years, I had not
          do any development on the web for a long time. In recent years, I am
          working as developer professionally.
        </p>
        <p>
          I am mainly interested in front-end development by using React, React
          Native and back-end development by using Golang.
        </p>
      </div>
    </div>
  );
}