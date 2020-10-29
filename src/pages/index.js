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
  margin-top:.2em;
  font-size:4em;
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
              
              <RsvpButton href="/">RSVP</RsvpButton>
          </ContentWrapper>
          <Hashtag>#PsychedToBeSykes</Hashtag>
        </FlexContainer>
      </Layout>
    )
  }
}

export default IndexPage
