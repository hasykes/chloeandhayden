import React from 'react'
import Layout from '../components/layout'
//import SEO from '../components/seo'
//import styled from 'styled-components'
//import { theme } from '../components/theme'
import Landing from "../components/landing"

class IndexPage extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <Layout>
        <Landing />
      </Layout>
    )
  }
}

export default IndexPage
