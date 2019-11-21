import React from "react"

import Layout from "../components/layout"
import BillboardImage from "../components/billboardImage"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      style={{
        maxWidth: `100%`,
        marginBottom: `1.45rem`,
        position: `relative`,
      }}
    >
      <span
        style={{
          width: `100%`,
          position: `absolute`,
          top: `10%`,
          textAlign: `center`,
          zIndex: `99`,
        }}
      >
        <button
          type="button"
          style={{
            padding: `1em 1.5em`,
            backgroundColor: `transparent`,
            borderRadius: `10px`,
            color: `whitesmoke`,
            borderColor: `whitesmoke`,
            fontWeight: `bold`,
          }}
        >
          RSVP
        </button>
      </span>
      <BillboardImage style={{ margin: `0 auto` }} />
    </div>
  </Layout>
)

export default IndexPage
