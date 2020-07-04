import React from "react"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import BillboardImage from "../components/billboardImage"
import ModerFlair from "../components/modernFlair"
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
        <SEO title="Home" />
        <ContentWrapper >
          <ModerFlair flair="right" />
          <ModerFlair flair="left" />
          <Title />
          <BillboardImage/>
        </ContentWrapper>
      </Layout>
    )
  }
}

export default IndexPage
