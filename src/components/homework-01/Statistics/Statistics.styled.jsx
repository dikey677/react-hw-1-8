import styled from "@emotion/styled"

export const Section = styled.section`
display: flex;
flex-direction: column; 
justify-content: center;
align-items: center;
border: 1px solid black;
margin-top: 20px;
`

export const StatList = styled.ul`
display: flex;
flex-direction: row; 
justify-content: center;
align-items: center;
list-style-type: none;
padding-left: 0px;
margin-top: 0px;
margin-bottom: 0px;
`

export const StatListLI = styled.li`
display: flex;
flex-direction: column; 
justify-content: center;
align-items: center;
width: 80px;
border: 1px solid black;
`

export const Label = styled.span`
margin-bottom: 5px;
font-size: 20px;
`
export const Percentage = styled.span`
font-size: 35px;
`