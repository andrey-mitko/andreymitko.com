import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

type Props = { className?: string };

const Contact = (props: Props) => {
  return (
    <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut">
      <div id="contactMe" className={props.className}>
        <h2 className="mt-11 lg:mt-32 font-spaceMono font-bold text-3xl lg:text-5xl">
          Contact Me
        </h2>
        {/* LINKS */}
        <div className="mt-7 lg:mt-10 flex flex-col space-y-6 lg:space-y-8 justify-between mb-11 lg:mb-32">
          {/* GITHUB */}
          <a
            href="https://github.com/andrey-mitko"
            target="_blank"
            className="flex flex-row space-x-3 lg:space-x-4 items-center"
          >
            <i className="ri-github-fill text-3xl lg:text-4xl text-black100"></i>
            <span className="text-2xl lg:text-3xl underline font-semibold">
              /andrey-mitko
            </span>
          </a>
          {/* LINKEDIN */}
          <a
            href="https://linkedin.com/in/mitk8"
            target="_blank"
            className="flex flex-row space-x-3 lg:space-x-4 items-center"
          >
            <i
              className="ri-linkedin-fill text-3xl lg:text-4xl
           text-black100"
            ></i>
            <span className="text-2xl lg:text-3xl underline font-semibold">
              /mitk8
            </span>
          </a>
          {/* TWITTER */}
          <a
            href="https://twitter.com/andrey_mitko"
            target="_blank"
            className="flex flex-row space-x-3 lg:space-x-4 items-center"
          >
            <i
              className="ri-twitter-fill text-3xl lg:text-4xl
           text-black100"
            ></i>
            <span className="text-2xl lg:text-3xl underline font-semibold">
              /andrey_mitko
            </span>
          </a>
          {/* EMAIL */}
          <a
            href="mailto:andrey@mitko.me"
            target="_blank"
            className="flex flex-row space-x-3 lg:space-x-4 items-center"
          >
            <i
              className="ri-mail-fill text-3xl lg:text-4xl
           text-black100"
            ></i>
            <span className="text-2xl lg:text-3xl underline font-semibold">
              andrey@mitko.me
            </span>
          </a>
        </div>
        {/* LINKS END */}
      </div>
    </ScrollAnimation>
  );
};

export default Contact;
