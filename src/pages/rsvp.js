import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

import {theme} from "../components/theme"

const Container = styled.div`
    max-width:82%;
    background-color:#948804;
    margin:3em auto;
    padding-top:1em;
    padding-bottom:3em;
    padding-left:1em;
    padding-right:1em;
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

const RsvpForm = styled.form`
  margin:0 auto;
  max-width:80%;
  
`

const StyledFieldSet = styled.div`
  display:flex;
  justify-content:space-around;
  flex-wrap:wrap;
  margin-bottom:1em;
  `

const FlexDiv = styled.div`
  width:auto;
  flex:0 0 50%;

  display:flex;
  flex-wrap:wrap;

  padding:10px;
 
  `

const StyledInput = styled.input`

  flex:1 0 100%;
  flex-wrap:wrap;
  padding:10px;

  border-radius:5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border:none;


  
`

const StyledTextArea = styled.textarea`

  min-height:100px;
  flex:1 0 100%;
  flex-wrap:wrap;
  padding:10px;

  border-radius:5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border:none;
`


const StyledLabel = styled.label`

  flex:1;
  font-style:italic;
  font-size:.8em;
`

const RadioInput = styled.input`
padding:10px;
margin-left:1em;

`

const SubmitButton = styled.input`
  
border: 1px solid #FFFFFF;

border-radius: 10px;
background-color:transparent;
color:#FFF;

margin-top:2em;
padding:.5em;


`

//!Fieldset and legends did not play nicely with flexbox. Need to revisit
const Rsvp = () => {
  return (
    <Layout>
      <SEO title="rsvp" />
      <Container>
        <MainHeader>RSVP</MainHeader>
        <RsvpForm action="/thankyou" netlify name="rsvp">
        <p>Name<sup>*</sup></p>
          <StyledFieldSet>
            <FlexDiv>
              <StyledInput type="text" id="fname" name="fname"  required/>
              <StyledLabel for="fname">First name</StyledLabel>
            </FlexDiv>
            <FlexDiv>
              <StyledInput type="text" id="lname" name="lname"  requried /> 
              <StyledLabel for="lname">Last name</StyledLabel>
            </FlexDiv>
          </StyledFieldSet>
          
          <p>Email<sup>*</sup></p>
          <StyledFieldSet>
            <StyledInput type="text" id="email" name="email"  required />
          </StyledFieldSet>

          <p>Will you be attending?<sup>*</sup></p>
          <div>
            <RadioInput type="radio" name="attending" value="yes" required />  yes<br/>
            <RadioInput type="radio" name="attending" value="no" />  no
          </div>

          <p>Message</p>
          <StyledFieldSet>
            <StyledTextArea type="textarea" id="message" name="message" rows={5}  />
          </StyledFieldSet>
          
          <StyledFieldSet>
            <SubmitButton type="submit" value="Submit" />
          </StyledFieldSet> 

        </RsvpForm>
      </Container>
    </Layout>
  )
}

export default Rsvp

/*

         
         
         

*/