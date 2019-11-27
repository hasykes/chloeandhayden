//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledH1 = styled.h1`

  margin: 0,
  text-align: center;
  font-family: Oranienbaum,serif;
  font-size: 3em;
  padding-top: .5em;

`

const StyledH2 = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  padding-top: 0.5em;
  padding-bottom: 0;

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

const Header = ({ siteTitle }) => (
  <header style={{ textAlign: `center` }}>
    <StyledH1>Chloe & Hayden</StyledH1>
    <StyledH2>
      <TitleSpan id="wedding_date">October 18th, 2020</TitleSpan>
      <TitleSpan> • </TitleSpan>
      <TitleSpan id="wedding_location">Fripp Island, SC</TitleSpan>
    </StyledH2>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
