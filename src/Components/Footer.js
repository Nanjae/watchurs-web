import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../Hooks/useWindowDimensions";

const Footer = styled.div``;

const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.blackBlueColor};
  color: ${props => props.theme.fTheme};
  user-select: none;
  @media only screen and (max-width: 599px) {
    line-height: 12px;
    height: 70px;
    padding: 0px 0%;
    letter-spacing: -0.5px;
    font-size: 10px;
  }
  @media only screen and (min-width: 600px) {
    line-height: 15px;
    height: 60px;
    padding: 0px 4%;
    font-size: 11px;
  }
  @media only screen and (min-width: 1200px) {
    line-height: 15px;
    height: 50px;
    padding: 0px 6%;
    font-size: 12px;
  }
  @media only screen and (min-width: 1800px) {
    line-height: 15px;
    height: 50px;
    padding: 0px 8%;
    font-size: 13px;
  }
`;

const CopyrightFstBox = styled.footer`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 599px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const CopyrightSndBox = styled.footer`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 599px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const CopyrightFstText = styled.div`
  text-align: center;
  @media only screen and (max-width: 599px) {
  }
  @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 1200px) {
  }
  @media only screen and (min-width: 1800px) {
  }
`;

const CopyrightSndText = styled.div`
  color: ${props => props.theme.lightOrangeColor};
  text-align: center;
  @media only screen and (max-width: 599px) {
    font-weight: bold;
    margin: 0px 2px;
  }
  @media only screen and (min-width: 600px) {
    font-weight: bold;
    margin: 0px 3px;
  }
  @media only screen and (min-width: 1200px) {
    font-weight: bold;
    margin: 0px 4px;
  }
  @media only screen and (min-width: 1800px) {
    font-weight: bold;
    margin: 0px 5px;
  }
`;

export default () => {
  const { windowWidth } = useWindowDimensions();

  return (
    <Footer>
      {windowWidth < 600 ? (
        <FooterDiv>
          <CopyrightFstBox>
            <CopyrightFstText>ⓒ {new Date().getFullYear()}</CopyrightFstText>
            <CopyrightSndText>WATCHURS</CopyrightSndText>
            <CopyrightFstText>
              isn’t endorsed by Riot Games and doesn’t reflect
            </CopyrightFstText>
          </CopyrightFstBox>
          <CopyrightFstBox>
            <CopyrightFstText>
              the views or opinions of Riot Games or anyone officially involved
            </CopyrightFstText>
          </CopyrightFstBox>
          <CopyrightFstBox>
            <CopyrightFstText>
              in producing or managing League of Legends. League of Legends
            </CopyrightFstText>
          </CopyrightFstBox>
          <CopyrightSndBox>
            <CopyrightFstText>
              and Riot Games are trademarks or registered trademarks
            </CopyrightFstText>
          </CopyrightSndBox>
          <CopyrightSndBox>
            <CopyrightFstText>
              of Riot Games, Inc. League of Legends © Riot Games, Inc.
            </CopyrightFstText>
          </CopyrightSndBox>
        </FooterDiv>
      ) : windowWidth >= 1200 ? (
        <FooterDiv>
          <CopyrightFstBox>
            <CopyrightFstText>ⓒ {new Date().getFullYear()}</CopyrightFstText>
            <CopyrightSndText>WATCHURS</CopyrightSndText>
            <CopyrightFstText>
              isn’t endorsed by Riot Games and doesn’t reflect the views or
              opinions of Riot Games or anyone officially involved in producing
              or managing
            </CopyrightFstText>
          </CopyrightFstBox>
          <CopyrightSndBox>
            <CopyrightFstText>
              League of Legends. League of Legends and Riot Games are trademarks
              or registered trademarks of Riot Games, Inc. League of Legends ©
              Riot Games, Inc.
            </CopyrightFstText>
          </CopyrightSndBox>
        </FooterDiv>
      ) : (
        <FooterDiv>
          <CopyrightFstBox>
            <CopyrightFstText>ⓒ {new Date().getFullYear()}</CopyrightFstText>
            <CopyrightSndText>WATCHURS</CopyrightSndText>
            <CopyrightFstText>
              isn’t endorsed by Riot Games and doesn’t reflect the views or
              opinions of Riot Games
            </CopyrightFstText>
          </CopyrightFstBox>
          <CopyrightFstBox>
            or anyone officially involved in producing or managing League of
            Legends. League of Legends and Riot
          </CopyrightFstBox>
          <CopyrightSndBox>
            <CopyrightFstText>
              Games are trademarks or registered trademarks of Riot Games, Inc.
              League of Legends © Riot Games, Inc.
            </CopyrightFstText>
          </CopyrightSndBox>
        </FooterDiv>
      )}
    </Footer>
  );
};
