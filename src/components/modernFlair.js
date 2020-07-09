import React from "react"
import styled from "styled-components"
import { theme } from "./theme"


//TODO
//how to handle mobile?

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
        clip-path:polygon(20% 34.5%, 100% 7%, 100% 58%);
        z-index:-1;
        
    }
`


const ModernFlair = (props) => {

    return <ModernBox type={props.type} color={props.color} zindex={props.zindex}/>
    /*
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
*/
    
  
}

export default ModernFlair;
