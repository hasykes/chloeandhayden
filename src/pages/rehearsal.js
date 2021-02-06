import React from "react"
import { navigate } from "gatsby-link"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RsvpInitial from "../components/rsvpInitial"
import RsvpRehearsal from "../components/rsvpRehearsal"

import {rehearsalGuestList} from "../data/rehearsalGuestList"
import {theme} from "../components/theme"


const FlexContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  align-content:center;
  min-height:100vh;

  /*Mobile Styles*/
  @media (max-width: ${theme.devices.tablet}px)  {
    justify-content:flex-start;
    align-items:flex-start;
    align-content:flex-start;    
    }
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
      border:none;
      box-shadow:none;
      max-width:100vw;
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
    font-size:4em;
}
  
`

const SubHeader = styled.h2`
  width:100%; 
  text-align:center;
  margin-top:.2em;
  font-size:2em;.5
  font-variant:small-caps;
  /*Mobile Styles*/
  @media (max-width: ${theme.devices.tablet}px),(orientation: portrait)  {
      margin-top:.1em;
    }
  @media (max-width: ${theme.devices.mobileL}px){
    font-size:4em;
}
  
`

const HiddenForm = styled.form`
  display:none;
`
//usefunctions
const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Rehearsal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      responded:false,
      guestFirstName:'',
      guestLastName:'',
      numOfGuests:1,
      invited:false,
      guestGroup:[],
      inputError:false,
      email:'',
      message:'',
      g0name:'',
      g0rsvp:'',
      g0app:'', 
      g0entree:'',
      g0salad:'',
      g0dessert:'',
      g1name:'',
      g1rsvp:'',
      g1app:'', 
      g1entree:'',
      g1salad:'',
      g1dessert:'',
      g2name:'',
      g2rsvp:'',
      g2app:'', 
      g2entree:'',
      g2salad:'',
      g2dessert:'',
      g3name:'',
      g3rsvp:'',
      g3app:'', 
      g3entree:'',
      g3salad:'',
      g3dessert:'',
      g4name:'',
      g4rsvp:'',
      g4app:'', 
      g4entree:'',
      g4salad:'',
      g4dessert:'',
      g5name:'',
      g5rsvp:'',
      g5app:'', 
      g5entree:'',
      g5salad:'',
      g5dessert:'',
        //can continue on for more guests in an rsvp group
    }
    
    //binders
    this.handleChange = this.handleChange.bind(this);
    this.validateGuest = this.validateGuest.bind(this);
    this.resetAnimation = this.resetAnimation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //Lifecycles

  componentDidUpdate(prevProps,prevState){
    if(this.state.inputError){
      setTimeout(this.resetAnimation)
    }  
  }

  componentDidMount(){
   
    if(typeof window !== 'undefined' && window.localStorage.getItem('rehearsal')){
      const previousResponse = JSON.parse(localStorage.getItem('rehearsal'))
      if(previousResponse){
        console.log(`Hey ${previousResponse.guestFirstName}, you've already RSVPd! If you think you've made a mistake, send Hayden or Chloe an email and they'll get it sorted out.`)
        this.setState(previousResponse);

      }
    }
  }

  
  //Custom Methods
  validateGuest(e) {
   e.preventDefault()
    const data = new FormData(e.target);
    const name = data.get('fname').trim() + ' ' + data.get('lname').trim();

    let invited;
    rehearsalGuestList.invited.forEach(guestGroup => {
    invited = guestGroup.map(guest => name.toLowerCase() === guest.toLowerCase() ? true:false).includes(true);
    
    if(invited){
      this.setState({
        invited,
        guestGroup,
        numOfGuests:guestGroup.length,
        guestFirstName:data.get('fname'),
        guestLastName:data.get('lname'),
        inputError:false,
      },() => console.log(this.state))
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

  handleChange(e){
    this.setState({
      [e.target.name]:e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const form = e.target;
    //what fields do I want to store?
    const {guestFirstName,guestLastName,guestGroup,invited,inputError,...postState} = this.state;

    //I should probably do this somewhere else... but works?
    guestGroup.forEach((guest,i) => {
      postState[`g${i}name`] = guest;
    })

    postState.responded=true;
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": form.getAttribute("name"),
          ...postState
        })
    })
      .then(() => {
        navigate(form.getAttribute("action"))
        if(typeof window !== 'undefined'){
          this.setState(postState,() => localStorage.setItem('rehearsal',JSON.stringify(this.state)))
        }
        
      })
      .catch(error => alert("Something went wrong.  Please contact Hayden to finish up your rehearsal RSVP. Error: " + error)); 
  };



    render() {
      
      return (
  //!Fieldset and legends did not play nicely with flexbox. Need to revisit
      <Layout>
        <SEO title="rehearsal" />
        <FlexContainer>
          <ContentWrapper>
            <Header>RSVP</Header>
            <SubHeader>Rehearsal Dinner</SubHeader>
            <RsvpInitial
            validateGuest={this.validateGuest} 
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            invited={this.state.invited} 
            inputError={this.state.inputError}
            guestFirstName={this.state.guestFirstName}
            guestLastName={this.state.guestLastName}
            guestGroup={this.state.guestGroup}
            g0name = {this.state.g0name}
            g0rsvp = {this.state.g0rsvp}
            g0app = {this.state.g0app}
            g0entree = {this.state.g0entree}
            g0salad  = {this.state.g0salad }
            g0dessert = {this.state.g0dessert}
            g1name = {this.state.g1namw}
            g1rsvp = {this.state.g1rsvp}
            g1app = {this.state.g1app}
            g1entree = {this.state.g1entree}
            g1salad  = {this.state.g1salad }
            g1dessert = {this.state.g1dessert}
            g2name = {this.state.g2name}
            g2rsvp = {this.state.g2rsvp}
            g2app = {this.state.g2app}
            g2entree = {this.state.g2entree}
            g2salad  = {this.state.g2salad }
            g2dessert = {this.state.g2dessert}
            g3name = {this.state.g3name}
            g3rsvp = {this.state.g3rsvp}
            g3app = {this.state.g3app}
            g3entree = {this.state.g3entree}
            g3salad  = {this.state.g3salad }
            g3dessert = {this.state.g3dessert}
            g4name = {this.state.g4name}
            g4rsvp = {this.state.g4rsvp}
            g4app = {this.state.g4app}
            g4entree = {this.state.g4entree}
            g4salad = {this.state.g4salad}
            g4dessert = {this.state.g4dessert}
            g5name = {this.state.g5name}
            g5rsvp = {this.state.g5rsvp}
            g5app = {this.state.g5app}
            g5entree = {this.state.g5entree}
            g5salad  = {this.state.g5salad }
            g5dessert = {this.state.g5dessert}
            responded={this.state.responded}
            />
             <RsvpRehearsal
            validateGuest={this.validateGuest} 
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            invited={this.state.invited} 
            inputError={this.state.inputError}
            guestFirstName={this.state.guestFirstName}
            guestLastName={this.state.guestLastName}
            guestGroup={this.state.guestGroup}
            g0name = {this.state.g0name}
            g0rsvp = {this.state.g0rsvp}
            g0app = {this.state.g0app}
            g0entree = {this.state.g0entree}
            g0salad  = {this.state.g0salad }
            g0dessert = {this.state.g0dessert}
            g1namw = {this.state.g1namw}
            g1rsvp = {this.state.g1rsvp}
            g1app = {this.state.g1app}
            g1entree = {this.state.g1entree}
            g1salad  = {this.state.g1salad }
            g1dessert = {this.state.g1dessert}
            g2name = {this.state.g2name}
            g2rsvp = {this.state.g2rsvp}
            g2app = {this.state.g2app}
            g2entree = {this.state.g2entree}
            g2salad  = {this.state.g2salad }
            g2dessert = {this.state.g2dessert}
            g3name = {this.state.g3name}
            g3rsvp = {this.state.g3rsvp}
            g3app = {this.state.g3app}
            g3entree = {this.state.g3entree}
            g3salad  = {this.state.g3salad }
            g3dessert = {this.state.g3dessert}
            g4name = {this.state.g4name}
            g4rsvp = {this.state.g4rsvp}
            g4app = {this.state.g4app}
            g4entree = {this.state.g4entree}
            g4salad = {this.state.g4salad}
            g4dessert = {this.state.g4dessert}
            g5name = {this.state.g5name}
            g5rsvp = {this.state.g5rsvp}
            g5app = {this.state.g5app}
            g5entree = {this.state.g5entree}
            g5salad  = {this.state.g5salad }
            g5dessert = {this.state.g5dessert}
            responded={this.state.responded}
            />
          </ContentWrapper>
        </FlexContainer>
        <HiddenForm onSubmit={null} method="post" action="/thankyou" data-netlify="true" name="rehearsal" data-netlify-honeypot="bot-field">
            <input type="hidden" name="rehearsal" value="Click Here" />
            <input type="text" name="g0name" />
            <input type="text" name="g0rsvp" />
            <input type="text" name="g0app" />
            <input type="text" name="g0entree" />
            <input type="text" name="g0salad" />
            <input type="text" name="g0dessert" />
            <input type="text" name="g1name" />
            <input type="text" name="g1rsvp" />
            <input type="text" name="g1app" />
            <input type="text" name="g1entree" />
            <input type="text" name="g1salad" />
            <input type="text" name="g1dessert" />
            <input type="text" name="g2name" />
            <input type="text" name="g2rsvp" />
            <input type="text" name="g2app" />
            <input type="text" name="g2entree" />
            <input type="text" name="g2salad" />
            <input type="text" name="g2dessert" />
            <input type="text" name="g3name" />
            <input type="text" name="g3rsvp" />
            <input type="text" name="g3app" />
            <input type="text" name="g3entree" />
            <input type="text" name="g3salad" />
            <input type="text" name="g3dessert" />
            <input type="text" name="g4name" />
            <input type="text" name="g4rsvp" />
            <input type="text" name="g4app" />
            <input type="text" name="g4entree" />
            <input type="text" name="g4salad" />
            <input type="text" name="g4dessert" />
            <input type="text" name="g5name" />
            <input type="text" name="g5rsvp" />
            <input type="text" name="g5app" />
            <input type="text" name="g5entree" />
            <input type="text" name="g5salad" />
            <input type="text" name="g5dessert" />
            <input type="text" name="numOfGuests" />
        </HiddenForm>
      </Layout>
    )
    }
}

export default Rehearsal;