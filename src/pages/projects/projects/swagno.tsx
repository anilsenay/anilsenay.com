import GithubIcon from "@/assets/github";
import React from "react";
import Project from "../components/Project";

type Props = {
  name: string;
  theme?: string;
};

export default function Swagno({ name, theme }: Props) {
  return (
    <Project
      name={name}
      url="https://github.com/go-swagno/swagno"
      repo="go-swagno/swagno"
      theme={theme}
      videoSrc={require("@/assets/project_videos/swagno.mp4")}
      buttonText="Source Code"
      buttonIconComponent={<GithubIcon fill="#fff" />}
    >
      <>
        <p>
          Swagno is an approach to create Swagger Documentation 2.0 without any
          annotation, exported file or any command to run. You can declare your
          documentation details in code and get a json string to serve with a
          handler.
        </p>
        <p>
          This project inspired by Swaggo. Swaggo, uses annotations, exports
          files and needs to run by command. If you don't like this way, Swagno
          appears as a good alternative.
        </p>
        <p>
          This is my first open-source package in Golang. I created this project
          after struggling with Swaggo and deciding to build something similar
          with a different approach while I was building a project in my company
          that required Swagger documentation.
        </p>
      </>
    </Project>
  );
}
