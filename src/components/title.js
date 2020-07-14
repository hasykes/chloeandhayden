//import { Link } from "gatsby"
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
  color:${props => {
    console.log(props)
    return props.subPage ? '#444':'#f1f5f6'

  }};
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
  color:${props => props.subPage ? '#444':'#f1f5f6'};
  font-weight:normal;

  /*Mobile Styles*/
  @media (max-width: ${theme.devices.tablet}px) {
    font-size:1em;
    color:#444;
    
  } 
  
`


const Title = (props) => {
  
return(
  <TitleContainer>
    <MainHeader subPage={props.subPage}>{props.title}</MainHeader>
    <SubHead>{props.subheadOne}</SubHead>
    <SubHead>{props.subheadTwo}</SubHead>
  </TitleContainer>  
)

}

export default Title
