// redirect for common misspelling
import { navigate } from 'gatsby';
import React from 'react';

//I should probably use hooks, but...
class Rehersal extends React.Component{
    constructor(){
        super()
    }

    componentDidMount(){
        navigate('/rehearsal')
    }

    render(){
        return null
    }
    
}

export default Rehersal
