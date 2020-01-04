import React from "react";
import styled from "styled-components";

const Footer = styled.div``;

const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 0px 15%;
  background-color: ${props => props.theme.blackBlueColor};
  color: ${props => props.theme.fTheme};
  user-select: none;
  line-height: 15px;
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
`;

const CopyrightSndText = styled.div`
  font-weight: bold;
  margin: 0px 5px;
  color: ${props => props.theme.lightOrangeColor};
  text-align: center;
`;

export default () => {
  return (
    <Footer>
      <FooterDiv>
        <CopyrightFstBox>
          <CopyrightFstText>ⓒ {new Date().getFullYear()}</CopyrightFstText>
          <CopyrightSndText>WATCHURS</CopyrightSndText>
          <CopyrightFstText>
            isn’t endorsed by Riot Games and doesn’t reflect the views or
            opinions of Riot Games or anyone officially involved in producing or
            managing
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
    </Footer>
  );
};
