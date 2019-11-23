import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutCard from "../components/aboutCard"

const SpotifyWrapper = styled.div``
const OurStory = () => (
  <Layout>
    <SEO title="Our Story" />
    <AboutCard
      name="Hayden Andrew Sykes"
      altDescription="Handsomest man in all the land"
      about="This hunk of a man loves his bb girl."
      src="https://scontent-atl3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/72277641_1849729698506403_8333741512410782194_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=103&oh=c8cb104e67c6ec52a77b5fe7de3bb8b9&oe=5E4B3B6B"
    />
    <AboutCard
      name="Chloe Montana Martin"
      altDescription="QT3.14 extrodinnaire"
      about="This cutie patootie has the finest booty you ever seen"
      src="https://scontent-atl3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/69878654_546039236140580_6409408774553611869_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=108&oh=9664c3e8a99d4d7c3068956c9c4a1fa9&oe=5E5904A4"
    />
    <SpotifyWrapper>
      <iframe
        src="https://open.spotify.com/embed/track/74SFqzOS8Z0rbbG2llSVaQ"
        width="300"
        height="80"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
      <a href="" target="_blank" rel="noopener noreferer"></a>
    </SpotifyWrapper>
  </Layout>
)

export default OurStory
