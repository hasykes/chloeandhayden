import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

import {guestList} from "../data/guestList"
import {theme} from "../components/theme"

const FlexContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  align-content:center;
  min-height:100vh;
`
const ContentWrapper = styled.div`
  position:relative;
  width:60vw;
  min-height:50vh;
  background-color: ${theme.primaryBackground};
  border:1px solid ${theme.primaryText};
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  color:${theme.primaryText};
  flex:0 1 auto;
  max-width:1500px;
  margin:3em 1em;
  
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
const RsvpForm = styled.form`
  margin:0 auto;
  max-width:80%;
  color:${theme.primaryText};
  
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
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border:none;
  
  
`

const StyledTextArea = styled.textarea`
  min-height:100px;
  flex:1 0 100%;
  flex-wrap:wrap;
  padding:10px;
  border-radius:5px;
  box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
  border:none;
  
  
`


const StyledLabel = styled.label`
  flex:1;
  font-style:italic;
  font-size:.8em;
  color:${theme.primaryText};
`

const RadioInput = styled.input`
padding:10px;
margin-left:1em;
color:${theme.primaryText};
`

const SubmitButton = styled.input`
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
      cursor:pointer;
  }
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
                <StyledInput type="text" id="fname" name="fname"  value={this.state.guestFirstName} required/>
                <StyledLabel htmlFor="fname">First name</StyledLabel>
              </FlexDiv>
              <FlexDiv>
                <StyledInput type="text" id="lname" name="lname" value={this.state.guestLastName} requried /> 
                <StyledLabel htmlFor="lname">Last name</StyledLabel>
              </FlexDiv>
            </StyledFieldSet>
            <hr />
            <p>Email<sup>*</sup></p>
            <StyledFieldSet>
              <StyledInput type="text" id="email" name="email"  required />
            </StyledFieldSet>
            <hr />
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
            <hr />
            <p>What would you like to eat?*</p>
            <p>Select one option for each guest</p>
            <div>
              {this.state.guestGroup.map((guest,i) => {
                return (
                <p key={'p'+i}>
                  <span>{guest}</span>  
                  <span>
                    <RadioInput key={'radio'+ 'chicken' + i} type="radio" name={guest + 'dinnerChoice'} id={guest + 'chicken'} />
                    <StyledLabel key={'label'+i} htmlFor={guest + 'chicken'}>Chicken</StyledLabel>
                  </span>
                  <span>
                    <RadioInput key={'radio'+ 'fish' + i} type="radio" name={guest + 'dinnerChoice'} id={guest + 'fish'} />
                    <StyledLabel key={'label'+i}htmlFor={guest + 'fish'}>Fish</StyledLabel>
                  </span>
                  <span>
                    <RadioInput key={'radio'+ 'veggie' + i} type="radio" name={guest + 'dinnerChoice'} id={guest + 'veggie'} />
                    <StyledLabel key={'label'+i}htmlFor={guest + 'veggie'}>Vegetarian</StyledLabel>
                  </span>
                </p>
                )
              })
              }
            </div>
            <hr />  
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
        <FlexContainer>
          <ContentWrapper>
            <Header>RSVP</Header>
            {FormData}
          </ContentWrapper>
        </FlexContainer>
      </Layout>
    )
    }
}

export default Rsvp;