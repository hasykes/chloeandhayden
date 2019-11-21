import { Link } from "gatsby"

import React from "react"

const Nav = () => (
  <nav
    style={{
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-around`,
      maxWidth: 900,
      paddingTop: `0`,
      paddingBottom: `.5em`,
      width: `100%`,
      margin: `0 auto`,
    }}
  >
    <span style={{ flex: `1 0 auto`, textAlign: `center` }}>
      <Link style={{ textDecoration: `none`, color: `rgb(0,0,0)` }} to="/">
        Home
      </Link>
    </span>
    <span style={{ flex: `1 0 auto`, textAlign: `center` }}>
      <Link
        style={{ textDecoration: `none`, color: `rgb(0,0,0)` }}
        to="/our_story/"
      >
        Our Story
      </Link>
    </span>
    <span style={{ flex: `1 0 auto`, textAlign: `center` }}>
      <Link
        style={{ textDecoration: `none`, color: `rgb(0,0,0)` }}
        to="/guest_accomodations/"
      >
        Guest Accommodations
      </Link>
    </span>
    <span style={{ flex: `1 0 auto`, textAlign: `center` }}>
      <Link
        style={{ textDecoration: `none`, color: `rgb(0,0,0)` }}
        to="/our_story/"
      >
        Wedding Party
      </Link>
    </span>
    <span style={{ flex: `1 0 auto`, textAlign: `center` }}>
      <Link
        style={{ textDecoration: `none`, color: `rgb(0,0,0)` }}
        to="/photos/"
      >
        Photos
      </Link>
    </span>
    <span style={{ flex: `1 0 auto`, textAlign: `center` }}>
      <Link
        style={{ textDecoration: `none`, color: `rgb(0,0,0)` }}
        to="/registry/"
      >
        Registry
      </Link>
    </span>
  </nav>
)

export default Nav

/*

<div style={{ textAlign: `center` }}>
      <span style={{ padding: `0 1rem 0 0` }}>Home</span>
      <span style={{ padding: `0 1rem 0 0` }}>Our Story</span>
      <span style={{ padding: `0 1rem 0 0` }}>Guest Accommodations</span>
      <span style={{ padding: `0 1rem 0 0` }}>Wedding Party</span>
      <span style={{ padding: `0 1rem 0 0` }}>Photos</span>
      <span style={{ padding: `0 1rem 0 0` }}>Registry</span>
    </div>
*/
