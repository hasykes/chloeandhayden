import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery"
import { graphql, StaticQuery } from "gatsby"

import styled from "styled-components"
import {theme} from "../components/theme"

const ContentWrapper = styled.div`
  
  position:relative;
  width:80vw;
  margin:0 auto;
  background-color: ${theme.primarybackground};
  color:${theme.primaryText};

  max-width:1500px;

  overflow:hidden;

  /*Mobile Styles*/
  @media (max-width: ${theme.devices.tablet}px),(orientation: portrait)  {
      width:95vw;
    }
`


const HomeButton = styled.a`
  flex:0 0 auto;
  display:inline-block;
  
  min-width:100px;
  min-height:50px;
  background-color:${theme.primaryAccent};
  border:none;
  color:${theme.primaryBackground};
  font-weight:bold;
  text-decoration:none;
  text-align:center;
  line-height:50px;
  border-radius: 10px;

  box-shadow:1px 2px ${theme.primaryText};

  &:hover {
      background-color:${theme.secondaryAccent};
      box-shadow:0px 0px;
      cursor:pointer;
  }
`

const FlexP = styled.p`
    display:flex;
    align-items:center;
    justify-content:center;
`


const Header = styled.h1`

  width:100%; 
  text-align:center;
  margin-top:.2em;

  font-size:4em;
  font-variant:small-caps;

  /*Mobile Styles*/
  @media (max-width: ${theme.devices.tablet}px),(orientation: portrait)  {
      margin-top:.1em;
    }

  @media (max-width: ${theme.devices.mobileL}px){
    font-size:2.5em;
}
  
`
const CenterP = styled.p`
  text-align:center;
  color:${theme.primaryText};
`

const EmailLink = styled.a`
  color:${theme.primaryText};
  text-decoration:underline;
  &:hover {
    cursor:pointer;
}
`

const Photos = () => (
  <Layout>
    <SEO title="Photos" />
    <ContentWrapper>  
      <Header>Photo Gallery</Header>
      <CenterP>These are some of our favorite photos! If you have any you'd like to add, <EmailLink href='mailto:haydensykes13+wedding@gmail.com?subject=Favorite Pics of Hayden and Chloe'>send us an email.</EmailLink></CenterP>
      <FlexP>
      <HomeButton>Home</HomeButton>  
    </FlexP>
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
    <FlexP>
      <HomeButton>Home</HomeButton>  
    </FlexP>
    </ContentWrapper>
  </Layout>
)

export default Photos