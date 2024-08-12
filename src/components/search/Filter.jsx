import React from "react";
import styled from "styled-components";

// const downDown
export  const Filter = ({ilter,setFilter})=>{

    return(
        <StyldForm>
          <h3>세부필터</h3>
        </StyldForm>
    );
}



const StyldForm = styled.form`
width: 817px;
height: 418px;
border-radius: 20px;
background-color: #FFFFFF;
margin-top: 44px;
box-sizing: border-box;
padding: 25px;
display: flex;
flex-direction: column;
justify-content: center;

& h3 {
font-size: 18px;
font-weight:200;
color: #5D5D5D;
text-align: center;
}
`;