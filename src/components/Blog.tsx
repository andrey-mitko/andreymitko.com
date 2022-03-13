import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

type Props = { className?: string };

const Blog = (props: Props) => {
  return (
    <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut">
      <div id="blog" className={props.className}>
        <h2 className="mt-11 lg:mt-32 font-spaceMono font-bold text-3xl lg:text-5xl">
          Blog
        </h2>
        <div className="mt-7 lg:mt-10 flex items-center justify-center bg-pastelGray rounded-3xl">
          <span className="font-spaceMono italic font-bold text-3xl lg:text-5xl text-pastelGray2 py-28 lg:py-56">
            Coming Soon
          </span>
        </div>
        <div className="h-0.5 mt-11 lg:mt-32 w-full bg-borderLines"></div>
      </div>
    </ScrollAnimation>
  );
};

export default Blog;
