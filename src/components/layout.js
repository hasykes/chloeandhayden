/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { ThemeProvider } from "styled-components"


import { theme } from "./theme"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <ThemeProvider theme={theme}>
      <>
          <main>{children}</main> 
      </>
    </ThemeProvider>
  )
}

export default Layout