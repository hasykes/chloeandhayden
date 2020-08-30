import React from "react"
import styled from "styled-components"
import { theme } from "./theme"
import Title from "./title"

const SubPageContainer = styled.div`
    width:82%;
    height:100%;
    background-color:#F0AE67;
    margin:3em auto;
`

const Content = styled.div`
    color:#f1f5f6;
    font-size:2em;
    font-weight:bold;
    padding-top:5.5em;
    margin:0 auto;
    text-align: center;
    
`

const Date = styled.h2`
    font-size:2em;
`

const StyledP = styled.p`   
    padding-bottom:1em;
    
`

const StyledPtwo = styled.p`   
    padding-top:.5em;
`

const StyledA = styled.a`
    color:inherit;
    
    
`

const RSVP = styled.a`
    margin-top:1em;
    padding:.5em;
    background-color:transparent;
    border:1px solid #f1f5f6;
    border-radius:10px;
    color:#f1f5f6;

    display:inline-block;
`

const SubPage = (props) => {
return(
    <SubPageContainer>
        <Content>
        <Date>March 27th, 2021</Date>
        <StyledP><StyledA href="https://www.factoryatlanta.events/">The Factory</StyledA></StyledP>

        <StyledP>5616 New Peachtree Rd</StyledP>
        <StyledP>Chamblee, GA 30341</StyledP>
        <StyledPtwo>Reception to follow.</StyledPtwo>
        <StyledP>
            <RSVP href='/rsvp'>RSVP</RSVP>
        </StyledP>
        </Content>
    </SubPageContainer>
)
}

export default SubPage;
