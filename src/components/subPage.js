import React from "react"
import styled from "styled-components"
import AboutSub from "./aboutSub"
import RegistrySub from "./registrySub"

const SubPageContainer = styled.div`
    width:82%;
    height:100%;
    background-color:${ props => {
            switch(props.content){
                case 'about':
                    return '#F0AE67'
                case 'registry':
                    return '#FAD3BF'
            }   
        }
    };

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

    const renderSwitch = (content) => {
        switch(content){
            case 'about':
                return <AboutSub />
            case 'registry':
                return <RegistrySub />
            default:
                return 'TEST'
        }
    }

    return(
        <SubPageContainer content={props.content}>
            {renderSwitch(props.content)}
        </SubPageContainer>
    )
}

export default SubPage;
