import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";
import logo_github from "../../../Assets/Images/Logos/logo_github.png";
import logo_apollo from "../../../Assets/Images/Logos/logo_apollo.png";
import logo_graphql from "../../../Assets/Images/Logos/logo_graphql.png";
import logo_heroku from "../../../Assets/Images/Logos/logo_heroku.png";
import logo_netlify from "../../../Assets/Images/Logos/logo_netlify.png";
import logo_nodejs from "../../../Assets/Images/Logos/logo_nodejs.png";
import logo_react from "../../../Assets/Images/Logos/logo_react.png";

const ContentDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: 100%;
  background-color: ${(props) => props.theme.lightGray};
`;

// 기술 스택 컨텐츠

const TechStackDiv = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 599px) {
    min-height: 600px;
  }
  @media screen and (min-width: 600px) {
    min-height: 700px;
  }
  @media screen and (min-width: 800px) {
    min-height: 600px;
  }
  @media screen and (min-width: 1300px) {
    max-width: 1440px;
    min-height: 840px;
  }
`;

const TechStackFstBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 599px) {
    height: 120px;
  }
  @media screen and (min-width: 600px) {
    height: 140px;
  }
  @media screen and (min-width: 800px) {
    height: 160px;
  }
  @media screen and (min-width: 1300px) {
    height: 240px;
  }
`;

const TechStackSndBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 599px) {
    height: 120px;
  }
  @media screen and (min-width: 600px) {
    height: 140px;
  }
  @media screen and (min-width: 800px) {
    height: 160px;
  }
  @media screen and (min-width: 1300px) {
    height: 240px;
  }
`;

const TechStackInner = styled.div`
  @media screen and (max-width: 599px) {
    width: 50%;
    height: 100%;
  }
  @media screen and (min-width: 600px) {
    width: 50%;
    height: 100%;
  }
  @media screen and (min-width: 800px) {
    width: 33%;
    height: 100%;
    flex-direction: column;
  }
  @media screen and (min-width: 1300px) {
    width: 33%;
    height: 100%;
    flex-direction: column;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 기술 스택 내부

const TechStackImage = styled.div`
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
  width: 60%;
  height: 60%;
`;

export default () => {
  const { windowWidth } = useWindowDimensions();
  return (
    <>
      {windowWidth < 800 ? (
        <ContentDiv>
          <TechStackDiv>
            <TechStackFstBox>
              <TechStackInner>
                <TechStackImage url={logo_react} />
              </TechStackInner>
            </TechStackFstBox>
            <TechStackFstBox>
              <TechStackInner>
                <TechStackImage url={logo_nodejs} />
              </TechStackInner>
              <TechStackInner>
                <TechStackImage url={logo_graphql} />
              </TechStackInner>
            </TechStackFstBox>
            <TechStackSndBox>
              <TechStackInner>
                <TechStackImage url={logo_apollo} />
              </TechStackInner>
              <TechStackInner>
                <TechStackImage url={logo_github} />
              </TechStackInner>
            </TechStackSndBox>
            <TechStackFstBox>
              <TechStackInner>
                <TechStackImage url={logo_netlify} />
              </TechStackInner>
              <TechStackInner>
                <TechStackImage url={logo_heroku} />
              </TechStackInner>
            </TechStackFstBox>
          </TechStackDiv>
        </ContentDiv>
      ) : (
        <ContentDiv>
          <TechStackDiv>
            <TechStackFstBox>
              <TechStackInner>
                <TechStackImage url={logo_nodejs} />
              </TechStackInner>
              <TechStackInner>
                <TechStackImage url={logo_graphql} />
              </TechStackInner>
            </TechStackFstBox>
            <TechStackSndBox>
              <TechStackInner>
                <TechStackImage url={logo_apollo} />
              </TechStackInner>
              <TechStackInner>
                <TechStackImage url={logo_react} />
              </TechStackInner>
              <TechStackInner>
                <TechStackImage url={logo_github} />
              </TechStackInner>
            </TechStackSndBox>
            <TechStackFstBox>
              <TechStackInner>
                <TechStackImage url={logo_netlify} />
              </TechStackInner>
              <TechStackInner>
                <TechStackImage url={logo_heroku} />
              </TechStackInner>
            </TechStackFstBox>
          </TechStackDiv>
        </ContentDiv>
      )}
    </>
  );
};
