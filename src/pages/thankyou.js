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
  box-shadow:1px 2px ${theme.primaryText};
  &:hover {
      background-color:${theme.secondaryAccent};
      box-shadow:0px 0px;
  }
`


const Thankyou = () => {
    return(
        <>
            <SEO title="Thank You" />
            <FlexContainer>          
                <ContentWrapper id='thankyou' >
                    <Header>Thank You!</Header>
                    <CenterP>We are so excited for you to celebrate this special day with us!</CenterP>
                    <FlexP>
                        <RegistryButton href="/">Home</RegistryButton>
                    </FlexP>
                </ContentWrapper>
            </FlexContainer>
        </>
    )
}

export default Thankyou;