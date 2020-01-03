import React from "react";
import styled from "styled-components";
import useWindowDimensions from "../Hooks/useWindowDimensions";

const Footer = styled.div``;

const FooterDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: ${props => props.theme.darkBlueColor};
  color: ${props => props.theme.fTheme};
  user-select: none;
`;

const CopyrightFstBox = styled.footer`
  display: flex;
  justify-content: center;
  font-size: 13px;
`;

const CopyrightSndBox = styled.footer`
  display: flex;
  justify-content: center;
  font-size: 13px;
`;

const CopyrightFstText = styled.div`
  text-align: center;
  line-height: 15px;
`;

const CopyrightSndText = styled.div`
  font-weight: bold;
  margin: 0px 5px;
  color: ${props => props.theme.lightOrangeColor};
  text-align: center;
  line-height: 15px;
`;

export default () => {
  const { windowWidth } = useWindowDimensions();
  return (
    <Footer>
      {// 너비 < 900
      windowWidth < 900 ? (
        <FooterDiv>
          <CopyrightFstBox style={{ fontSize: 9 }}>
            <CopyrightFstText>ⓒ {new Date().getFullYear()}</CopyrightFstText>
            <CopyrightSndText style={{ margin: "0px 3px" }}>
              WATCHURS
            </CopyrightSndText>
            <CopyrightFstText>
              isn’t endorsed by Riot Games and doesn’t reflect the views or
              opinions of Riot Games or anyone officially involved in producing
              or managing
            </CopyrightFstText>
          </CopyrightFstBox>
          <CopyrightSndBox style={{ fontSize: 9 }}>
            <CopyrightFstText>
              League of Legends. League of Legends and Riot Games are trademarks
              or registered trademarks of Riot Games, Inc. League of Legends ©
              Riot Games, Inc.
            </CopyrightFstText>
          </CopyrightSndBox>
        </FooterDiv>
      ) : // 너비 < 1200
      windowWidth < 1200 ? (
        <FooterDiv>
          <CopyrightFstBox style={{ fontSize: 11 }}>
            <CopyrightFstText>ⓒ {new Date().getFullYear()}</CopyrightFstText>
            <CopyrightSndText style={{ margin: "0px 4px" }}>
              WATCHURS
            </CopyrightSndText>
            <CopyrightFstText>
              isn’t endorsed by Riot Games and doesn’t reflect the views or
              opinions of Riot Games or anyone officially involved in producing
              or managing
            </CopyrightFstText>
          </CopyrightFstBox>
          <CopyrightSndBox style={{ fontSize: 11 }}>
            <CopyrightFstText>
              League of Legends. League of Legends and Riot Games are trademarks
              or registered trademarks of Riot Games, Inc. League of Legends ©
              Riot Games, Inc.
            </CopyrightFstText>
          </CopyrightSndBox>
        </FooterDiv>
      ) : (
        // 너비 >= 1200
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
      )}
    </Footer>
  );
};
