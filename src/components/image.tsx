import React from "react";
import { GatsbyImage } from "gatsby-plugin-image"
import { GatsbyImageProps } from 'gatsby-plugin-image/dist/src/components/gatsby-image.browser';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

interface Props extends GatsbyImageProps {
  src: any
}

const Image = ({ src, ...props }: Props) => {
  return <GatsbyImage {...props} image={src.childImageSharp.gatsbyImageData}/>
};

export default Image;
