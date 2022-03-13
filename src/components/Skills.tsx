import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import SkillsGrid from "./SkillsGrid";
type Props = {
  className?: string;
};

const mobileSkills = [
  "Swift",
  "UIKit",
  "Firebase",
  "CocoaPods",
  "VIPER",
  "MVVM",
  "XCode",
];

const webSkills = [
  "TypeScript",
  "React.js",
  "Vue.js",
  "Next.js",
  "Nuxt.js",
  "Gatsby",
  "Node.js",
  "Express.js",
  "TailwindCSS",
  "npm",
  "CSS",
  "HTML",
];

const additionalSkills = [
  "Python",
  "Git",
  "MongoDB",
  "Figma",
  "Sketch",
  "Webflow",
  "Marketing",
  "Business Administration",
];

const Skills = (props: Props) => {
  return (
    <ScrollAnimation animateIn="animate__fadeIn" animateOut="animate__fadeOut">
      <div id="skills" className={props.className}>
        <h2 className="mt-11 lg:mt-32 font-spaceMono font-bold text-3xl lg:text-5xl">
          Skills &#38; CV
        </h2>
        <h3 className="mt-7 lg:mt-10  font-medium text-lg lg:text-2xl">
          Mobile Development:
        </h3>
        <SkillsGrid
          className="mt-1"
          skills={mobileSkills}
          color="bg-pastelGray"
        ></SkillsGrid>
        <h3 className="mt-7 lg:mt-10  font-medium text-lg lg:text-2xl">
          Web Development:
        </h3>
        <SkillsGrid
          className="mt-1"
          skills={webSkills}
          color="bg-pastelPink"
        ></SkillsGrid>
        <h3 className="mt-7 lg:mt-10  font-medium text-lg lg:text-2xl">
          Additional Skills:
        </h3>
        <SkillsGrid
          className="mt-1"
          skills={additionalSkills}
          color="bg-pastelPurple"
        ></SkillsGrid>

        <h4 className="mt-8 lg:mt-11 font-medium text-lg lg:text-2xl leading-loose lg:leading-loose">
          Checkout my CV to see relevant work experience &#38; education
        </h4>
        <a
          className="block select-none mt-4 py-4 lg:py-3.5 bg-black100 w-full lg:max-w-xs text-white rounded-full text-center lg:text-xl"
          href={`/resume.pdf`}
          rel="noreferrer"
          target="_blank"
        >
          Open Resume
        </a>
        <div className="h-0.5 mt-11 lg:mt-32 w-full bg-borderLines"></div>
      </div>
    </ScrollAnimation>
  );
};

export default Skills;
