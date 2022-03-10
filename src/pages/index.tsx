import * as React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import SEO from "../components/seo";
import Skills from "../components/skills";

// markup
const IndexPage = () => {
  return (
    <div>
      <SEO title="Andrey Mitko" />
      <main className="text-black100 font-lato mx-5 md:mx-16 lg:mx-32 xl:mx-44 2xl:mx-60">
        <Hero className="w-full h-screen flex flex-col justify-between" />
        <About />
        <Skills />
      </main>
    </div>
  );
};

export default IndexPage;
