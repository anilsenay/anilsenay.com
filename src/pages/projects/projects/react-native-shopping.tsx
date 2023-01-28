import GithubIcon from "@/assets/github";
import React from "react";
import Project from "../components/Project";

type Props = {
  name: string;
  theme?: string;
};

export default function ReactNativeShopping({ name, theme }: Props) {
  return (
    <Project
      name={name}
      url="https://github.com/anilsenay/React-Native-Shopping-App"
      repo="anilsenay/React-Native-Shopping-App"
      theme={theme}
      videoSrc="react-native-shopping"
      buttonText="Source Code"
      buttonIconComponent={<GithubIcon fill="#fff" />}
    >
      <>
        <p>
          This is a shopping app created with React Native. This is my first
          React Native project. The app allows users to browse items and add
          them to their cards. The application does not employ a backend, and
          instead relies on dummy data to populate the item catalog. Also all
          cart actions are store in local storage.
        </p>
      </>
    </Project>
  );
}
