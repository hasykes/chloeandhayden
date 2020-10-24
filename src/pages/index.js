import React from 'react'
import Layout from '../components/layout'
//import SEO from '../components/seo'
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
  position:absolute;
  top:50%;
  left:-25px;
  transform:rotate(-90deg);
  
`

const DiscoBall = styled.img`

  position:absolute;
  top:60%;
  left:50%;
  transform: translate(-50%, -50%);
  margin:0;

`

const Hashtag = styled.div`

position:absolute;
  top:50%;
  right:-40px;
transform:rotate(90deg);
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
`

const DarkBox = styled.div`
  background-color:${theme.secondaryBackground};
  order:${props => props.order};
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
          <ContentWrapper id='home' >
            <Header>Chloe & Hayden</Header>
            
              <Date>March 27, 2021</Date>
              <DiscoBall src="https://static.wixstatic.com/media/19e8d8_26a98e6e68534a9da800d6718b976381~mv2_d_3508_4961_s_4_2.png/v1/crop/x_181,y_152,w_3327,h_3922/fill/w_480,h_570,al_c,q_85,usm_0.66_1.00_0.01/light%20green%20disco.webp" alt="groovy disco ball" />
              <Hashtag>#MartinDownTheAisle</Hashtag>
              <RsvpButton>RSVP</RsvpButton>
          </ContentWrapper>
        </FlexContainer>
        <FlexContainer>
          <ContentWrapper id='info' >
            <GridWrap>
            <LightBox order={2}>2</LightBox>
            <LightBox order={3}>3</LightBox>
            <DarkBox order={1}>1</DarkBox>
            <DarkBox order={4}>4</DarkBox>
            </GridWrap>
          </ContentWrapper>
        </FlexContainer>
      </Layout>
    )
  }
}

export default IndexPage
