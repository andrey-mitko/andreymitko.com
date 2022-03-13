import * as React from "react";

type Props = {
  className?: string;
};

const Hero = (props: Props) => {
  return (
    <div id="hero" className={props.className}>
      {/* Bulletpoint */}
      <span className=" select-none pt-5 block text-5xl lg:text-7xl font-spaceMono font-bold italic w-full text-right">
        *
      </span>
      {/* Bulletpoint End */}

      {/* Title + Subtitle */}
      <div>
        <h1 className="text-5xl lg:text-7xl leading-snug lg:leading-snug font-spaceMono font-bold italic">
          Andrey&#8217;s <br />
          Personal <br />
          Website <br />
        </h1>
        <div className="text-lg lg:text-2xl text-black80 mt-5 lg:mt-8 center flex items-center space-x-2">
          <h2>Software Developer </h2>
          <div className="inline-block w-1 h-1 bg-black80 mt-0.5 rounded-full"></div>
          <h2>Business Student</h2>
        </div>
      </div>
      {/* Title + Subtitle End */}

      {/* Scroll Up */}
      <div className="text-black50 flex flex-col items-center select-none">
        <div className="flex flex-col items-center elementToFadeInAndOut">
          <i className="ri-arrow-up-line text-2xl lg:text-3xl"></i>
          <p className="mb-24 lg:text-lg">Scroll Up</p>
        </div>
        <div className="h-0.5 w-full bg-borderLines"></div>
      </div>
      {/* Scroll Up End */}
    </div>
  );
};

export default Hero;
