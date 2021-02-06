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
  color:${theme.primaryText}
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

const RsvpRehearsal = (props) => {

        if(!props.invited){return <></>}
        return (
          <RsvpForm id="rehearsalForm" onSubmit={props.handleSubmit} method="post" action="/thankyou" data-netlify="true" name="rehearsal" data-netlify-honeypot="bot-field">
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
            <StyledP>Appetizer<sup>*</sup></StyledP>
            <SmallP>Select one option for each guest</SmallP>
              {props.guestGroup.map((guest,i) => {
                if(props[`g${i}rsvp`] === 'no'){
                  return <span key={`empty${i}`} />
                }else{
                  return (
                  <StyledP key={'p'+i}>
                    <GuestSpan>{guest}</GuestSpan>  
                    <div>
                      <RadioInput key={'radioAC' + i} type="radio" name={'g' + i + 'app'} id={guest + 'radioAC'+i} value="cauli" checked={props[`g${i}app`] === 'cauli' ? true:false} onChange={props.handleChange} removeLeftMargin required />
                      <StyledLabel key={'label'+i} htmlFor={guest + 'radioAC'+i}>Fried Cauliflower with garlic aioli, caper, mint</StyledLabel>
                    </div>
                    <div>
                      <RadioInput key={'radioAM' + i} type="radio" name={'g' + i + 'app'} id={guest + 'radioAM'+i} value="mussels" checked={props[`g${i}app`] === 'mussels' ? true:false} onChange={props.handleChange} />
                      <StyledLabel key={'label'+i} htmlFor={guest + 'radioAM'+ i}>Mussels with white wine cream sauce, baguette</StyledLabel>
                    </div>
                    <div>
                      <RadioInput key={'radioAB' + i} type="radio" name={'g' + i + 'app'} id={guest + 'radioAB'+i} value="beef" checked={props[`g${i}app`] === 'beef' ? true:false} onChange={props.handleChange} />
                      <StyledLabel key={'label'+i} htmlFor={guest + 'radioAB'+ i}>Beef tartare, cured egg, pickled mustard seed, potato chips</StyledLabel>
                    </div>
                  </StyledP>
                  )
                }
              })
              }
            </div> 
            <div>
            <StyledHR />
            <StyledP>Salad Dressing<sup>*</sup></StyledP>
            <SmallP>Select one option for each guest</SmallP>
              {props.guestGroup.map((guest,i) => {
                if(props[`g${i}rsvp`] === 'no'){
                  return <span key={`empty${i}`} />
                }else{
                  return (
                  <StyledP key={'p'+i}>
                    <GuestSpan>{guest}</GuestSpan>  
                    <div>
                      <RadioInput key={'radioSM' + i} type="radio" name={'g' + i + 'dressing'} id={guest + 'maple'} value="maple" checked={props[`g${i}salad`] === 'maple' ? true:false} onChange={props.handleChange} removeLeftMargin required />
                      <StyledLabel key={'label'+i} htmlFor={guest + 'maple'}>Maple roasted garlic</StyledLabel>
                    </div>
                    <div>
                      <RadioInput key={'radioSR' + i} type="radio" name={'g' + i + 'dressing'} id={guest + 'ranch'} value="ranch" checked={props[`g${i}salad`] === 'ranch' ? true:false} onChange={props.handleChange} />
                      <StyledLabel key={'label'+i} htmlFor={guest + 'ranch'}>Ranch</StyledLabel>
                    </div>
                    <div>
                      <RadioInput key={'radioSC' + i} type="radio" name={'g' + i + 'dressing'} id={guest + 'citrus'} value="citrus" checked={props[`g${i}salad`] === 'citrus' ? true:false} onChange={props.handleChange} />
                      <StyledLabel key={'label'+i} htmlFor={guest + 'citrus'}>Citrus herb</StyledLabel>
                    </div>
                  </StyledP>
                  )
                }
              })
              }
            </div>
            <div>
            <StyledHR />
            <StyledP>Entree<sup>*</sup></StyledP>
            <SmallP>Select one option for each guest</SmallP>
              {props.guestGroup.map((guest,i) => {
                if(props[`g${i}rsvp`] === 'no'){
                  return <span key={`empty${i}`} />
                }else{
                  return (
                  <StyledP key={'p'+i}>
                    <GuestSpan>{guest}</GuestSpan>  
                    <div>
                      <RadioInput key={'radioDS' + i} type="radio" name={'g' + i + 'entree'} id={guest + 'scallop'} value="scallop" checked={props[`g${i}entree`] === 'scallop' ? true:false} onChange={props.handleChange} removeLeftMargin required />
                      <StyledLabel key={'label'+i} htmlFor={guest + 'scallop'}>Seared Scallop with house-made tortellini, fried shallot, lemon cream, local arugula</StyledLabel>
                    </div>
                    <div>
                      <RadioInput key={'radioDR' + i} type="radio" name={'g' + i + 'entree'} id={guest + 'risotto'} value="risotto" checked={props[`g${i}entree`] === 'risotto' ? true:false} onChange={props.handleChange} />
                      <StyledLabel key={'label'+i} htmlFor={guest + 'risotto'}>Risotto with roasted beet, wild mushroom, humbolt fog cheese, herbs</StyledLabel>
                    </div>
                    <div>
                      <RadioInput key={'radioDC' + i} type="radio" name={'g' + i + 'entree'} id={guest + 'chicken'} value="chicken" checked={props[`g${i}entree`] === 'chicken' ? true:false} onChange={props.handleChange} />
                      <StyledLabel key={'label'+i} htmlFor={guest + 'chicken'}>Airline chicken breast with crispy smashed fingerling potatoes, wilted greens, pan jus</StyledLabel>
                    </div>
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




export default RsvpRehearsal;