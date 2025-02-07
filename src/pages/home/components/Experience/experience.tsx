import React from "react";
import styles from "./experience.module.scss";

type Props = {};

type ExperienceItemProps = {
  timeline: string;
  title: string;
  children: React.ReactNode;
};

function ExperienceItem({ timeline, title, children }: ExperienceItemProps) {
  return (
    <div className={styles.experienceItem}>
      <span className={styles.timeline}>{timeline}</span>
      <span className={styles.title}>{title}</span>
      <span className={styles.description}>{children}</span>
    </div>
  );
}

export default function Experience({}: Props) {
  return (
    <div className={styles.container}>
      <h4 id="experience">Experience</h4>
      <div className={styles.content}>
        <ExperienceItem timeline="2021 - Current" title="Cimri">
          I worked as Front-end developer about 1 year then I joined Back-end
          team. I experienced in <b>React</b>, <b>Next</b>, <b>GraphQL</b> when
          I was in Front-end
          <br />I currently work with <b>Golang</b> and have experience in{" "}
          <b>distributed systems</b>, <b>Kubernetes</b>,{" "}
          <b>cloud technologies</b>, and more.
        </ExperienceItem>
      </div>
    </div>
  );
}
