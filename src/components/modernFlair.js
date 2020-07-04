import React from "react"
import styled from "styled-components"


const ModernBoxRight = styled.div`
/* Polygon 1 */


position: absolute;
width: 100%;
height: 100%;
clip-path:polygon(100% 0%, 100% 100%, 30% 100%);
background: #FAD3BF;
`

const ModernBoxLeft = styled.div`
/* Polygon 2 */


position: absolute;
width: 100%;
height: 100%;
clip-path:polygon(0% 55%, 0% 100%, 30% 100%);
background: #84A4B2;
`

const ModernFlair = (props) => {
    const x = window.screen.width
    const y = window.screen.height

    switch(props.flair){
        case 'right': 
            return <ModernBoxRight />
            break;
        case 'left': 
            return <ModernBoxLeft />
            break;
        default:
            return <></>

    }

    
  
}

export default ModernFlair;
