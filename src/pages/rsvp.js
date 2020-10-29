import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

import {guestList} from "../data/guestList"
import {theme} from "../components/theme"

const Container = styled.div`
    max-width:82%;
    background-color:${theme.primaryText};
    margin:3em auto;
    padding-top:1em;
    padding-bottom:3em;
    padding-left:1em;
    padding-right:1em;
`

const MainHeader = styled.h1`
  font-size:4em;
  font-family:"Montserrat" !important;
  color:${theme.secondaryAccent};
  font-weight:normal;


  /*Mobile Styles*/
  @media (max-width: ${theme.devices.tablet}px) {
    font-size: 2em;
    color:${theme.primaryBackground};
  
  } 
`

const RsvpForm = styled.form`
  margin:0 auto;
  max-width:80%;
  color:${theme.secondaryAccent};
  
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
  color:${theme.secondaryAccent};
`

const RadioInput = styled.input`
padding:10px;
margin-left:1em;
color:${theme.secondaryAccent};


`

const SubmitButton = styled.input`
  
border: none;

border-radius: 10px;
background-color:${theme.primaryAccent};
color:${theme.primaryBackground};

margin-top:2em;
padding:.5em;

font-weight:bold;


`

class Rsvp extends React.Component {
  constructor() {
    super()
    this.state = {
      guestFirstName:'',
      guestLastName:'',
      numOfGuests:1,
      invited:false,
      guestGroup:[],
    }

    this.validateGuest = this.validateGuest.bind(this);
    
  }

  validateGuest(e) {
   e.preventDefault()
   const data = new FormData(e.target);
   const name = data.get('fname') + ' ' + data.get('lname');
   
   guestList.invited.map(guestGroup => {
    const invited = guestGroup.map(guest => name.toLowerCase() === guest.toLowerCase() ? true:false).includes(true);
    
    if(invited){
      this.setState({
        invited,
        guestGroup,
        numOfGuests:guestGroup.length-1,
        guestFirstName:data.get('fname'),
        guestLastName:data.get('lname')
      })
    }  
    

  })

  }

    render() {

      let FormData;
      
      if(!this.state.invited){
        FormData = (
          <RsvpForm onSubmit={this.validateGuest}>
            <StyledFieldSet>
                <FlexDiv>
                  <StyledInput type="text" id="fname" name="fname" required/>
                  <StyledLabel htmlFor="fname">First name</StyledLabel>
                </FlexDiv>
                <FlexDiv>
                  <StyledInput type="text" id="lname" name="lname" required /> 
                  <StyledLabel htmlFor="lname">Last name</StyledLabel>
                </FlexDiv>
                <p>*as it appears on your invite</p>
              </StyledFieldSet>
              <StyledFieldSet>
                <SubmitButton type="submit" value="Submit"/>
              </StyledFieldSet> 
          </RsvpForm>
        )
      }else{
        FormData = (
          <RsvpForm action="/thankyou" netlify name="rsvp">
          <p>Name<sup>*</sup></p>
            <StyledFieldSet>
              <FlexDiv>
                <StyledInput type="text" id="fname" name="fname"  required/>
                <StyledLabel htmlFor="fname">First name</StyledLabel>
              </FlexDiv>
              <FlexDiv>
                <StyledInput type="text" id="lname" name="lname"  requried /> 
                <StyledLabel htmlFor="lname">Last name</StyledLabel>
              </FlexDiv>
            </StyledFieldSet>

            <p>Email<sup>*</sup></p>
            <StyledFieldSet>
              <StyledInput type="text" id="email" name="email"  required />
            </StyledFieldSet>
      
            <p>Who will be attending?<sup>*</sup></p>
            <p>Select all that apply</p>
            <div>
              {this.state.guestGroup.map((guest,i) => {
                return (
                <p key={'p'+i}>
                <RadioInput key={'checkbox'+i} type="checkbox" name={guest} id={guest + 'checkbox'} />
                <StyledLabel key={'label'+i}htmlFor={guest}>{guest}</StyledLabel>
                </p>
                )
              })
              }
            </div>

            <p>Message</p>
            <StyledFieldSet>
              <StyledTextArea type="textarea" id="message" name="message" rows={5}  />
            </StyledFieldSet>
            
            <StyledFieldSet>
              <SubmitButton type="submit" value="Submit" />
            </StyledFieldSet> 

        </RsvpForm> 
        )
      }
      return (
  //!Fieldset and legends did not play nicely with flexbox. Need to revisit
      <Layout>
        <SEO title="rsvp" />
        <Container>
          <MainHeader>RSVP</MainHeader>
          {FormData}
        </Container>
      </Layout>
    )
    }
}

export default Rsvp
