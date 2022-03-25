import styled from "@emotion/styled"

export const TableBox = styled.table`
border: 1px solid black;
width: 900px;
border-collapse: collapse;
`

export const TableTh = styled.th`
border: 1px solid black;
text-transform: uppercase;
background-color: #14b1e0;
color: white;
height: 40px;
border-collapse: collapse;
`
export const TableTd = styled.td`
border: 1px solid black;
border-collapse: collapse;
text-align: center;
height: 40px;
width: 33.33%
`

export const TableTr = styled.tr`
border-collapse: collapse;
background-color: ${(props) => {
    
    if (props.idColor % 2 === 0) {
        return "rgb(239, 232, 231)"
    } else {
        return "rgb(218, 219, 222)"
    }
    
}};`
