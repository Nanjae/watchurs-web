import React from "react";
import styled from "styled-components";

const Footer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: ${props => props.theme.bTheme};
  color: ${props => props.theme.fTheme};
`;

const CopyrightBox = styled.footer`
  display: flex;
  justify-content: center;
  font-size: 12px;
`;

const CopyrightText = styled.div`
  text-align: center;
  line-height: 18px;
`;

export default () => {
  return (
    <Footer>
      <CopyrightBox>
        <CopyrightText>
          ⓒ {new Date().getFullYear()} WATCHURS isn’t endorsed by Riot Games and
          doesn’t reflect the views or opinions of Riot Games or anyone
          officially involved in producing or managing <br /> League of Legends.
          League of Legends and Riot Games are trademarks or registered
          trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
        </CopyrightText>
      </CopyrightBox>
    </Footer>
  );
};
