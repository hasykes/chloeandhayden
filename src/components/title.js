//import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import { theme } from "./theme"

const TitleContainer = styled.div`
position:${props => {
  return props.subPage !== '' ? 'relative':'absolute'
}};
 width:60%;
 margin:${props => {
  return props.subPage !== '' ? '1em':'0 auto'
}};
text-align:left;
 
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
    color:#f1f5f6;
  
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
    color:#f1f5f6;
    
  } 
  
`


const Title = (props) => {
return(
  <TitleContainer>
    <MainHeader subPage={props.subPage}>{props.title && props.title !== '' ? props.title.split(' ').map(word => <p>{word}</p>) : '' }</MainHeader>
    <SubHead>{props.subheadOne}</SubHead>
    <SubHead>{props.subheadTwo}</SubHead>
  </TitleContainer>  
)

}

export default Title
