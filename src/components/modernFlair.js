import React from "react"
import styled from "styled-components"
import { theme } from "./theme"


const ModernBox = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    clip-path:polygon(${props => {
        //bottom-right: slope = 10/7
        //bottom-left: slope = 10/6.67
        switch(props.type){
            case 'bottom-right':
                return '100% 0%, 100% 100%, 30% 100%'
                break;
            case 'bottom-left':
                return '0% 55%, 0% 100%, 30% 100%'
                break;
            case 'top-center':
                return '0% 0%, 98% 0%, 30% 98%,0% 53%'
                break;
            default:
                return ''
        }   
    }});
    background: ${props => {
        switch(props.color){
            case 'peach':
                return '#FAD3BF'
                break;
            case 'blue':
                return '#84A4B2'
                break;
            case 'terra':
                return '#F0AE67'
                break;
            default:
                return 'transparent'
        }
    }};
    z-index:${props => props.zindex};

    /*Mobile Styles*/
    @media (max-width: ${theme.devices.tablet}px),(orientation: portrait)  {
        clip-path:polygon(${props => {
            switch(props.mobileType){
                case 'top':
                    return '0% 0%, 100% 0%, 100% 5%, 0% 40%'
                    break;
                case 'middle':
                    return '0% 100%, 100% 100%, 100% 60%, 0% 30%'
                    break;
                case 'bottom':
                    return '20% 34.5%, 100% 7%, 100% 58%'
                    break;
                default:
                    return ''
            }
        }});
        
    }
`

const ModernFlair = (props) => <ModernBox type={props.type} color={props.color} mobileType={props.mobileType} zindex={props.zindex}/>

export default ModernFlair;
