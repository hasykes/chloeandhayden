import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutCard from "../components/aboutCard"

const SpotifyWrapper = styled.div`
  width: 300px;
  margin: 0 auto;
  text-align: center;
`

const SpotifyPlayer = styled.iframe`
  padding: 0;
  margin: 0;
`

const YoutubeLink = styled.a`
  font-size: 0.75em;
`
const OurStory = () => (
  <Layout>
    <SEO title="Our Story" />
    <AboutCard
      name="Hayden Andrew Sykes"
      altDescription="Handsomest man in all the land"
      about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      src="https://scontent-atl3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/72277641_1849729698506403_8333741512410782194_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=103&oh=c8cb104e67c6ec52a77b5fe7de3bb8b9&oe=5E4B3B6B"
    />
    <AboutCard
      name="Chloe Montana Martin"
      altDescription="QT3.14 extrodinnaire"
      about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      src="https://scontent-atl3-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/69878654_546039236140580_6409408774553611869_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=108&oh=9664c3e8a99d4d7c3068956c9c4a1fa9&oe=5E5904A4"
    />
    <SpotifyWrapper>
      <SpotifyPlayer
        src="https://open.spotify.com/embed/track/74SFqzOS8Z0rbbG2llSVaQ"
        width="300"
        height="80"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
      <YoutubeLink
        href="https://www.youtube.com/watch?v=WgEf4mhqezI"
        target="_blank"
        rel="noopener noreferer"
      >
        Don't have Spotify? Here's a Youtube link!
      </YoutubeLink>
    </SpotifyWrapper>
  </Layout>
)

export default OurStory
