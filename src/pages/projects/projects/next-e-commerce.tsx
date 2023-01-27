import GithubIcon from "@/assets/github";
import React from "react";
import Project from "../components/Project";

type Props = {
  name: string;
  star?: number;
  theme?: string;
};

export default function NextECommerce({ name, star, theme }: Props) {
  return (
    <Project
      name={name}
      url="https://github.com/anilsenay/next-e-commerce"
      star={star}
      theme={theme}
      videoSrc={require("@/assets/project_videos/next-e-commerce.mp4")}
      buttonText="Source Code"
      buttonIconComponent={<GithubIcon fill="#fff" />}
    >
      <>
        <p>
          As a self-challenge, I created an e-commerce website using Next.js in
          one week. There are some issues that I wish to handle later, but I
          have not continued to contribute to the project. Using Firebase as
          backend.
        </p>
        <p>
          I saw a UI design on Dribbble by Anton Mikhaltsov. And I wanted to
          code this design. As a challenge to myself, I decided to create a
          fully functional website with NextJS and Firebase as the backend in
          just one week.
        </p>
        <p>
          This is one of my first projects using Next when I was new to React.
          So I do not think this is a well-coded project. However, based on
          responses from people who contacted me about the project, I believe
          this project will be useful to someone. I hope that someday I will
          refactor this project by implementing new NextJS features with my
          current knowledge.
        </p>
        <h6>Build With</h6>
        <ul>
          <li>
            <a href="https://reactjs.org" rel="nofollow">
              React
            </a>
          </li>
          <li>
            <a href="https://nextjs.org/" rel="nofollow">
              NextJS
            </a>
          </li>
          <li>
            <a href="https://firebase.google.com/docs/web/setup" rel="nofollow">
              Firebase
            </a>
          </li>
          <li>
            <a href="https://react-hook-form.com/" rel="nofollow">
              React Hook Form
            </a>
          </li>
          <li>
            <a href="/anilsenay/next-e-commerce/blob/master/date-fns.org">
              date-fns
            </a>
          </li>
          <li>
            <a href="https://sass-lang.com/" rel="nofollow">
              Sass
            </a>
          </li>
        </ul>
      </>
    </Project>
  );
}
