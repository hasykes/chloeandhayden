//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { theme } from "./theme"
const TitleContainer = styled.div`
 position:absolute;
 width:50%;
 margin:1em;

  /*Mobile Styles*/
  @media (max-width: ${theme.devices.tablet}px) {
    width:100%
  } 
`

const MainHeader = styled.h1`
  font-size:5em;

  /*Mobile Styles*/
  @media (max-width: ${theme.devices.tablet}px) {
    font-size: 2.6em;
  } 
`
const SubHead = styled.h2`
  font-size:2em;

  /*Mobile Styles*/
  @media (max-width: ${theme.devices.tablet}px) {
    font-size:1.3em;
  } 
  
`

const Title = () => (
  <TitleContainer>
  <MainHeader>
    Chloe And Hayden 
  </MainHeader>
  <SubHead>March 27th, 2020</SubHead>
  <SubHead>The Factory - Atlanta</SubHead>
  </TitleContainer>  
)

export default Title
