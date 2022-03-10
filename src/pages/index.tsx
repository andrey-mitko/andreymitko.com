import * as React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import SEO from "../components/seo";
import Skills from "../components/skills";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// markup
const IndexPage = () => {
  return (
    <div className="text-black100 font-lato">
      <SEO title="Andrey Mitko" />
      <main className="mx-5 md:mx-16 lg:mx-32 xl:mx-44 2xl:mx-60">
        <Hero className="w-full h-screen flex flex-col justify-between" />
        <About />
        <Skills />
        <Blog />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default IndexPage;
