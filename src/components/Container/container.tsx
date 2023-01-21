import React from "react";
import styles from "./container.module.scss";

type Props = {
  children: JSX.Element;
};

export default function Container({ children }: Props) {
  return <div className={styles.Container}>{children}</div>;
}
