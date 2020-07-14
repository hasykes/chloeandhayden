import React from 'react'
import Layout from '../components/layout'
import BillboardImage from '../components/billboardImage'
import ModernFlair from '../components/modernFlair'
import Title from '../components/title'
//import SEO from '../components/seo'
import styled from 'styled-components'
import { theme } from '../components/theme'

const ContentWrapper = styled.div`
  position:relative;
  width:100vw;
  height:100vh;

  overflow:hidden;


  /*Mobile Styles*/
  @media (max-width: ${theme.devices.tablet}px),(orientation: portrait)  {
      max-width:9999px;
      max-height:9999px;

      width:100vw;
      height:100vh;
    }
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
        <ContentWrapper id='home' >
          <ModernFlair color='peach' type='bottom-right' mobileType='top' zindex={0} />
          <ModernFlair color='blue' type='bottom-left' mobileType='middle' zindex={-1}/>
          <ModernFlair color='terra' type='top-center' mobileType='bottom' zindex={0}/>
          <Title title='Chloe and Hayden' subheadOne='March 27, 2020' subheadTwo='The Factory - Atlanta' />
          <BillboardImage/>
        </ContentWrapper>
        <ContentWrapper id='about'>
          <Title title='About' subPage={true} />
        </ContentWrapper>
        <ContentWrapper id='weddingParty'>
          <Title title='Wedding Party' subPage={true} />
        </ContentWrapper>
        <ContentWrapper id='registry'>
          <Title title='Registry' subPage={true} />
        </ContentWrapper>
        <ContentWrapper id='photos'>
          <Title title='Photos' subPage={true} />
        </ContentWrapper>
      </Layout>
    )
  }
}

export default IndexPage

//Stuff for later
/*
        <ContentWrapper id='about'>
          Here's some important stuff about the wedding
        </ContentWrapper>
        <ContentWrapper id='rsvp'>
          RSVP Please
        </ContentWrapper>
        <ContentWrapper id='weddingParty'>
          Look at these cool people
        </ContentWrapper>
*/
