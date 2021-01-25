//import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { theme } from "./theme"

import BrushStrokeSrc from "../images/brushStroke.png"
import { siteMetadata } from "../../gatsby-config"

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
  @media (max-width: ${theme.devices.tablet}px) {
      width:75w;
      height:100%;
    }

    
@media (max-width: ${theme.devices.mobileL}px) {
    width:100vw;
    height:100%;
    }

`

const GridWrap = styled.div`
  display:grid;
  grid-template-columns:repeat(2,1fr);
  grid-template-rows:repeat(2,1fr);
  height:100%;
  width:100%;


    @media (max-width: ${theme.devices.tablet}px){
        display:inline-block;
    }
`

const Box = styled.div`
    position:relative;
    background-color:${props => props.color === 'light' ? 'transparent':theme.secondaryBackground};
    order:${props => props.order};
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;

    overflow:hidden;

    @media (max-width: ${theme.devices.tablet}px){
        height:250px;
        background-color:${props => props.mobileColor === 'light' ? 'transparent':theme.secondaryBackground};
    }
`

const InnerBox = styled.div`
    height:${props => props.height};
    display:flex;

    position:relative;
    background-color:transparent;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;

    overflow:hidden;

    
    @media (max-width: ${theme.devices.tablet}px){
        height:${props => props.mobileHeight};
    }

`

const BigWords = styled.div`
    color:${theme.primaryText};
    font-size:3em;
    text-transform:uppercase;
    font-weight:bold;

    text-align:center;
    flex:0 0 100%;

    z-index:999;

    @media (max-width: ${theme.devices.tablet}px){
        font-size:${props => props.smallMobile ? '2.3em':'3em'}
    }
  
`
const VenueLink = styled.a`
  color:${theme.primaryText};
  text-decoration:underline;
  &:hover {
    cursor:pointer;
}
`

const RegistryButton = styled.a`
  width:100px;
  height:50px;
  background-color:${theme.primaryAccent};
  border:none;
  color:${theme.primaryBackground};
  font-weight:bold;
  text-decoration:none;
  text-align:center;
  line-height:50px;
  border-radius: 10px;

  font-variant:small-caps;
  box-shadow:1px 2px ${theme.primaryText};

  &:hover {
      background-color:${theme.secondaryAccent};
      box-shadow:0px 0px;
  }
`
const VertDivider = styled.div`
  height:5em;
  width:3px;
  background-color:${theme.secondaryAccent};
  margin:0 1em;
`

const NormalWords = styled.p`
    color:${theme.primaryText};
    font-size:1em;
    font-variant:small-caps;
    width:100%;
    text-align:center;
    padding:0;
    margin:0;
    flex:0 0 auto;
`

const PopTime = styled.span`
    font-size:2.5em;
    color:${theme.primaryAccent};
    font-weight:bold;
`

const PopTime2 = styled.span`
    font-size:1.5em;
    color:${theme.primaryAccent};
    font-weight:bold;
`
const BrushStroke = styled.img`
    width:20em;
    position:absolute;
    top:38%;
    transform:rotate(12deg);
    
    /*Mobile Styles*/

    @media (max-width: ${theme.devices.tablet}px){
       top:33%;
    }
    


`


const Info = (props) => {
return(
    <FlexContainer id='info'>
        <ContentWrapper>   
            <GridWrap>
                <Box order={1} color='dark' mobileColor="dark">
                        <BigWords>Details</BigWords>
                        <BrushStroke src={BrushStrokeSrc} />
                </Box>
                <Box order={2} color='light' mobileColor="light">
                    <InnerBox height='70%' mobileHeight='90%'>
                    <NormalWords><VenueLink target="_blank" rel="noopener noreferrer" href={siteMetadata.weddingInfo.gmapsLink}>The Factory<br/>5616 New Peachtree Rd, Chamblee, GA 30341</VenueLink></NormalWords>
                    
                    <NormalWords> <PopTime>6</PopTime><PopTime2>pm</PopTime2> Ceremony</NormalWords>
                    <NormalWords><PopTime>6:30</PopTime><PopTime2>pm</PopTime2> Cocktails</NormalWords>
                    <NormalWords><PopTime>7</PopTime><PopTime2>pm</PopTime2> Dinner & Dancing</NormalWords>
                    </InnerBox>
                </Box>
                <Box order={3} color='light' mobileColor="dark">
                    <InnerBox height='60%' mobileHeight='90%'>
                    <NormalWords>let us know if you're coming to celebrate the union of</NormalWords>
                    <BigWords smallMobile={true}>Chloe & Hayden</BigWords>
                    
                    <RegistryButton href="/rsvp">RSVP</RegistryButton>
                    </InnerBox>
                </Box>
                <Box order={4} color='dark' mobileColor="light">
                    <InnerBox height="45%" mobileHeight='70%'>    
                        <BigWords>Gift Registry</BigWords>
                        <RegistryButton href="https://www.amazon.com/wedding/hayden-sykes-chloe-martin-atlanta-march-2021/registry/1DYIUJJSIZ90K">Amazon</RegistryButton>
                        <VertDivider/>
                        <RegistryButton href="https://www.zola.com/registry/haydenandchloe">Zola</RegistryButton>
                    </InnerBox>
                </Box>
            </GridWrap>  
        </ContentWrapper>
    </FlexContainer>
)

}

export default Info
