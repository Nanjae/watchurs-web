import React from "react";
import styled from "styled-components";
import Theme from "../../Styles/Theme";

const Wrapper = styled.div`
  height: fit-content;
  width: 100%;
  max-width: 1780px;
  padding-top: 76px;
  background-color: ${props => props.theme.gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 800px;
  width: 100%;
`;

export default () => {
  return (
    <Wrapper>
      <Box style={{ backgroundColor: Theme.gray }}>dev스크롤 테스트</Box>
      <Box style={{ backgroundColor: Theme.white }}>스크롤 테스트</Box>
      <Box style={{ backgroundColor: "black", color: "white" }}>
        스크롤 테스트
      </Box>
      <Box style={{ backgroundColor: Theme.white }}>스크롤 테스트</Box>
    </Wrapper>
  );
};
