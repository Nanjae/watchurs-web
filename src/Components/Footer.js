import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  display: flex;
  justify-content: left;
`;

const FooterLeft = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 20%;
  min-width: 270px;
  height: 100%;
`;

const FooterRight = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 20%;
  min-width: 320px;
  height: 100%;
`;

const Footer = styled.footer`
  width: 60%;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  font-weight: bold;
  min-width: 1140px;
  margin: 10px 0px;
`;

// const List = styled.ul`
//   display: flex;
// `;

// const ListItem = styled.li`
//   &:not(:last-child) {
//     margin-right: 16px;
//   }
// `;

// const Link = styled.div`
//   color: ${props => props.theme.bTheme};
//   cursor: pointer;
// `;

const Copyright = styled.div`
  color: ${props => props.theme.bTheme};
  text-align: center;
`;

export default () => {
  // const openInNewTab = url => {
  //   const win = window.open(url, "_blank");
  //   win.focus();
  // };
  return (
    <FooterWrapper>
      <FooterLeft />
      <Footer>
        {/* <List>
          <ListItem>
            <Link onClick={() => openInNewTab("https://watchurs.com")}>
              WATCHURS란?
            </Link>
          </ListItem>
        </List> */}
        <Copyright>
          ⓒ {new Date().getFullYear()} WATCHURS isn’t endorsed by Riot Games and
          doesn’t reflect the views or opinions of Riot Games or anyone
          officially involved in producing or managing League of Legends. League
          of Legends and Riot Games are trademarks or registered trademarks of
          Riot Games, Inc. League of Legends © Riot Games, Inc.
        </Copyright>
      </Footer>
      <FooterRight />
    </FooterWrapper>
  );
};
