import styled from "@emotion/styled"

export const UL = styled.ul`
display: flex;
flex-direction: column; 
justify-content: center;
align-items: center;
padding-left: 0px;
`

export const LI = styled.li`
display: flex;
flex-direction: row; 
justify-content: left;
align-items: center;
border: 1px solid black;
width: 300px;
height: 70px;
margin-bottom: 10px;
border-radius: 5px;
box-shadow: 10px 5px 5px black;
`

export const Name = styled.p`
margin-left: 25px;
`

export const Img = styled.img`
border: 1px solid black;
border-radius: 5px;
box-shadow: 2px 2px 2px black;
`

export const Online = styled.div`
width: 15px;
height: 15px;
background-color: green;
border-radius: 50%;
margin-left: 25px;
margin-right: 25px;
`

export const Offline = styled.div`
width: 15px;
height: 15px;
background-color: red;
border-radius: 50%;
margin-left: 25px;
margin-right: 25px;
`

// export const Chip = styled.span`
// width: 15px;
// height: 15px;

// border-radius: 50%;
// margin-left: 25px;
// margin-right: 25px;

// background-color: $(props => {
//     switch (props.type) {
//         case 'online':
//             return 'green';
//         case 'offline':
//             return 'red';
//     }
// });
// `;