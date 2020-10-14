import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Title from "./title"

const Content = styled.div`
    color:#f1f5f6;
    font-size:2em;
    font-weight:bold;
    padding-top:1em;
    margin:0 auto;
    text-align: center;
`

const RegistryList = styled.ul`
    list-style:none;
    padding-top:2em;
    height:300px;
`

const RegistryItem = styled.li`
    font-size:3em;
    height:150px;
`

const Button = styled.a`
    margin-top:1em;
    padding:.5em;
    background-color:transparent;
    border:1px solid #f1f5f6;
    border-radius:10px;
    color:#f1f5f6;

    display:inline-block;
`

const RegistrySub = (props) => {

return(
        <Content>
            <Title title ='Gift Registry' subpage="registry" subHeadOne="We are registered at..."/>
            <span><Button>Amazon</Button></span>
            <span><Button>Zola</Button></span>
        </Content>
)
}

export default RegistrySub;
