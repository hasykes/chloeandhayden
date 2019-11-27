import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

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

  ${props => {
    return `@media (max-width: ${props.theme.devices.tablet}px){
      grid-template-columns: repeat(1, 1fr);
    }`
  }}
`

const GridHeader = styled.h3`
  text-align: center;
  text-decoration: underline;
  font-family: monteserrat;

  ${props => {
    return `@media (max-width: ${props.theme.devices.tablet}px){
      order:${props.order}
    }`
  }}
`
const WeddingParty = () => {
  const data = useStaticQuery(graphql`
    query WeddingPartyQuery {
      site {
        siteMetadata {
          weddingParty {
            name
            photo
            role
            description
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Our Story" />

      <GridWrapper className="gridWrapper">
        <GridHeader>Bridesmaids</GridHeader>
        <GridHeader order={data.site.siteMetadata.weddingParty.length / 2}>
          Groomsmen
        </GridHeader>
        {data.site.siteMetadata.weddingParty.map((person, i) => {
          return (
            <AboutCard
              key={i}
              name={person.name}
              altDescription={`${person.name} - ${person.role}`}
              about={person.description}
              src={person.photo}
              role={person.role}
            />
          )
        })}
      </GridWrapper>
    </Layout>
  )
}

export default WeddingParty
