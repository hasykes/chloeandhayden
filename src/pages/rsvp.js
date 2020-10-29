import React from 'react'
//import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import { theme } from '../components/theme'

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

const CenterP = styled.p`
  text-align:center;
  color:${theme.primaryText};
`

const FlexP = styled.p`
    display:flex;
    align-items:center;
    justify-content:center;
`

const RegistryButton = styled.a`
  flex: 0 0 auto;
  display:inline-block;
  min-width:100px;
  min-height:50px;
  background-color:${theme.primaryAccent};
  border:none;
  color:${theme.primaryBackground};
  font-weight:bold;
  text-decoration:none;
  text-align:center;
  line-height:50px;
  border-radius: 10px;
`
const VertDivider = styled.div`
  flex: 0 0 auto;
  height:5em;
  width:3px;
  background-color:${theme.secondaryAccent};
  margin:0 1em;
`

const Rsvp = () => {
    return(
        <>
            <SEO title="rsvp" />
            <FlexContainer>          
                <ContentWrapper id='rsvp' >
                    <Header>RSVP</Header>
                    <CenterP>We will begin accepting responses after sending out our invitations.  Until then, please have a look at our Gift Registry!</CenterP>
                    <FlexP>
                        <span>
                            <RegistryButton href="https://www.amazon.com/wedding/organize-registry?ref_=wedding_home_hero&openid.assoc_handle=amzn_weddingregistry_desktop_us&openid.claimed_id=https%3A%2F%2Fwww.amazon.com%2Fap%2Fid%2Famzn1.account.AECO7TCIGXOIKTPJBAOVHHLWSBXQ&openid.identity=https%3A%2F%2Fwww.amazon.com%2Fap%2Fid%2Famzn1.account.AECO7TCIGXOIKTPJBAOVHHLWSBXQ&openid.mode=id_res&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.op_endpoint=https%3A%2F%2Fwww.amazon.com%2Fap%2Fsignin&openid.response_nonce=2020-10-25T15%3A33%3A20Z-73987912128184165&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fwedding%2Forganize-registry%3Fref_%3Dwedding_home_hero&openid.signed=assoc_handle%2Cclaimed_id%2Cidentity%2Cmode%2Cns%2Cop_endpoint%2Cresponse_nonce%2Creturn_to%2CsiteState%2Cns.pape%2Cpape.auth_policies%2Cpape.auth_time%2Csigned&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.auth_policies=http%3A%2F%2Fschemas.openid.net%2Fpape%2Fpolicies%2F2007%2F06%2Fnone&openid.pape.auth_time=2020-10-25T15%3A33%3A20Z&openid.sig=9fSPE3d1kJGPFXWSZ2trESK5SF6uky1j9kZc%2BzZh3Aw%3D&serial=&siteState=clientContext%3D143-9713030-0561611%2CsourceUrl%3Dhttps%253A%252F%252Fwww.amazon.com%252Fwedding%252Forganize-registry%253Fref_%253Dwedding_home_hero%2Csignature%3DA4ZDH3sj2Fl0NuJ7BW3RybYO31Uuoj3D">Amazon</RegistryButton>
                        </span>
                        <VertDivider/>
                        <span>
                            <RegistryButton href="https://www.zola.com/registry/haydenandchloe">Zola</RegistryButton>
                        </span>
                    </FlexP>
                </ContentWrapper>
            </FlexContainer>
        </>
    )
}

export default Rsvp;
