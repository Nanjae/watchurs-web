import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import Header from "../../Components/Header";
import Theme from "../../Styles/Theme";
import Grid from "../../Components/Grid";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
  height: fit-content;
`;

export default () => {
  const { windowWidth, windowHeight } = useWindowDimensions();

  return (
    <>
      <Wrapper
        style={{
          backgroundColor: Theme.deepGray,
          minWidth: windowWidth,
          minHeight: windowHeight,
        }}
      >
        <Header />
        <Grid />
      </Wrapper>
    </>
  );
};
