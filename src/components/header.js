//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledH1 = styled.h1`

  margin: 0,
  text-align: center;
  font-family: Oranienbaum,serif;
  font-size: 3em;
  padding-top:.25em;

`

const StyledH2 = styled.h2`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1em;
  width: 100%;
  margin: 0;
  padding: 0.5em 1em 0 1em;

  ${props => {
    return `@media (max-width: ${props.theme.devices.tablet}px){
      flex-direction:column;
    }`
  }}
`
const TitleSpan = styled.span`
  flex: 0 0 auto;
  margin: 0 0.5em;
`

const Styleda = styled.a`
  text-decoration: none;
  color: inherit;
`

//!How do you create a calendar invite?
const Header = ({
  siteTitle,
  date,
  geoLocation,
  venue,
  venueLink,
  gmapsLink,
  hashtag,
}) => (
  <header style={{ textAlign: `center` }}>
    <StyledH2>
      <TitleSpan id="wedding_date">{date}</TitleSpan>
      <TitleSpan> • </TitleSpan>
      <TitleSpan id="wedding_location">
        <Styleda
          target="_blank"
          rel="noopener noreferrer"
          href={gmapsLink}
          alt="google maps location and navigation"
        >
          {geoLocation}
        </Styleda>
      </TitleSpan>
      <TitleSpan id="hashtag" style={{ flex: `1 0 auto`, textAlign: `right` }}>
        <Styleda
          target="_blank"
          rel="noopener noreferrer"
          href={""}
          alt="wedding hashtag"
        >
          {hashtag}
        </Styleda>
      </TitleSpan>
    </StyledH2>
    <StyledH1>Chloe & Hayden</StyledH1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  date: PropTypes.string,
  geoLocation: PropTypes.string,
  venue: PropTypes.string,
  venueLink: PropTypes.string,
  gmapsLink: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  date: ``,
  geoLocation: ``,
  venue: ``,
  venueLink: ``,
  gmapsLink: ``,
}

export default Header
