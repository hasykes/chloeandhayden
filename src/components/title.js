//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const TitleContainer = styled.div`
 position:absolute;
 width:50%;
 margin:1em;
`

const Title = () => (
  <TitleContainer>
  <h1>
    Chloe And Hayden 
  </h1>
  <h2>March 27th, 2020</h2>
  <h2>The Factory - Atlanta</h2>
  </TitleContainer>  
)

export default Title
