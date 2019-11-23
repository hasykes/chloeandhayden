/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import Nav from "./nav"
import "./layout.css"

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 80%;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const Footer = styled.footer`
  font-size: 0.8em;
  text-align: center;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Nav menuLinks={data.site.siteMetadata.menuLinks} />
      <ContentWrapper>
        <main>{children}</main>
        <Footer>
          ©{new Date().getFullYear()} Hayden Sykes, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </ContentWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
