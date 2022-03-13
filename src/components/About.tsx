import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

type Props = {
  className?: string;
};

const About = (props: Props) => {
  return (
    <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut">
      <div id="about" className={props.className}>
        <h2 className="mt-11 lg:mt-32 font-spaceMono font-bold text-3xl lg:text-5xl">
          About Me
        </h2>
        <div className="mt-7 lg:mt-10 font-medium text-lg lg:text-2xl leading-loose lg:leading-loose">
          <p>
            Self-taught iOS & Web Developer (Full-Stack) with a strong knowledge
            of Swift, JavaScript, Git and design in Sketch and Figma.
          </p>
          <br />
          <p>
            I am interested in mobile app and web development as well as the
            business side - marketing, management and administration.
          </p>
        </div>
        <div className="h-0.5 mt-11 lg:mt-32 w-full bg-borderLines"></div>
      </div>
    </ScrollAnimation>
  );
};

export default About;
