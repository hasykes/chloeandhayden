import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import {theme} from "../components/theme"

const Header = styled.h1`

  width:100%; 
  text-align:center;
  margin-top:1em;

  font-size:3em;
  font-variant:small-caps;
  color:${theme.primaryText};

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

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Header>Whoops, you found a page that doesn't exist...</Header>
    <CenterP>Let's get you back <a href="/">Home</a></CenterP>  
  </Layout>
)

export default NotFoundPage
