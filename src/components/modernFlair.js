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
@media (max-width: ${theme.devices.tablet}px),(orientation: portrait)  {
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
@media (max-width: ${theme.devices.tablet}px),(orientation: portrait)  {
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

/*Mobile Styles*/
@media (max-width: ${theme.devices.tablet}px),(orientation: portrait)  {
    clip-path:polygon(20% 34.5%, 100% 7%, 100% 58%);
    z-index:-1;
    
  }
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
        default:
            return <></>

    }

    
  
}

export default ModernFlair;
