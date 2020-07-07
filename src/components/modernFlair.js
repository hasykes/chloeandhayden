import React from "react"
import styled from "styled-components"
import { theme } from "./theme"

const ModernBoxPeach = styled.div`
/* Polygon 1 */
/*m = 10/7*/

position: absolute;
width: 100%;
height: 100%;
clip-path:polygon(100% 0%, 100% 100%, 30% 100%);
background: #FAD3BF;

/*Mobile Styles*/
@media (max-width: ${theme.devices.tablet}px) {
    clip-path:polygon(0% 0%, 100% 0%, 100% 5%, 0% 40%);
    
  }
`

const ModernBoxBlue = styled.div`
/* Polygon 2 */
/*m=-10/6.67*/

position: absolute;
width: 100%;
height: 100%;
clip-path:polygon(0% 55%, 0% 100%, 30% 100%);
background: #84A4B2;

/*Mobile Styles*/
@media (max-width: ${theme.devices.tablet}px) {
    clip-path:polygon(0% 100%, 100% 100%, 100% 60%, 0% 30%);
    z-index:-1;
    
    
  }
`

const ModernBoxTerra = styled.div`
/* Polygon 3 */

position: absolute;
width: 100%;
height: 100%;
clip-path:polygon(0% 0%, 98% 0%, 30% 98%,0% 53%);
background: #F0AE67;

//!finish this
/*Mobile Styles*/
@media (max-width: ${theme.devices.tablet}px) {
    clip-path:polygon(20% 34.5%, 100% 7%, 100% 58%);
    z-index:-1;
    
  }
`

const BottomArrow = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    clip-path:polygon(26.665% 94%, 30% 99%, 33.5% 94%);
    background: #f0ae82;
    
    /*Animations*/
    -moz-animation: bounce 2s infinite;
    -webkit-animation: bounce 2s infinite;
    animation: bounce 2s infinite;
      
    @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-30px);
    }
    60% {
        transform: translateY(-15px);
    }
    }

    /*Mobile Styles*/
    @media (max-width: ${theme.devices.tablet}px) {
        display: none;
    }
`

const MiddleArrow = styled.div`
    position: absolute;
    display:none;
    width: 100%;
    height: 100%;
    clip-path:polygon(25.33% 92%, 25.8% 93%, 34% 93%, 34.9% 92%);
    background: #888;
`

const TopArrow = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    clip-path:polygon(24.66% 92%);
    background: #888;
    
`

const ModernFlair = (props) => {

    switch(props.flair){
        case 'peach': 
            return <ModernBoxPeach />
            break;
        case 'blue': 
            return <ModernBoxBlue />
            break;
        case 'terra': 
            return <ModernBoxTerra />
            break;
        case 'bottomArrow':
            return <BottomArrow/>
            break;
        case 'middleArrow':
            return <MiddleArrow/>
            break;
        case 'topArrow':
            return <TopArrow/>
            break;
        default:
            return <></>

    }

    
  
}

export default ModernFlair;
