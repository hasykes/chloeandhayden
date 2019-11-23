import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery"
import { graphql, StaticQuery } from "gatsby"

const Photos = () => (
  <Layout>
    <SEO title="Our Story" />
    <StaticQuery
      query={graphql`
        {
          allImagesYaml {
            edges {
              node {
                title
                author
                image {
                  id
                  childImageSharp {
                    fluid(maxWidth: 2400) {
                      aspectRatio
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Gallery
          itemsPerRow={3} // number of images per row
          images={data.allImagesYaml.edges.map(({ node }) => ({
            ...node.image.childImageSharp.fluid,
            caption: `${node.title} – ${node.author}`,
          }))}
        />
      )}
    />
  </Layout>
)

export default Photos
