import React from "react"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import BillboardImage from "../components/billboardImage"
import SEO from "../components/seo"
import styled from "styled-components"
import { theme } from "../components/theme"

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
        <div
          style={{
            maxWidth: `100%`,
            marginBottom: `1.45rem`,
            position: `relative`,
          }}
        >
          <BillboardImage style={{ margin: `0 auto` }} />
        </div>
      </Layout>
    )
  }
}

export default IndexPage
