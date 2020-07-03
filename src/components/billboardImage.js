import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import { theme } from "./theme"
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

const DesktopBillboard = styled(Img)`
  display: inline-block;
  width: 100%;
  @media (max-width: ${theme.devices.tablet}px) {
    display: none;
  }
`

const MobileBillboard = styled(Img)`
  display: none;
  width: 100%;
  @media (max-width: ${theme.devices.tablet}px) {
    display: inline-block;
  }
`

const BillboardImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "kissing_cutout.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileImage: file(relativePath: { eq: "kissing_cutout.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <DesktopBillboard
        fluid={data.placeholderImage.childImageSharp.fluid}
        alt="Chloe and Hayden shortly after the proposal"
      />
      <MobileBillboard
        fluid={data.mobileImage.childImageSharp.fluid}
        alt="Chloe and Hayden shortly after the proposal"
      />
    </>
  )
}

export default BillboardImage
