import React from "react";
import styled from "styled-components";

const Footer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: ${props => props.theme.bTheme};
  color:${props => props.theme.fTheme};
  /* border-top: 1px solid ${props => props.theme.eTheme}; */
`;

const CopyrightBox = styled.footer`
  display: flex;
  justify-content: center;
  font-size: 12px;
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

const CopyrightText = styled.div`
  text-align: center;
  line-height: 18px;
`;

export default () => {
  // const openInNewTab = url => {
  //   const win = window.open(url, "_blank");
  //   win.focus();
  // };
  return (
    <Footer>
      <CopyrightBox>
        {/* <List>
          <ListItem>
            <Link onClick={() => openInNewTab("https://watchurs.com")}>
              WATCHURS란?
            </Link>
          </ListItem>
        </List> */}
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
