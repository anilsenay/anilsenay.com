import GithubIcon from "@/assets/github";
import React from "react";
import Project from "../components/Project";

type Props = {
  name: string;
  theme?: string;
};

export default function ChangeMyMind({ name, theme }: Props) {
  return (
    <Project
      name={name}
      url="https://github.com/anilsenay/Change-My-Mind"
      repo="anilsenay/Change-My-Mind"
      theme={theme}
      videoSrc={require("@/assets/project_videos/change-my-mind.mp4")}
      buttonText="Source Code"
      buttonIconComponent={<GithubIcon fill="#fff" />}
    >
      <>
        <p>
          This is a debate app, basically. You can create a debate on any topic
          to challenge a user to change their mind. You will present your ideas
          in rounds. At the end of each round, there is a voting period to allow
          other users to vote on your opinions. After all, the user with the
          most votes wins the debate. If you've already changed your mind and
          given up, you can finish the debate and let the opponent win at any
          time.
        </p>
        <p>
          Change My Mind was a project I was making with Kotlin, but I aborted
          the project. Then, I decided to start this project from scratch with
          React Native to learn more and experiment with it. I wanted to
          complete this project in one month as a goal. So everything I've done
          is a month of labor. 90% of my goals are done. After all, I have a
          working project, although it has some problems.
        </p>
        <h6>Build With</h6>
        <ul>
          <li>
            <a href="https://reactnative.dev/" rel="nofollow">
              React Native
            </a>
          </li>
          <li>
            <a href="https://expo.io/" rel="nofollow">
              Expo
            </a>
          </li>
          <li>
            <a href="https://firebase.google.com/docs/web/setup" rel="nofollow">
              Firebase
            </a>
          </li>
        </ul>
      </>
    </Project>
  );
}
