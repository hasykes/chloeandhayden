//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const AboutCard = ({ name, altDescription, about, src }) => (
  <div
    style={{
      width: `100%`,
      display: `flex`,
      paddingTop: `1em`,
    }}
    class="about_wrapper"
  >
    <span>
      <img
        style={{ height: `250px`, paddingLeft: `1em`, borderRadius: `50%` }}
        src={src}
        alt={altDescription}
      />
    </span>
    <span style={{}}>
      <h2 style={{ padding: `.25em 0 0 .25em` }}>{name}</h2>
      <p style={{ paddingLeft: `.5em` }}>{about}</p>
    </span>
  </div>
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
