import * as React from "react";

type Props = {
  className?: string;
};

const Hero = (props: Props) => {
  return (
    <div id="hero" className={props.className}>
      {/* Bulletpoint */}
      <span className="pt-5 block text-5xl font-spaceMono font-bold italic w-full text-right">
        *
      </span>
      {/* Bulletpoint End */}

      {/* Title + Subtitle */}
      <div>
        <h1 className="text-5xl leading-snug font-spaceMono font-bold italic">
          Andrey&#8217;s <br />
          Personal <br />
          Website <br />
        </h1>
        <div className="text-lg text-black80 mt-5 center flex items-center space-x-2">
          <h2>Software Developer </h2>
          <div className="inline-block w-1 h-1 bg-black80 mt-0.5 rounded-full"></div>
          <h2>Business Student</h2>
        </div>
      </div>
      {/* Title + Subtitle End */}

      {/* Scroll Up */}
      <div className="text-black50 flex flex-col items-center">
        <div className="flex flex-col items-center elementToFadeInAndOut">
          <i className="ri-arrow-up-line text-2xl"></i>
          <p className="mb-24">Scroll Up</p>
        </div>
        <div className="h-0.5 w-full bg-borderLines"></div>
      </div>
      {/* Scroll Up End */}
    </div>
  );
};

export default Hero;
