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
  position:relative;
  width:100vw;
  height:100vh;
  overflow:hidden;
`

const ModernBoxRight = styled.div`
/* Polygon 1 */


position: absolute;
width: 100%;
height: 100%;
clip-path:polygon(100% 0%, 100% 100%, 30% 100%);
background: #FAD3BF;
`

const ModernBoxLeft = styled.div`
/* Polygon 1 */


position: absolute;
width: 100%;
height: 100%;
clip-path:polygon(0% 55%, 0% 100%, 30% 100%);
background: #84A4B2;
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
        <ModernBoxRight />
        <ModernBoxLeft />
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
