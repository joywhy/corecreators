import React from "react";
import styled from "styled-components";


export  const Filter = ()=>{

    return(
        <StyldForm>
          <h1>세부필터</h1>
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

& h1 {
font-size: 18px;
font-weight:normal;
color: #5D5D5D;
}
`;