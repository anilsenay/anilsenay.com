import React from "react";
import styles from "./experience.module.scss";

type Props = {};
type ExperienceItemProps = {
  timeline: string;
  title: string;
  children: string;
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
      <h4>Experience</h4>
      <div className={styles.content}>
        <ExperienceItem timeline="2021 - Current" title="Cimri">
          I worked as Front-end developer about 1 year then I joined Back-end
          team. I experienced in React, Next, GraphQL when I was in Front-end
          and I’m currently using Golang and having experience in micro
          services, kubernetes and more.
        </ExperienceItem>
      </div>
    </div>
  );
}
