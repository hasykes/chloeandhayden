import { Link } from "gatsby"
import styled from "styled-components"
import React from "react"
import Burger from "./burger"

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 900px;
  padding-top: 0;
  padding-bottom: 0.5em;
  margin: 0 auto;

  ${props => {
    return `@media (max-width: ${props.theme.devices.tablet}px){
      flex-direction:column;
    }`
  }}
`

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: ${props => props.theme.primaryDark};
`

const StyledSpan = styled.span`
  flex: 1 0 auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  ${props => {
    if (props.open) {
      return `display:inline-block;`
    }
    return `@media (max-width: ${props.theme.devices.tablet}px){
      display:none;
    }`
  }}
`

class Nav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
      visible: this.props.breakpoint === "tablet" ? true : false,
      activeLink: "home",
    }
  }

  handleWindowResize = () => {
    window.innerWidth <= this.props.theme.devices.tablet
      ? this.setState({ visible: true })
      : this.setState({ visible: false })
  }

  //Add event listener
  componentDidMount = () => {
    this.handleWindowResize()
    window.addEventListener("resize", this.handleWindowResize.bind(this))
  }

  //Remove event listener
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.handleWindowResize.bind(this))
  }

  setOpen() {
    this.setState({ open: !this.state.open })
  }

  render() {
    return (
      <StyledNav>
        <Burger
          open={this.state.open}
          setOpen={this.setOpen.bind(this)}
          visible={this.state.visible}
        />
        {this.props.menuLinks.map(link => (
          <StyledSpan key={link.name} open={this.state.open}>
            <StyledLink
              activeStyle={{ color: "#96b60b", textDecoration: "underline" }}
              to={link.link}
            >
              {link.name}
            </StyledLink>
          </StyledSpan>
        ))}
      </StyledNav>
    )
  }
}

export default Nav
