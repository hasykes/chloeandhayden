import React from "react"
import styled from "styled-components"
import { theme } from "./theme"


const DownArrows = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    clip-path:polygon(30% 96%,32% 94%,28% 94%);
    background: black;
    z-index:9;

`

const DownArrowMiddle = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    clip-path:polygon(30% 93%,32% 91%,28% 91%);
    background: black;
    z-index:9;

`

/*
    
    //Mobile Styles
    @media (max-width: ${theme.devices.tablet}px),(orientation: portrait)  {
        clip-path:polygon(${props => {
            switch(props.mobileType){
                case 'top':
                    return '0% 0%, 100% 0%, 100% 5%, 0% 40%'
                    
                case 'middle':
                    return '0% 100%, 100% 100%, 100% 60%, 0% 30%'
                    
                case 'bottom':
                    return '20% 34.5%, 100% 7%, 100% 58%'
                    
                default:
                    return ''
            }
        }});
        
    }
*/

const callToAction = () => <DownArrows  />

export default callToAction;
