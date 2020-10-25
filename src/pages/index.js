import React from 'react'
import Layout from '../components/layout'
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
  width:90vw;
  height:90vh;
  background-color: ${theme.primaryBackground};
  color:${theme.primaryText};
  flex:0 1 auto;

  overflow:hidden;

  /*Mobile Styles*/
  @media (max-width: ${theme.devices.tablet}px),(orientation: portrait)  {
      max-width:9999px;
      max-height:9999px;

      width:100vw;
      height:100vh;
    }
`

const Flex = styled.div`

 display:flex;
  width:100%;

  justify-content:center;
 
`

const Header = styled.h1`

  width:100%; 
  text-align:center;
  margin-top:.75em;
`
const Date = styled.div`
  position:fixed;
  top:50%;
  left:-25px;
  transform:rotate(-90deg);
  color:${theme.primaryText};
  
`

const DiscoBall = styled.img`

  position:absolute;
  top:55%;
  left:50%;
  transform: translate(-50%, -50%);
  margin:0;

  width:65%;

`

const Hashtag = styled.div`

position:fixed;
  top:50%;
  right:-40px;
transform:rotate(90deg);
color:${theme.primaryText};
`
const RsvpButton = styled.button`
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
`

const GridWrap = styled.div`
  display:grid;
  grid-template-columns:repeat(2,1fr);
  grid-template-rows:repeat(2,1fr);

  height:100%;
  width:100%;
`

const LightBox = styled.div`
  background-color:transparent;
  order:${props => props.order};

  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
`

const DarkBox = styled.div`
  background-color:${theme.secondaryBackground};
  order:${props => props.order};

  display:flex;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
`

const BigWords = styled.div`
  color:${theme.primaryText};
  font-size:3em;
  text-transform:uppercase;
  font-weight:bold;
 
  text-align:center;

  flex:0 0 100%;
  
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
`

class IndexPage extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <Layout>
        <FlexContainer>
        <Date>March 27, 2021</Date>
          <ContentWrapper id='home' >
          
            <Header>Chloe & Hayden</Header>
            
              
              <DiscoBall src={discoGIF} alt="groovy disco ball" />
              
              <RsvpButton>RSVP</RsvpButton>
          </ContentWrapper>
          <Hashtag>#PsychedToBeSykes</Hashtag>
        </FlexContainer>
        <FlexContainer>
          <ContentWrapper id='info' >
            <GridWrap>
            <LightBox order={2}>
            <NormalWords>The Factory</NormalWords>
            <NormalWords>5616 New Peachtree Rd, Chamblee, GA 30341</NormalWords>
            <NormalWords>5PM - Ceremoney</NormalWords>
            <NormalWords>5:30PM - Cocktails</NormalWords>
            <NormalWords>6PM - Reception</NormalWords>
            </LightBox>
            <LightBox order={3}>
              <NormalWords>let us know if you're coming to celebrate</NormalWords>
              <NormalWords>Chloe & Hayden</NormalWords>
              <RegistryButton>RSVP</RegistryButton>
            </LightBox>
            <DarkBox order={1}>
              <BigWords>Details</BigWords>
            </DarkBox>
            <DarkBox order={4}>
              <BigWords>Gift Registry</BigWords>
              <RegistryButton href="https://www.amazon.com/wedding/organize-registry?ref_=wedding_home_hero&openid.assoc_handle=amzn_weddingregistry_desktop_us&openid.claimed_id=https%3A%2F%2Fwww.amazon.com%2Fap%2Fid%2Famzn1.account.AECO7TCIGXOIKTPJBAOVHHLWSBXQ&openid.identity=https%3A%2F%2Fwww.amazon.com%2Fap%2Fid%2Famzn1.account.AECO7TCIGXOIKTPJBAOVHHLWSBXQ&openid.mode=id_res&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.op_endpoint=https%3A%2F%2Fwww.amazon.com%2Fap%2Fsignin&openid.response_nonce=2020-10-25T15%3A33%3A20Z-73987912128184165&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fwedding%2Forganize-registry%3Fref_%3Dwedding_home_hero&openid.signed=assoc_handle%2Cclaimed_id%2Cidentity%2Cmode%2Cns%2Cop_endpoint%2Cresponse_nonce%2Creturn_to%2CsiteState%2Cns.pape%2Cpape.auth_policies%2Cpape.auth_time%2Csigned&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.auth_policies=http%3A%2F%2Fschemas.openid.net%2Fpape%2Fpolicies%2F2007%2F06%2Fnone&openid.pape.auth_time=2020-10-25T15%3A33%3A20Z&openid.sig=9fSPE3d1kJGPFXWSZ2trESK5SF6uky1j9kZc%2BzZh3Aw%3D&serial=&siteState=clientContext%3D143-9713030-0561611%2CsourceUrl%3Dhttps%253A%252F%252Fwww.amazon.com%252Fwedding%252Forganize-registry%253Fref_%253Dwedding_home_hero%2Csignature%3DA4ZDH3sj2Fl0NuJ7BW3RybYO31Uuoj3D">Amazon</RegistryButton>
              <VertDivider/>
              <RegistryButton href="https://www.zola.com/registry/haydenandchloe">Zola</RegistryButton>
            </DarkBox>
            </GridWrap>
          </ContentWrapper>
        </FlexContainer>
      </Layout>
    )
  }
}

export default IndexPage
