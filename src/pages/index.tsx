import * as React from "react";
import SEO from "../components/seo";

// markup
const IndexPage = () => {
  return (
    <div>
      <SEO title="Andrey Mitko" />
      <main>
        <h1 className="text-red-500 text-3xl font-bold underline">
          Hello World!
        </h1>
      </main>
    </div>
  );
};

export default IndexPage;
