import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutCard from "../components/aboutCard"

//TODO get rid of target=_blank from anchors
const Accommodations = () => (
  <Layout>
    <SEO title="Guest Accomodations" />
    <div>
      <h3>Guest Accommodations</h3>
      <p>
        Shuttles will be provided between the venue and Fripp Island. We
        recommend renting a place to stay on the island! You can do so using{" "}
        <a href="https://frippislandstay.com" target="_blank">
          Fripp Island Stay
        </a>{" "}
      </p>
    </div>
  </Layout>
)

export default Accommodations
