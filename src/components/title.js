//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { theme } from "./theme"
const TitleContainer = styled.div`
 position:absolute;
 width:60%;
 margin:1em;

  /*Mobile Styles*/
  @media (max-width: ${theme.devices.tablet}px) {
    width:100%
  } 
`

const MainHeader = styled.h1`
  font-size:4em;
  font-family:"Montserrat" !important;
  color:#f1f5f6;
  font-weight:normal;

  /*Mobile Styles*/
  @media (max-width: ${theme.devices.tablet}px) {
    font-size: 2em;
    color:#444;
  
  } 
`
const SubHead = styled.h2`
  font-size:2em;
  font-family:"Montserrat" !important;
  color:#f1f5f6;
  font-weight:normal;

  /*Mobile Styles*/
  @media (max-width: ${theme.devices.tablet}px) {
    font-size:1em;
    color:#444;
    
  } 
  
`

const Title = () => (
  <TitleContainer>
  <MainHeader>
    Chloe And Hayden 
  </MainHeader>
  <SubHead>March 27, 2020</SubHead>
  <SubHead>The Factory - Atlanta</SubHead>
  </TitleContainer>  
)

export default Title
