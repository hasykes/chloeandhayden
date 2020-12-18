import React from "react"
import styled,{ keyframes } from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

import {guestList} from "../data/guestList"
import {theme} from "../components/theme"

const errorAnimation = keyframes`
  0% { left: -5px; }
  100% { right: -5px; }
`
const textErrorAnimation = keyframes`
  0% { color: ${theme.secondaryAccent}; }
  100% { color:${theme.primaryText}; }
`

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
  font-weight:bold;
  
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
`

const StyledHR = styled.hr`
  margin-bottom:.5em;
`

const GuestSpan = styled.span`
  min-width:150px;
  display:inline-block;
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
      inputError:false,
      email:'',
      message:'',
      g0name:'',
      g1name:'',
      g2name:'',
      g3name:'',
      g4name:'',
      g0rsvp:'',
      g0food:'',
      g1rsvp:'',
      g1food:'',
      g2rsvp:'',
      g2food:'',
      g3rsvp:'',
      g3food:'',
      g4rsvp:'',
      g4food:'',
        //can continue on for more guests in an rsvp group
    }

    this.handleChange = this.handleChange.bind(this);
    this.validateGuest = this.validateGuest.bind(this);
    this.resetAnimation = this.resetAnimation.bind(this);
    
  }

  //Lifecycles
  componentDidUpdate(prevProps,prevState){
    if(this.state.inputError){
      setTimeout(this.resetAnimation)
    }  
  }
  //Custom Methods

  handleChange(e){
    console.log(e.target)
    this.setState({
      [e.target.name]:e.target.value
    },console.log(this.state));
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
        guestLastName:data.get('lname'),
        inputError:false,
      })
    }else{
      this.setState({
        inputError:true,
      })
    }  
    
    

  })

  }

  resetAnimation(){
    setTimeout(() => this.setState({inputError:false}),500)
  }

    render() {

      let FormData;
      console.log(this.state)
      if(!this.state.invited){
        FormData = (
          <RsvpForm onSubmit={this.validateGuest}>
            <StyledFieldSet>
                <FlexDiv animate={this.state.inputError}>
                  <StyledInput type="text" id="fname" name="fname" required/>
                  <StyledLabel htmlFor="fname">First name</StyledLabel>
                </FlexDiv>
                <FlexDiv animate={this.state.inputError}>
                  <StyledInput type="text" id="lname" name="lname" required /> 
                  <StyledLabel htmlFor="lname">Last name</StyledLabel>
                </FlexDiv>
                <SmallP animate={this.state.inputError}>Please enter your name as it appears on your invitation</SmallP>
              </StyledFieldSet>
              <StyledFieldSet>
                <SubmitButton type="submit" value="Submit"/>
              </StyledFieldSet> 
          </RsvpForm>
        )
      }else{
        FormData = (
          <RsvpForm action="/thankyou" data-netlify="true" name="rsvp" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <p hidden><input name="bot-field"></input></p>
          <StyledP>Name<sup>*</sup></StyledP>
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
            <StyledHR />
            <StyledP>Email<sup>*</sup></StyledP>
            <StyledFieldSet>
              <StyledInput type="text" id="email" name="email" onChange={this.handleChange} required />
            </StyledFieldSet>
            <StyledHR />
            <StyledP>Who will be attending?<sup>*</sup></StyledP>
            <SmallP>Select one option per guest</SmallP>
            <div>
              {this.state.guestGroup.map((guest,i) => {
                return (
                <StyledP key={'p'+i}>
                <GuestSpan>{guest}</GuestSpan>
                <span>
                  <RadioInput key={'radioyes' + i} type="radio" name={'g' + i + 'rsvp'} id={guest + 'yes'} value="yes" onChange={this.handleChange} />
                    <StyledLabel key={'labelyes'+i} htmlFor={guest + 'yes'}>Yes</StyledLabel>
                  </span>
                  <span>
                    <RadioInput key={'radiono' + i} type="radio" name={'g' + i + 'rsvp'} id={guest + 'no'} value="no" onChange={this.handleChange} />
                    <StyledLabel key={'labelno'+i}htmlFor={guest + 'no'}>No</StyledLabel>
                  </span>
                </StyledP>
                )
              })
              }
            </div>
            <StyledHR />
            <StyledP>What would you like to eat?*</StyledP>
            <SmallP>Select one option for each guest</SmallP>
            <div>
              {this.state.guestGroup.map((guest,i) => {
                return (
                <StyledP key={'p'+i}>
                  <GuestSpan>{guest}</GuestSpan>  
                  <span>
                    <RadioInput key={'radiochicken' + i} type="radio" name={'g' + i + 'food'} id={guest + 'chicken'} value="chicken" onChange={this.handleChange} />
                    <StyledLabel key={'label'+i} htmlFor={guest + 'chicken'}>Chicken</StyledLabel>
                  </span>
                  <span>
                    <RadioInput key={'radiofish' + i} type="radio" name={'g' + i + 'food'} id={guest + 'fish'} value="fish" onChange={this.handleChange} />
                    <StyledLabel key={'label'+i} htmlFor={guest + 'fish'}>Fish</StyledLabel>
                  </span>
                  <span>
                    <RadioInput key={'radioveggie' + i} type="radio" name={'g' + i + 'food'} id={guest + 'veggie'} value="veggie" onChange={this.handleChange} />
                    <StyledLabel key={'label'+i} htmlFor={guest + 'veggie'}>Vegetarian</StyledLabel>
                  </span>
                </StyledP>
                )
              })
              }
            </div>
            <StyledHR />  
            <StyledP>Message</StyledP>
            <StyledFieldSet>
              <StyledTextArea type="textarea" id="message" name="message" rows={5} onChange={this.handleChange} />
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