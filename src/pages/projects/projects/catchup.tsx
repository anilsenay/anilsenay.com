import FigmaIcon from "@/assets/figma";
import React from "react";
import Project from "../components/Project";

type Props = {
  name: string;
  theme?: string;
};

export default function Catchup({ name, theme }: Props) {
  return (
    <Project
      name={name}
      url="https://www.figma.com/community/file/1200181885987810296"
      theme={theme}
      videoSrc="catchup"
      buttonText="Figma Design"
      buttonIconComponent={<FigmaIcon />}
    >
      <>
        <p>
          Catchup is an app idea that I developed with my friends. I decided to
          publish the app design because I am glad to have designed it. But I do
          not think I will open the source code of the project, unfortunately.
        </p>
        <p>
          We built a prototype of the project by using React Native for mobile
          app and Java Spring for backend. Also we had found an investor. But we
          though the operational part of the business is too hard for this app
          idea. So we denied the investment and stopped the project.
        </p>
        <p>
          Main idea of CatchUp is to provide discount opportunities in the
          nearby location of a user. These opportunities may include Happy
          Hours, special discount offers over total amounts etc. These discounts
          can be the venue's own discount or discount for only CatchUp users.
        </p>
        <p>
          On the business owner side, CatchUp helps to promote businesses via
          advertisement. An owner has the opportunity to send push notifications
          to the users located nearby their venue and to their followers on
          CatchUp.
        </p>
      </>
    </Project>
  );
}
