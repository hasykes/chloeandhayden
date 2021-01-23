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

const RsvpInitial = (props) => {
        if(props.invited){return <></>}
        return (
          <RsvpForm onSubmit={props.validateGuest} id="initialForm">
            <StyledFieldSet>
                <FlexDiv animate={props.inputError}>
                  <StyledInput type="text" id="fname" name="fname" required/>
                  <StyledLabel htmlFor="fname">First name</StyledLabel>
                </FlexDiv>
                <FlexDiv animate={props.inputError}>
                  <StyledInput type="text" id="lname" name="lname" required /> 
                  <StyledLabel htmlFor="lname">Last name</StyledLabel>
                </FlexDiv>
                <SmallP animate={props.inputError} mobile={true}>Please enter your name as it appears on your invitation</SmallP>
              </StyledFieldSet>
              <StyledFieldSet id="initialSubmit">
                <SubmitButton type="submit" value="Submit"/>
              </StyledFieldSet> 
          </RsvpForm>
        )
} 




export default RsvpInitial;