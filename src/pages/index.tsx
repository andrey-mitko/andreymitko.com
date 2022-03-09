import * as React from "react";
import Hero from "../components/hero";
import SEO from "../components/seo";

// markup
const IndexPage = () => {
  return (
    <div>
      <SEO title="Andrey Mitko" />
      <main className="text-black100 font-lato sm:mx-5 md:container">
        {/*  TODO: Move to HERO */}
        {/* <Hero className="w-full h-screen" /> */}
        <div className="w-full h-screen bg-red-50">
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
            <div className="text-base text-black80 mt-5 center flex items-center space-x-2">
              <h2>Software Developer </h2>
              <div className="inline-block w-1 h-1 bg-black80 rounded-full"></div>
              <h2>Business Student</h2>
            </div>
          </div>
          {/* Title + Subtitle End */}

          {/* Scroll Up */}
          <div className="">
            <p>Scroll Up</p>
          </div>
          {/* Scroll Up End */}
        </div>
        {/* HERO ENDS */}
      </main>
    </div>
  );
};

export default IndexPage;
