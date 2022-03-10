import React from "react";

type Props = {
  className?: string;
  skills: string[];
  color: string;
};

const SkillsGrid = (props: Props) => {
  return (
    <div
      className={`flex flex-row flex-wrap  align-top space-y-3 items-end ${props.className}`}
    >
      {props.skills.map((skill) => {
        return (
          <span
            className={`block ${props.color} flex-initial rounded-full py-1 px-3 text-lg font-medium mr-3 w-max h-full `}
          >
            {skill}
          </span>
        );
      })}
    </div>
  );
};

export default SkillsGrid;
