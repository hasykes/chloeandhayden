import React from "react"
//import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutCard from "../components/aboutCard"

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 2em repeat(5, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  padding-top: 2em;
`

const GridHeader = styled.h3`
  text-align: center;
  text-decoration: underline;
  font-family: monteserrat;
`
const WeddingParty = () => (
  <Layout>
    <SEO title="Our Story" />

    <GridWrapper className="gridWrapper">
      <GridHeader>Bridesmaids</GridHeader>
      <GridHeader>Groomsmen</GridHeader>
      <AboutCard
        name="Person"
        altDescription="I'm part of the wedding party!"
        about="Hahaha we have so much fun omg"
        src="https://icon-library.net/images/default-profile-icon/default-profile-icon-24.jpg"
        role="maidOfHonor"
      />
      <AboutCard
        name="Person"
        altDescription="I'm part of the wedding party!"
        about="Hahaha we have so much fun omg"
        src="https://icon-library.net/images/default-profile-icon/default-profile-icon-24.jpg"
        role="bestMan"
      />
      <AboutCard
        name="Person"
        altDescription="I'm part of the wedding party!"
        about="Hahaha we have so much fun omg"
        src="https://icon-library.net/images/default-profile-icon/default-profile-icon-24.jpg"
        role="bridesmaid"
      />
      <AboutCard
        name="Person"
        altDescription="I'm part of the wedding party!"
        about="Hahaha we have so much fun omg"
        src="https://icon-library.net/images/default-profile-icon/default-profile-icon-24.jpg"
        role="groomsman"
      />
      <AboutCard
        name="Person"
        altDescription="I'm part of the wedding party!"
        about="Hahaha we have so much fun omg"
        src="https://icon-library.net/images/default-profile-icon/default-profile-icon-24.jpg"
        role="bridesmaid"
      />
      <AboutCard
        name="Person"
        altDescription="I'm part of the wedding party!"
        about="Hahaha we have so much fun omg"
        src="https://icon-library.net/images/default-profile-icon/default-profile-icon-24.jpg"
        role="groomsman"
      />
      <AboutCard
        name="Person"
        altDescription="I'm part of the wedding party!"
        about="Hahaha we have so much fun omg"
        src="https://icon-library.net/images/default-profile-icon/default-profile-icon-24.jpg"
        role="bridesmaid"
      />
      <AboutCard
        name="Person"
        altDescription="I'm part of the wedding party!"
        about="Hahaha we have so much fun omg"
        src="https://icon-library.net/images/default-profile-icon/default-profile-icon-24.jpg"
        role="groomsman"
      />
      <AboutCard
        name="Person"
        altDescription="I'm part of the wedding party!"
        about="Hahaha we have so much fun omg"
        src="https://icon-library.net/images/default-profile-icon/default-profile-icon-24.jpg"
        role="bridesmaid"
      />
      <AboutCard
        name="Person"
        altDescription="I'm part of the wedding party!"
        about="Hahaha we have so much fun omg"
        src="https://icon-library.net/images/default-profile-icon/default-profile-icon-24.jpg"
        role="groomsman"
      />
    </GridWrapper>
  </Layout>
)

export default WeddingParty
