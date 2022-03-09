import * as React from "react";

type Props = {
  className: string;
};

const Hero = (props: Props) => {
  return (
    <div id="hero" className={props.className}>
      {/* <h1>*</h1>
      <h1 className="text-4xl font-spaceMono font-bold italic">
        Andrey&#8217;s <br />
        Personal <br />
        Website <br />
      </h1> */}
    </div>
  );
};

export default Hero;
