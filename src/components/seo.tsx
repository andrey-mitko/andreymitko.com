/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
// @ts-expect-error
import socialBanner from "../../static/og_image.png";

interface Props {
  description?: string;
  lang?: string;
  meta?: [];
  title: string;
  defaultImage?: string;
}

const SEO = ({ description, lang, meta, title, defaultImage }: Props) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaImage = defaultImage || socialBanner;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      // Previous  titleTemplate={`%s | ${site.siteMetadata.title}`}
      titleTemplate={`%s`}
      meta={[
        {
          name: "og:type",
          content: "website",
        },
        {
          name: `image`,
          property: "og:image",
          content: `https://www.andreymitko.com${metaImage}`,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta || [])}
    />
  );
};

export default SEO;
