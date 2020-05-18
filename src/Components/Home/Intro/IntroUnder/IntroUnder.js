import React, { useState } from "react";
import styled from "styled-components";
import useWindowDimensions from "../../../../Hooks/useWindowDimensions";
import { useDrag } from "react-use-gesture";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  @media only screen and (max-width: 575.99px) {
    height: 600px;
  }
  @media only screen and (min-width: 576px) {
    height: 560px;
  }
  @media only screen and (min-width: 768px) {
    height: 760px;
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    height: 100%;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const ContentDiv = styled.div`
  width: 100%;
  @media only screen and (max-width: 575.99px) {
    margin-left: 0%;
  }
  @media only screen and (min-width: 576px) {
    margin-left: 0%;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    margin-left: 8%;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const ContentBox = styled.div`
  width: 100%;
  height: 100%;
`;

const ImageBox = styled.div`
  width: 100%;
  @media only screen and (max-width: 575.99px) {
    height: 100%;
  }
  @media only screen and (min-width: 576px) {
    height: 100%;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
    height: 90%;
  }
  @media only screen and (min-width: 1536px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const Image = styled.div`
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  transition: background-image 0.5s;
`;

const ImageOpacity = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.bgMainColor};
  opacity: 0.3;
  transition: background-color 0.3s;
`;

const ImageDragDiv = styled.div`
  z-index: 20;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export default ({ arrayIndex, setArrayIndex, bgArray }) => {
  const { windowWidth } = useWindowDimensions();

  const [dragX, setDragX] = useState(0);

  const bind = useDrag(({ down, movement: [mx] }) => {
    setDragX(down ? mx : 0);
    if (!down) {
      if (dragX >= 30) {
        setArrayIndex(arrayIndex > 0 ? arrayIndex - 1 : 3);
      } else if (dragX <= -30) {
        setArrayIndex(arrayIndex < bgArray.length - 1 ? arrayIndex + 1 : 0);
      }
    }
  });

  return (
    <>
      {windowWidth >= 1200 ? (
        <Wrapper>
          <ContentDiv>
            <ContentBox>
              <ImageBox>
                <ImageDragDiv style={{ height: "90%" }} {...bind()} />
                <Image url={bgArray[arrayIndex]}>
                  <ImageOpacity />
                </Image>
              </ImageBox>
            </ContentBox>
          </ContentDiv>
        </Wrapper>
      ) : (
        <Wrapper>
          <ContentDiv>
            <ImageDragDiv {...bind()} />
            <ContentBox>
              <ImageBox>
                <Image url={bgArray[arrayIndex]}>
                  <ImageOpacity />
                </Image>
              </ImageBox>
            </ContentBox>
          </ContentDiv>
        </Wrapper>
      )}
    </>
  );
};
