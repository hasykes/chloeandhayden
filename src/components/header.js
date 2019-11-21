//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header style={{ textAlign: `center` }}>
    <h1
      style={{
        margin: 0,
        textAlign: `center`,
        fontFamily: `Oranienbaum,serif`,
        fontSize: `3em`,
        paddingTop: `.5em`,
      }}
    >
      Chloe & Hayden
    </h1>
    <h2
      style={{
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        fontSize: `1.2em`,
        paddingTop: `.5em`,
        paddingBottom: `0`,
      }}
    >
      <span style={{ flex: `0 0 auto`, margin: `0 .5em` }} id="wedding_date">
        October 18th, 2020
      </span>
      <span style={{ flex: `0 0 auto`, margin: `0 .5em` }}> • </span>
      <span
        style={{ flex: `0 0 auto`, margin: `0 .5em` }}
        id="wedding_location"
      >
        Fripp Island, SC
      </span>
    </h2>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
