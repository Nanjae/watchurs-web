import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
`;

const ContentDiv = styled.div`
  width: 60%;
  margin-left: 8%;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 100%;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 90%;
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

export default ({ underBgIndex }) => {
  return (
    <>
      <Wrapper>
        <ContentDiv>
          <ContentBox>
            <ImageBox>
              <Image url={underBgIndex}>
                <ImageOpacity />
              </Image>
            </ImageBox>
          </ContentBox>
        </ContentDiv>
      </Wrapper>
    </>
  );
};
