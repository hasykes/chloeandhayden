/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"

import { theme } from "./theme"
import "./layout.css"

const ContentWrapper = styled.div`
`

const Layout = ({ children, breakpoint }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
          weddingInfo {
            date
            geoLocation
            venue
            venueLink
            gmapsLink
            hashtag
          }
        }
      }
    }
  `)

  const metaData = data.site.siteMetadata

  return (
    <ThemeProvider theme={theme}>
      <>
        <ContentWrapper>
          <main>{children}</main>
        </ContentWrapper>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
