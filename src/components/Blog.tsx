import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

type Props = { className?: string };

const Blog = (props: Props) => {
  return (
    <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut">
      <div id="blog" className={props.className}>
        <h2 className="mt-11 font-spaceMono font-bold text-3xl">Blog</h2>
        <div className="mt-7 flex items-center justify-center bg-pastelGray rounded-3xl">
          <span className="font-spaceMono italic font-bold text-3xl text-pastelGray2 py-28">
            Coming Soon
          </span>
        </div>
        <div className="h-0.5 mt-11 w-full bg-borderLines"></div>
      </div>
    </ScrollAnimation>
  );
};

export default Blog;
