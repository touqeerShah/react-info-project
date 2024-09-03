// import { useState } from 'react'
import styled from 'styled-components'


const Section = styled.div`
    background-color: #ffffff;
    border: solid 3px grey;
    margin: 4px;
    width: 300px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    justify-content: left;
    font-size: 20px;
    color: #ff6961;
`
const Title = styled.div`
   display: flex;
    justify-content: center;
    width: 50px;
    border-right: solid 3px lightgrey;

`

const SectionCom = ({title}) => {
    return (
        <Section>
                <Title>{title}</Title>
        </Section>
    )
}

export default SectionCom