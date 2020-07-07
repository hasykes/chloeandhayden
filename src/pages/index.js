import React from "react"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import BillboardImage from "../components/billboardImage"
import ModernFlair from "../components/modernFlair"
import Title from "../components/Title"
import SEO from "../components/seo"
import styled from "styled-components"
import { theme } from "../components/theme"

const ContentWrapper = styled.div`
  position:relative;
  width:100vw;
  height:100vh;
  max-width:1680px;
  max-height:1050px;
  overflow:hidden;

  /*Mobile Styles*/
  @media (max-width: ${theme.devices.tablet}px) {
      max-width:9999px;
      max-height:9999px;

      width:100vw;
      height:100vh;
    }
`

class IndexPage extends React.Component {
  constructor() {
    super()
    this.state = {
      breakpoint: "laptop",
    }
  }

  handleWindowResize = () => {
    switch (window.innerWidth) {
      case window.innerWidth <= theme.devices.tablet:
        this.setState = { breakpoint: "tablet" }
        break
      default:
        this.setState = { breakpoint: "laptop" }
    }
  }

  //Add event listener
  componentDidMount = () => {
    this.handleWindowResize()
    window.addEventListener("resize", this.handleWindowResize.bind(this))
  }

  //Remove event listener
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.handleWindowResize.bind(this))
  }

  render() {
    return (
      <Layout breakpoint={this.state.breakpoint}>
        <ContentWrapper id="home" >
          <ModernFlair flair="peach" />
          <ModernFlair flair="blue" />
          <ModernFlair flair="bottomArrow" />
          <ModernFlair flair="middleArrow" />
          <ModernFlair flair="topArrow" />
          <Title />
          <BillboardImage/>
        </ContentWrapper>

      </Layout>
    )
  }
}

export default IndexPage

//Stuff for later
/*
        <ContentWrapper id="about">
          Here's some important stuff about the wedding
        </ContentWrapper>
        <ContentWrapper id="rsvp">
          RSVP Please
        </ContentWrapper>
        <ContentWrapper id="weddingParty">
          Look at these cool people
        </ContentWrapper>
*/