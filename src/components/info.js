//import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { theme } from "./theme"

import BrushStrokeSrc from "../images/brushStroke.png"

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
    <FlexContainer>
        <ContentWrapper>   
            <GridWrap>
                <Box order={1} color='dark' mobileColor="dark">
                    <BigWords>Details</BigWords>
                    <BrushStroke src={BrushStrokeSrc} />
                </Box>
                <Box order={2} color='light' mobileColor="light">
                    <NormalWords>The Factory<br/>5616 New Peachtree Rd, Chamblee, GA 30341</NormalWords>
                    
                    <NormalWords> <PopTime>5</PopTime><PopTime2>pm</PopTime2> Ceremoney</NormalWords>
                    <NormalWords><PopTime>5:30</PopTime><PopTime2>pm</PopTime2> Cocktails</NormalWords>
                    <NormalWords><PopTime>6</PopTime><PopTime2>pm</PopTime2> Reception</NormalWords>
                </Box>
                <Box order={3} color='light' mobileColor="dark">
                    <NormalWords>let us know if you're coming to celebrate the union of</NormalWords>
                    <BigWords smallMobile={true}>Chloe & Hayden</BigWords>
                    
                    <RegistryButton href="/rsvp">RSVP</RegistryButton>
                </Box>
                <Box order={4} color='dark' mobileColor="light">
                    <BigWords>Gift Registry</BigWords>
                    <RegistryButton href="https://www.amazon.com/wedding/organize-registry?ref_=wedding_home_hero&openid.assoc_handle=amzn_weddingregistry_desktop_us&openid.claimed_id=https%3A%2F%2Fwww.amazon.com%2Fap%2Fid%2Famzn1.account.AECO7TCIGXOIKTPJBAOVHHLWSBXQ&openid.identity=https%3A%2F%2Fwww.amazon.com%2Fap%2Fid%2Famzn1.account.AECO7TCIGXOIKTPJBAOVHHLWSBXQ&openid.mode=id_res&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.op_endpoint=https%3A%2F%2Fwww.amazon.com%2Fap%2Fsignin&openid.response_nonce=2020-10-25T15%3A33%3A20Z-73987912128184165&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fwedding%2Forganize-registry%3Fref_%3Dwedding_home_hero&openid.signed=assoc_handle%2Cclaimed_id%2Cidentity%2Cmode%2Cns%2Cop_endpoint%2Cresponse_nonce%2Creturn_to%2CsiteState%2Cns.pape%2Cpape.auth_policies%2Cpape.auth_time%2Csigned&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.auth_policies=http%3A%2F%2Fschemas.openid.net%2Fpape%2Fpolicies%2F2007%2F06%2Fnone&openid.pape.auth_time=2020-10-25T15%3A33%3A20Z&openid.sig=9fSPE3d1kJGPFXWSZ2trESK5SF6uky1j9kZc%2BzZh3Aw%3D&serial=&siteState=clientContext%3D143-9713030-0561611%2CsourceUrl%3Dhttps%253A%252F%252Fwww.amazon.com%252Fwedding%252Forganize-registry%253Fref_%253Dwedding_home_hero%2Csignature%3DA4ZDH3sj2Fl0NuJ7BW3RybYO31Uuoj3D">Amazon</RegistryButton>
                    <VertDivider/>
                    <RegistryButton href="https://www.zola.com/registry/haydenandchloe">Zola</RegistryButton>
                </Box>
            </GridWrap>  
        </ContentWrapper>
    </FlexContainer>
)

}

export default Info