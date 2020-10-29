//import { Link } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"
import React from "react"

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-top: 1em;
`

const PersonImage = styled.img`
  max-height: 250px;
  max-width: 250px;
  padding-left: 1em;
  border-radius: 50%;
`
const AboutCard = ({ name, altDescription, about, src, role }) => (
  <CardWrapper>
    <span>
      <PersonImage src={src} alt={altDescription} />
    </span>
    <span style={{}}>
      <h2 style={{ padding: `.25em 0 0 .25em` }}>{name}</h2>
      <p style={{ paddingLeft: `.5em` }}>{about}</p>
    </span>
  </CardWrapper>
)

AboutCard.propTypes = {
  name: PropTypes.string,
  altDescription: PropTypes.string,
  about: PropTypes.string,
}

AboutCard.defaultProps = {
  name: ``,
  altDescription: ``,
  about: `Lorem Ipsum Dolar `,
}

export default AboutCard
