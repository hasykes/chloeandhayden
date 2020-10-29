import React from 'react'
//import Layout from '../components/layout'
//import SEO from '../components/seo'
import styled from 'styled-components'
import { theme } from '../components/theme'
import discoGIF from "../images/Discoball_.gif"


const FlexContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  align-content:center;

  min-height:100vh;
`
const ContentWrapper = styled.div`
  position:relative;
  width:80vw;
  height:90vh;
  background-color: ${theme.primarybackground};
  color:${theme.primaryText};
  flex:0 1 auto;

  max-width:1500px;

  overflow:hidden;

  /*Mobile Styles*/
  @media (max-width: ${theme.devices.tablet}px),(orientation: portrait)  {
      width:100vw;
    }
`

const Header = styled.h1`

  width:100%; 
  text-align:center;
  margin-top:.2em;

  font-size:4em;
  font-variant:small-caps;

  /*Mobile Styles*/
  @media (max-width: ${theme.devices.tablet}px),(orientation: portrait)  {
      margin-top:.1em;
    }

  @media (max-width: ${theme.devices.mobileL}px){
    font-size:2.5em;
}
  
`
const Date = styled.div`
 
position:fixed;
    top:50%;
    left:0%;

  transform:rotate(-90deg);
  color:${theme.primaryText};

  font-size:1.5em;
  font-variant:small-caps;

  margin:0;
  z-index:999;

  /*Mobile Styles*/
  @media (max-width: ${theme.devices.tablet}px),(orientation: portrait)  {
    position:relative;
    transform:rotate(0deg);
    top:0;
    left:0;

    width:100%;
    text-align:center;
    margin-bottom:.75em;
    margin-top:.5em;
    font-size:2.5em;
}

@media (max-width: ${theme.devices.mobileL}px){
    font-size:2em;
}
  
`
const Hashtag = styled.div`


position:fixed;
  top:50%;
  right:-3%;


transform:rotate(90deg);
color:${theme.primaryText};

font-size:1.5em;
font-variant:small-caps;

margin:0;

z-index:999;

/*Mobile Styles*/
@media (max-width: ${theme.devices.tablet}px),(orientation: portrait)  {
  position:relative;
  transform:rotate(0deg);
  top:0;
  right:0;

  width:100%;
  text-align:center;
  font-size:1.5em;
}

@media (max-width: ${theme.devices.mobileL}px){
    font-size:1.25em;
}
`

const DiscoBall = styled.img`

  position:absolute;
  top:55%;
  left:50%;
  transform: translate(-50%, -50%);
  margin:0;

  width:65%;

  /*Mobile Styles*/
@media (max-width: ${theme.devices.tablet}px),(orientation: portrait)  {
     top:50%;
     width:100%;
}

@media (max-width: ${theme.devices.mobileL}px){
    top:45%;
    width:100%;
}

`

const RsvpButton = styled.a`
  position:absolute;
  bottom:-20px;
  left:50%;
  transform: translate(-50%, -50%);
  width:100px;
  height:50px;
  background-color:${theme.primaryAccent};
  border:none;

  color:${theme.primaryBackground};
  font-weight:bold;

  text-align:center;
  text-decoration:none;
  line-height:50px;

  border-radius: 10px;

  /*Mobile Styles*/
  @media (max-width: ${theme.devices.tablet}px),(orientation: portrait)  {
    width:150px;
    height:100px;
    font-size:1.5em;
    line-height:100px;
    bottom:30px;
  }

  @media (max-width: ${theme.devices.mobileL}px){
    width:100%;
    width:125px;
    height:75px;
    font-size:1.5em;
    line-height:75px;

    bottom:75px;
}


`

const Landing = () => {
    return(
        <>
            
            <FlexContainer>
                <ContentWrapper id='home' >
                    <Header>Chloe & Hayden</Header>
                    <Date>March 27, 2021</Date>    
                    <Hashtag>#PsychedToBeSykes</Hashtag>        
                    <DiscoBall src={discoGIF} alt="groovy disco ball" />
                    <RsvpButton href="/rsvp">RSVP</RsvpButton>
                </ContentWrapper>
            </FlexContainer>
            
        </>
    )
}

export default Landing;
