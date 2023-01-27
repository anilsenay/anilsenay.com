import GithubIcon from "@/assets/github";
import React from "react";
import Project from "../components/Project";

type Props = {
  name: string;
  star?: number;
  theme?: string;
};

export default function ReactNativeShopping({ name, star, theme }: Props) {
  return (
    <Project
      name={name}
      url="https://github.com/anilsenay/React-Native-Shopping-App"
      star={star}
      theme={theme}
      videoSrc={require("@/assets/project_videos/react-native-shopping.mp4")}
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
