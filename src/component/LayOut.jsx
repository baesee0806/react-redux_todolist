import React from "react";
import styled from "styled-components";

const StLayout = styled.div`
max-width: 1200px;
min-width: 800px;
margin: 0 auto;
`;


function LayOut({ children }) {
    return <StLayout>{children}</StLayout>;
}

export default LayOut