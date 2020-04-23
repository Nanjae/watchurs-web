import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import bg_lol from "../../Assets/Images/Bg/bg_lol.jpg";

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkgray;
`;

const ControlDiv = styled.div`
  position: absolute;
  width: 50%;
  height: 20%;
  background-color: midnightblue;
  border-radius: 20px;
  box-shadow: 5px 5px 0px 0px mediumblue;
  /* border: 2px solid violet; */
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ContentGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const ContentInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const ContentBg = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  width: 100%;
  height: 100%;
  background-position: center center;
  border: 2px solid lightgray;
  /* box-shadow: 0px 0px 1px 1px darkred; */
`;

export default () => {
  const { windowWidth, windowHeight } = useWindowDimensions();

  return (
    <>
      <Wrapper style={{ width: "100%", height: "100%" }}>
        {/* <ControlDiv></ControlDiv> */}
        <ContentDiv>
          <ContentGrid>
            <ContentBox>
              <ContentInner
                style={{
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <ContentBg url={bg_lol} />
              </ContentInner>
            </ContentBox>
            <ContentBox>
              <ContentInner
                style={{
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                }}
              >
                <ContentBg url={bg_lol} />
              </ContentInner>
            </ContentBox>
            <ContentBox>
              <ContentInner
                style={{
                  justifyContent: "flex-start",
                  alignItems: "flex-end",
                }}
              >
                <ContentBg url={bg_lol} />
              </ContentInner>
            </ContentBox>
            <ContentBox>
              <ContentInner
                style={{
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <ContentBg url={bg_lol} />
              </ContentInner>
            </ContentBox>
          </ContentGrid>
          {/* <ContentGrid>
            
          </ContentGrid> */}
        </ContentDiv>
      </Wrapper>
      <Wrapper
        style={{
          width: windowWidth,
          height: windowHeight,
          backgroundColor: "yellow",
        }}
      ></Wrapper>
    </>
  );
};
