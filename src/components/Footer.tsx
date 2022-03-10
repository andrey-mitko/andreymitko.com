import React from "react";

interface Props {}

const Footer = (props: Props) => {
  return (
    <>
      <div className="h-0.5 w-full bg-borderLines"></div>
      <div className="text-center mx-auto font-normal flex justify-center items-center h-full">
        <span className="leading-loose block py-11 text-black50 ">
          Copyright © 2022, Andrey Mitko.
          <br className="md:hidden" /> All rights reserved.
        </span>
      </div>
    </>
  );
};

export default Footer;
