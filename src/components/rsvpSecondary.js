import React from 'react'
import styled, {keyframes} from "styled-components"
import { theme } from "./theme"

const errorAnimation = keyframes`
  0% { left: -5px; }
  100% { right: -5px; }
`
const textErrorAnimation = keyframes`
  0% { color: ${theme.secondaryAccent}; }
  100% { color:${theme.primaryText}; }
`

const RsvpForm = styled.form`
  margin:0 auto;
  max-width:80%;
  color:${theme.primaryText};
  font-weight:bold;

  @media (max-width: ${theme.devices.tablet}px){
    /*font-size:${props => props.smallMobile ? '2.3em':'3em'}*/
}
  
`

const StyledFieldSet2 = styled.div`
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

  position:relative;
  animation-name:${props => props.animate ? errorAnimation:''};
  animation-duration:.1s;
  animation-iteration-count:3;
  
 
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

@media (max-width: ${theme.devices.tablet}px){
  ${props => props.removeLeftMargin ? 'margin-left:0;':''}
}
`

const StyledP = styled.p`
  margin-bottom:.25em;
`

const SmallP = styled.p`
  margin-bottom:1em;
  font-size:.75em;
  font-style:italic;

  animation-name:${props => props.animate ? textErrorAnimation:''};
  animation-duration:1s;
  animation-iteration-count:1;

  ${props => {
    if(props.mobile){
     return ( `@media (max-width: ${theme.devices.tablet}px){
        text-align:center;
        width:70%;
    }`)
    }
  }}


  
`

const StyledHR = styled.hr`
  margin-bottom:.5em;
`

const GuestSpan = styled.span`
  min-width:225px;
  display:inline-block;

  @media (max-width: ${theme.devices.mobileL}px){
    display:block;
`

const RsvpSecondary = (props) => {

        if(!props.invited){return <></>}
        return (
          <RsvpForm id="secondaryForm" onSubmit={props.handleSubmit} method="post" action="/thankyou" data-netlify="true" name="rsvp" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <p hidden><input name="bot-field"></input></p>
          <StyledP>Name<sup>*</sup></StyledP>
            <StyledFieldSet2>
              <FlexDiv>
                <StyledInput type="text" id="fname" name="fname"  value={props.guestFirstName} required/>
                <StyledLabel htmlFor="fname">First name</StyledLabel>
              </FlexDiv>
              <FlexDiv>
                <StyledInput type="text" id="lname" name="lname" value={props.guestLastName} requried /> 
                <StyledLabel htmlFor="lname">Last name</StyledLabel>
              </FlexDiv>
            </StyledFieldSet2>
            <StyledHR />
            <StyledP>Email<sup>*</sup></StyledP>
            <StyledFieldSet2>
              <StyledInput type="text" id="email" name="email" defaultValue={props.email} onChange={props.handleChange} required />
            </StyledFieldSet2>
            <StyledHR />
            <StyledP>Who will be attending?<sup>*</sup></StyledP>
            <SmallP>Select one option per guest</SmallP>
            <div>
              {props.guestGroup.map((guest,i) => {
                return (
                <StyledP key={'p'+i}>
                <GuestSpan>{guest}</GuestSpan>
                <span>
                  <RadioInput key={'radioyes' + i} type="radio" name={'g' + i + 'rsvp'} id={guest + 'yes'} value="yes" onChange={props.handleChange} checked={props[`g${i}rsvp`] === 'yes' ? true:false} removeLeftMargin required/>
                    <StyledLabel key={'labelyes'+i} htmlFor={guest + 'yes'}>Yes</StyledLabel>
                  </span>
                  <span>
                    <RadioInput key={'radiono' + i} type="radio" name={'g' + i + 'rsvp'} id={guest + 'no'} value="no" onChange={props.handleChange} checked={props[`g${i}rsvp`] === 'no' ? true:false} />
                    <StyledLabel key={'labelno'+i}htmlFor={guest + 'no'}>No</StyledLabel>
                  </span>
                </StyledP>
                )
              })
              }
            </div>
            <div>
            <StyledHR />
            <StyledP>What would you like to eat?<sup>*</sup></StyledP>
            <SmallP>Select one option for each guest</SmallP>
              {props.guestGroup.map((guest,i) => {
                if(props[`g${i}rsvp`] === 'no'){
                  return <span key={`empty${i}`} />
                }else{
                  return (
                  <StyledP key={'p'+i}>
                    <GuestSpan>{guest}</GuestSpan>  
                    <span>
                      <RadioInput key={'radiochicken' + i} type="radio" name={'g' + i + 'food'} id={guest + 'chicken'} value="chicken" checked={props[`g${i}food`] === 'chicken' ? true:false} onChange={props.handleChange} removeLeftMargin required />
                      <StyledLabel key={'label'+i} htmlFor={guest + 'chicken'}>Chicken</StyledLabel>
                    </span>
                    <span>
                      <RadioInput key={'radiosteak' + i} type="radio" name={'g' + i + 'food'} id={guest + 'steak'} value="steak" checked={props[`g${i}food`] === 'steak' ? true:false} onChange={props.handleChange} />
                      <StyledLabel key={'label'+i} htmlFor={guest + 'steak'}>Steak</StyledLabel>
                    </span>
                    <span>
                      <RadioInput key={'radioveggie' + i} type="radio" name={'g' + i + 'food'} id={guest + 'veggie'} value="veggie" checked={props[`g${i}food`] === 'veggie' ? true:false} onChange={props.handleChange} />
                      <StyledLabel key={'label'+i} htmlFor={guest + 'veggie'}>Vegetarian</StyledLabel>
                    </span>
                  </StyledP>
                  )
                }
              })
              }
            </div>
            <StyledHR />  
            <StyledP>Message</StyledP>
            <StyledFieldSet2>
              <StyledTextArea type="textarea" id="message" name="message" rows={5} defaultValue={props.message} onChange={props.handleChange} />
            </StyledFieldSet2>
            
            <StyledFieldSet2>
              {props.responded ? <SubmitButton type="submit" value="Update" />:<SubmitButton type="submit" value="Submit" />}
            </StyledFieldSet2> 
  
        </RsvpForm> 
        )
} 




export default RsvpSecondary;